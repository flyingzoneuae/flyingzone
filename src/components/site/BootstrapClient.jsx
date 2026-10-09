"use client";
import { useEffect } from "react";

// Loads Bootstrap's JS (accordions/tabs on the legacy pages) after hydration,
// so the layout itself can stay a server component.
const BootstrapClient = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
};

export default BootstrapClient;
