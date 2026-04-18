import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { BlogsExplorer } from "@/components/blogs-explorer";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogs";
import { SubpageBranding } from "@/sections/subpage-branding";

export default function BlogsPage() {
  return (
    <>
      <PageHero
        label="Journal"
        title="A softer reading space with visual article cards."
        description="Browse mock journal posts with search, categories, and cleaner visuals."
      >
        <Card className="overflow-hidden p-3" interactive={false}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover"
            />
          </div>
        </Card>
      </PageHero>
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <Card className="overflow-hidden p-3" interactive={false}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
              <Image
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-white/80">Featured story</p>
                <h2 className="mt-2 max-w-xl text-3xl text-white sm:text-4xl">{blogPosts[1].title}</h2>
              </div>
            </div>
          </Card>
          <div className="grid gap-6">
            {blogPosts.slice(2, 4).map((post) => (
              <Card key={post.slug} className="overflow-hidden p-3" interactive={false}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-xl text-white">{post.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <BlogsExplorer />
      <SubpageBranding />
    </>
  );
}
