import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Hero Slice Component
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const { title, subtitle, background_image, cta_label, cta_link } = slice.primary;

  return (
    <section
      className="hero relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: background_image?.url ? `url(${background_image.url})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 text-white">
        {title && <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>}
        {subtitle && <p className="mt-4 text-xl md:text-2xl">{subtitle}</p>}
        {cta_label && cta_link?.url && (
          <a
            href={cta_link.url}
            target={cta_link.target ?? "_self"}
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            {cta_label}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
