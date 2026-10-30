"use client";

import { useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

declare global {
  interface Window {
    ADIA_CONTACT_EMAIL?: string;
  }
}

export function useContactEmail() {
  const [email, setEmail] = useState(CONTACT_EMAIL);
  useEffect(() => {
    const override = window.ADIA_CONTACT_EMAIL;
    if (typeof override === "string" && override.trim())
      setEmail(override.trim());
  }, []);
  return email;
}
