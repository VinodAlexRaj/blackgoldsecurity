import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

const FaqSection: FC<FaqSectionProps> = ({ slice }) => {
  const { heading } = slice.primary;

  return (
    <section className="faq-section py-12 px-4 bg-gray-50">
      {heading && <h2 className="text-3xl font-bold mb-8">{heading}</h2>}

      {slice.items.map((item, index) => (
        <div key={index} className="faq-item mb-6">
          {item.question && <h3 className="text-xl font-semibold">{item.question}</h3>}
          {item.answer && <PrismicRichText field={item.answer} />}
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
