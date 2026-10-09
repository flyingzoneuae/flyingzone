"use client";
import { Fragment, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

/**
 * Homepage Umrah / Hajj mode.
 *
 * Both variants of each mode-aware section are rendered on the server and
 * passed in as props; <ModeView> only decides which one to show. So there is
 * no duplicated markup in the source, no extra client-side rendering logic,
 * and the inactive variant's images are never requested until it is shown.
 * The initial mode comes from the URL (?mode=hajj) and is rendered on the
 * server, so there is no flash or hydration mismatch. Switching updates the URL
 * in place (history.replaceState) without a reload, so the link stays shareable.
 */
const ModeContext = createContext({ mode: "umrah", switched: false, warm: false, setMode: () => {}, warmUp: () => {} });

export const MODES = [
  { id: "umrah", label: "Umrah", glyph: "✦" },
  { id: "hajj", label: "Hajj", glyph: "☾" },
];

const syncUrl = (mode) => {
  const url = new URL(window.location.href);
  if (mode === "hajj") url.searchParams.set("mode", "hajj");
  else url.searchParams.delete("mode");
  window.history.replaceState(window.history.state, "", url);
};

export const ModeProvider = ({ children, initialMode = "umrah" }) => {
  const [mode, setModeState] = useState(initialMode);
  const [switched, setSwitched] = useState(false);
  // Becomes true when the visitor shows intent (hover/focus/touch on the toggle),
  // so the other mode's hero image can start loading before the click.
  const [warm, setWarm] = useState(false);
  const warmUp = useCallback(() => setWarm(true), []);

  const setMode = useCallback((next) => {
    setModeState((prev) => {
      if (prev !== next) setSwitched(true);
      return next;
    });
    syncUrl(next);
  }, []);

  // A link to /umrah?mode=… while already on this page is a soft navigation:
  // follow the new URL's mode.
  useEffect(() => {
    setModeState((prev) => {
      if (prev !== initialMode) setSwitched(true);
      return initialMode;
    });
  }, [initialMode]);

  const value = useMemo(() => ({ mode, switched, warm, setMode, warmUp }), [mode, switched, warm, setMode, warmUp]);
  return (
    <ModeContext.Provider value={value}>
      <div className="fz-modes" data-mode={mode}>
        {children}
      </div>
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);

/** Segmented control with a sliding indicator (ARIA radiogroup, arrow-key support). */
export const ModeToggle = () => {
  const { mode, switched, setMode, warmUp } = useMode();
  const refs = useRef([]);
  const activeLabel = MODES.find((m) => m.id === mode).label;

  const onKeyDown = (event) => {
    const index = MODES.findIndex((m) => m.id === mode);
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % MODES.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + MODES.length) % MODES.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = MODES.length - 1;
    if (next === null) return;
    event.preventDefault();
    setMode(MODES[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div
      className="fz-toggle"
      role="radiogroup"
      aria-label="Choose your pilgrimage"
      onKeyDown={onKeyDown}
      onPointerEnter={warmUp}
      onTouchStart={warmUp}
      onFocus={warmUp}
    >
      <span className="fz-toggle__thumb" aria-hidden="true" />
      {MODES.map((m, i) => {
        const active = mode === m.id;
        return (
          <Fragment key={m.id}>
          <button
            ref={(el) => (refs.current[i] = el)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            className="fz-toggle__option"
            onClick={() => setMode(m.id)}
          >
            <span className="fz-toggle__glyph" aria-hidden="true">
              {m.glyph}
            </span>
            {m.label}
          </button>
          </Fragment>
        );
      })}
      <span className="fz-sr" aria-live="polite">
        {switched ? `Showing ${activeLabel} information` : ""}
      </span>
    </div>
  );
};

/** Shows the server-rendered variant for the active mode. */
export const ModeView = ({ umrah, hajj, className = "", prewarm = false, ghost = null }) => {
  const { mode, switched, warm } = useMode();
  const view = (
    <div key={mode} className={`fz-mode-view${switched ? " is-swapped" : ""} ${className}`.trim()}>
      {mode === "hajj" ? hajj : umrah}
    </div>
  );
  // With `ghost`, an invisible, inert copy of the other mode is stacked in the
  // same grid cell so the block is always as tall as the longer variant:
  // switching never shifts the layout, at any screen width.
  if (ghost) {
    return (
      <div className="fz-mode-stack">
        {view}
        <div className="fz-mode-ghost" aria-hidden="true" inert="">
          {mode === "hajj" ? ghost.umrah : ghost.hajj}
        </div>
      </div>
    );
  }
  return (
    <>
      {view}
      {/* Invisible copy of the other mode, mounted only after intent, to warm the image cache. */}
      {prewarm && warm && (
        <div className={`fz-prewarm ${className}`.trim()} aria-hidden="true">
          {mode === "hajj" ? umrah : hajj}
        </div>
      )}
    </>
  );
};
