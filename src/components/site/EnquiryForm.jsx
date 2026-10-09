"use client";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappHref } from "@/constants/app-setting";

/**
 * Package enquiry form. The project has no backend/API, so instead of a form
 * that silently does nothing, the details are sent as a pre-filled WhatsApp
 * message to the Flying Zone team.
 */
const EnquiryForm = ({ packageTitle }) => {
  const [form, setForm] = useState({ name: "", phone: "", travellers: "", when: "", notes: "" });

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const lines = [
      "Assalamu alaikum, I would like to enquire about an Umrah package.",
      packageTitle && `Package: ${packageTitle}`,
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.travellers && `Travellers: ${form.travellers}`,
      form.when && `Preferred travel time: ${form.when}`,
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="fz-form" onSubmit={handleSubmit}>
      <div className="fz-field">
        <label htmlFor="enq-name">Full name</label>
        <input id="enq-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update("name")} />
      </div>
      <div className="fz-field">
        <label htmlFor="enq-phone">Phone number</label>
        <input id="enq-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={update("phone")} />
      </div>
      <div className="fz-form__row">
        <div className="fz-field">
          <label htmlFor="enq-travellers">Travellers</label>
          <input id="enq-travellers" name="travellers" type="number" min="1" inputMode="numeric" value={form.travellers} onChange={update("travellers")} />
        </div>
        <div className="fz-field">
          <label htmlFor="enq-when">Travel month</label>
          <input id="enq-when" name="when" type="text" placeholder="e.g. March" value={form.when} onChange={update("when")} />
        </div>
      </div>
      <div className="fz-field">
        <label htmlFor="enq-notes">Anything we should know?</label>
        <textarea id="enq-notes" name="notes" rows={3} value={form.notes} onChange={update("notes")} />
      </div>
      <button type="submit" className="fz-btn fz-btn--whatsapp fz-btn--block">
        <WhatsAppIcon size={18} />
        Send Enquiry on WhatsApp
      </button>
      <p className="fz-form__note">Opens WhatsApp with your details filled in. No payment is taken online.</p>
    </form>
  );
};

export default EnquiryForm;
