"use client"
import Link from "next/link";
import "./butikk.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>
          Zero Hydro<br />
          Diet Water Street 17<br />
          Email: zero.hydro@water.diet<br />
          Phone: +47 47 00 2020<br />
          We&apos;re always here to help you and stay hydrated—responsibly.
        </p>
      </div>
    </footer>
  );
}
