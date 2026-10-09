import { notFound } from "next/navigation";

// Catch-all so unknown URLs render the branded 404 in (site)/not-found.js.
// (With two root layouts there is no global app/not-found.js.)
export default function CatchAll() {
  notFound();
}
