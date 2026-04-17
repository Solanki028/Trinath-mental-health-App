"use client";

import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sessionTypes } from "@/data/site";
import { therapists } from "@/data/therapists";
import { cn } from "@/lib/utils";

const dateOptions = ["Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23"];
const timeOptions = ["9:00 AM", "11:00 AM", "1:30 PM", "4:00 PM", "6:00 PM"];

function getMatchingTherapists(sessionType: string) {
  if (sessionType === "psychiatry") {
    return therapists.filter((therapist) => therapist.specialty === "Psychiatrist");
  }

  if (sessionType === "wellness") {
    return therapists.filter(
      (therapist) =>
        therapist.specialty === "Wellness coach" || therapist.specialty === "Therapist"
    );
  }

  return therapists.filter((therapist) => therapist.specialty === "Therapist");
}

export function BookingFlow() {
  const [sessionType, setSessionType] = useState(sessionTypes[0].id);
  const [therapistId, setTherapistId] = useState("meera-khanna");
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]);
  const [selectedTime, setSelectedTime] = useState(timeOptions[1]);
  const [isBooked, setIsBooked] = useState(false);

  const availableTherapists = getMatchingTherapists(sessionType);
  const selectedTherapist =
    availableTherapists.find((therapist) => therapist.id === therapistId) ?? availableTherapists[0];

  function handleSessionChange(nextSessionType: string) {
    const matches = getMatchingTherapists(nextSessionType);
    setSessionType(nextSessionType);
    setTherapistId(matches[0]?.id ?? "");
    setIsBooked(false);
  }

  function handleBook() {
    setIsBooked(true);
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:pb-28">
      <div className="space-y-6">
        <Reveal>
          <Card className="p-6 sm:p-7" interactive={false}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Step 1</p>
                <h2 className="mt-2 text-2xl">Select session type</h2>
              </div>
              <Badge>{sessionTypes.length} options</Badge>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {sessionTypes.map((type) => {
                const active = type.id === sessionType;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleSessionChange(type.id)}
                    className={cn(
                      "rounded-[28px] border p-5 text-left transition",
                      active
                        ? "border-brand bg-brand text-white shadow-soft"
                        : "border-line/70 bg-white/70 hover:bg-white"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className={cn("text-lg", active ? "text-white" : "text-foreground")}>
                        {type.label}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs",
                          active ? "bg-white/15 text-white" : "bg-secondary/70 text-muted-foreground"
                        )}
                      >
                        {type.duration}
                      </span>
                    </div>
                    <p className={cn("mt-3 text-sm", active ? "text-white/80" : "text-muted-foreground")}>
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="p-6 sm:p-7" interactive={false}>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Step 2</p>
              <h2 className="mt-2 text-2xl">Choose your expert</h2>
            </div>
            <div className="mt-6 grid gap-4">
              {availableTherapists.map((therapist) => {
                const active = therapist.id === therapistId;
                return (
                  <button
                    key={therapist.id}
                    type="button"
                    onClick={() => {
                      setTherapistId(therapist.id);
                      setIsBooked(false);
                    }}
                    className={cn(
                      "grid gap-4 rounded-[28px] border p-5 text-left transition sm:grid-cols-[auto_1fr_auto] sm:items-center",
                      active ? "border-brand bg-brand/5" : "border-line/70 bg-white/65"
                    )}
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/80 bg-white">
                      <Image
                        src={therapist.image}
                        alt={therapist.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg">{therapist.name}</h3>
                        <Badge>{therapist.specialty}</Badge>
                      </div>
                      <p className="mt-2 text-sm">{therapist.experience}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {therapist.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white/80 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{therapist.availability}</p>
                  </button>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.16}>
          <Card className="p-6 sm:p-7" interactive={false}>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Step 3</p>
              <h2 className="mt-2 text-2xl">Pick a date and time</h2>
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Date</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {dateOptions.map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => {
                        setSelectedDate(date);
                        setIsBooked(false);
                      }}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm transition",
                        selectedDate === date
                          ? "border-brand bg-brand text-white"
                          : "border-line/70 bg-white/75 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Time</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {timeOptions.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => {
                        setSelectedTime(time);
                        setIsBooked(false);
                      }}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm transition",
                        selectedTime === time
                          ? "border-brand bg-brand text-white"
                          : "border-line/70 bg-white/75 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal className="lg:sticky lg:top-28 lg:self-start" delay={0.1}>
        <Card className="p-6 sm:p-7" interactive={false}>
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[26px]">
            <Image
              src={selectedTherapist?.image ?? therapists[0].image}
              alt={selectedTherapist?.name ?? "Therapist"}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
          <Badge variant="accent">Booking summary</Badge>
          <h2 className="mt-4 text-2xl">A clear next step, without the friction.</h2>
          <div className="mt-6 space-y-4 rounded-[28px] bg-secondary/40 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Session</p>
              <p className="mt-2 text-base text-foreground">
                {sessionTypes.find((type) => type.id === sessionType)?.label}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Expert</p>
              <p className="mt-2 text-base text-foreground">{selectedTherapist?.name}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">When</p>
              <p className="mt-2 text-base text-foreground">
                {selectedDate} / {selectedTime}
              </p>
            </div>
          </div>
          <Button onClick={handleBook} className="mt-6" fullWidth>
            Book Session
          </Button>
          <p className="mt-4 text-sm">
            This flow is mocked for UI only. No payment or backend booking logic is attached.
          </p>
          {isBooked ? (
            <div className="mt-5 rounded-[24px] border border-accent/60 bg-accent/25 p-4 text-sm text-accent-foreground">
              Your mock session has been reserved. A confirmation screen or modal could be layered here next.
            </div>
          ) : null}
        </Card>
      </Reveal>
    </div>
  );
}
