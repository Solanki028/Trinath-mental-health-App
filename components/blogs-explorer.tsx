"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogCategories, blogPosts } from "@/data/blogs";
import { cn } from "@/lib/utils";

export function BlogsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesQuery =
      query.length === 0 ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal>
        <div className="paper-panel grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-6">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, topics, and themes"
            aria-label="Search blogs"
          />
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  activeCategory === category
                    ? "bg-brand text-white"
                    : "bg-white/80 text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {visiblePosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Card className="h-full p-4 sm:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 32rem, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-2 pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="accent">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <div>
                  <Link href={`/blogs/${post.slug}`} className="group">
                    <h2 className="text-2xl leading-snug transition group-hover:opacity-80">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-base">{post.description}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="text-sm text-muted-foreground">
                    {post.author} / {post.publishedAt}
                  </div>
                  <Button href={`/blogs/${post.slug}`} variant="secondary" size="sm">
                    Read more
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <Reveal>
          <div className="paper-panel p-10 text-center">
            <h3 className="text-2xl">No articles match your search just yet.</h3>
            <p className="mt-3">
              Try a broader keyword or switch categories to explore more mock journal content.
            </p>
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
