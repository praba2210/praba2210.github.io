"use client";
import * as React from "react";
import { Calendar } from "lucide-react";

export function FloatingCalendly() {
  return (
    <a
      href="https://calendly.com/prabakaranaw/30min"
      target="_blank"
      rel="noreferrer"
      aria-label="Book a call on Calendly"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group"
    >
      <span className="sr-only">Book a call</span>
      <div className="rounded-full bg-indigo-600 text-white p-3 shadow-lg ring-1 ring-white/10 transition-transform duration-200 ease-out group-hover:scale-105 active:scale-95">
        <Calendar className="h-5 w-5" />
      </div>
    </a>
  );
}
