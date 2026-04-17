import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogs";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Article not found | StillMind"
    };
  }

  return {
    title: `${post.title} | StillMind Journal`,
    description: post.description
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <Link href="/blogs" className="text-sm text-muted-foreground transition hover:text-foreground">
          Back to Journal
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            <div className="paper-panel p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">{post.heroTag}</Badge>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-tight sm:text-5xl lg:text-[3.9rem]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.publishedAt}</span>
                <span>{post.category}</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/75 p-3 shadow-soft backdrop-blur-xl sm:p-4">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={860}
                className="h-auto w-full rounded-[28px]"
                priority
              />
            </div>

            <article className="paper-panel article-copy p-6 sm:p-8 lg:p-10">
              {post.content.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </article>
          </div>

          <div className="space-y-5 lg:sticky lg:top-28">
            <Card className="p-6" interactive={false}>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Continue gently</p>
              <h2 className="mt-3 text-2xl">Ready for a more personal layer of support?</h2>
              <p className="mt-3 text-base">
                Move from reading into action with a mock booking flow designed to feel simple.
              </p>
              <Button href="/book-session" className="mt-5" fullWidth>
                Book a session
              </Button>
            </Card>
            <Card className="p-6" interactive={false}>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">About this page</p>
              <p className="mt-3 text-base">
                Article content, author details, and recommendations are mocked to demonstrate a premium editorial layout.
              </p>
            </Card>
          </div>
        </div>

        <section className="section-padding">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">More from the journal</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Related reading</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((entry) => (
              <Card key={entry.slug} className="p-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(min-width: 1024px) 24rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 space-y-4">
                  <Badge>{entry.category}</Badge>
                  <div>
                    <h3 className="text-2xl leading-snug">{entry.title}</h3>
                    <p className="mt-3 text-base">{entry.description}</p>
                  </div>
                  <Button href={`/blogs/${entry.slug}`} variant="secondary" size="sm">
                    Read article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
