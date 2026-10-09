import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="fz-404">
      <div className="fz-container">
        <p className="fz-eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <div className="fz-404__actions">
          <Link href="/" className="fz-btn fz-btn--primary">
            Back to Home
          </Link>
          <Link href="/umrah" className="fz-btn fz-btn--outline">
            Umrah Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
