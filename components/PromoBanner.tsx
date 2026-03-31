import { PHONE_HREF } from "@/lib/constants";

export default function PromoBanner() {
  return (
    <div className="bg-lawn text-white text-center py-2.5 px-4 text-sm font-medium">
      <span className="hidden sm:inline">Spring Special — </span>
      10% off your first service!{" "}
      <a href={PHONE_HREF} className="underline font-bold hover:text-green-200 transition-colors">
        Call to claim &rarr;
      </a>
    </div>
  );
}
