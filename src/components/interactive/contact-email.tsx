"use client";

import { useContactEmail } from "@/hooks/use-contact-email";

export function ContactEmail() {
  const email = useContactEmail();
  return (
    <a
      className="contact-email"
      data-contact-link=""
      href={"mailto:" + encodeURIComponent(email)}
    >
      {email} <span aria-hidden="true">↗</span>
    </a>
  );
}
