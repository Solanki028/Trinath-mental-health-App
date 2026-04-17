import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[36px] border border-white/70 bg-white/75 p-10 text-center shadow-soft backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Not found</p>
        <h1 className="mt-4 text-4xl">This page drifted out of view.</h1>
        <p className="mt-4 text-base">
          The route does not exist in this static demo. Return home or continue exploring the main flows.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go home</Button>
          <Button href="/blogs" variant="secondary">
            Open journal
          </Button>
        </div>
      </div>
    </div>
  );
}
