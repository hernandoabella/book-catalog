// NewsletterSection.tsx
import React from "react";
import Link from "next/link";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-8">
      <div className="flex items-center justify-center text-center">
        <Link href="https://beat-byte-publishing.com/">
          <video
            src="/Beat-Byte  Publishing Logo.mp4"
            autoPlay
            loop
            muted
            className="w-full rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
};

export default NewsletterSection;
