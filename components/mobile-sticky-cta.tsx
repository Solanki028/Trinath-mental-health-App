"use client";

import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-background/88 px-4 py-3 backdrop-blur-xl lg:hidden">
      <Button href="/book-session" fullWidth>
        Book a session
      </Button>
    </div>
  );
}
