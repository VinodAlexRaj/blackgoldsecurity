import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta: FC<CtaProps> = ({ slice }) => {
  const { heading, description, button_label, button_link } = slice.primary;

  return (
    <section className="cta">
      {heading && <h2>{heading}</h2>}
      {description && <PrismicRichText field={description} />}
      {button_label && button_link?.url && (
        <a href={button_link.url} className="cta-button">
          {button_label}
        </a>
      )}
    </section>
  );
};

export default Cta;
