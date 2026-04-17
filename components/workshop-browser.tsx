"use client";

import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { workshops } from "@/data/workshops";
import { cn } from "@/lib/utils";

const filters = ["Upcoming", "Past"] as const;

export function WorkshopBrowser() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Upcoming");

  const visibleWorkshops = workshops.filter((workshop) => workshop.status === activeFilter);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2 rounded-full border border-white/70 bg-white/75 p-2 shadow-soft backdrop-blur-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm transition",
                activeFilter === filter
                  ? "bg-brand text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleWorkshops.map((workshop, index) => (
          <Reveal key={workshop.id} delay={index * 0.08}>
            <Card className="h-full p-6 sm:p-7">
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[26px]">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">{workshop.status}</Badge>
                <span className="text-sm text-muted-foreground">{workshop.format}</span>
              </div>
              <h2 className="mt-5 text-2xl">{workshop.title}</h2>
              <p className="mt-3 text-base">{workshop.description}</p>
              <div className="mt-6 grid gap-4 rounded-[26px] bg-secondary/40 p-4 text-sm text-muted-foreground sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Date</p>
                  <p className="mt-2 text-sm text-foreground">{workshop.date}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Duration</p>
                  <p className="mt-2 text-sm text-foreground">{workshop.duration}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Access</p>
                  <p className="mt-2 text-sm text-foreground">{workshop.seatsLeft}</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant={activeFilter === "Upcoming" ? "primary" : "secondary"}>
                  {activeFilter === "Upcoming" ? "Join Workshop" : "Watch Replay"}
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
