import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `FaqItem` slice.
 */
export type FaqItemProps = SliceComponentProps<Content.FaqItemSlice>;

/**
 * Component for "FaqItem" slice.
 */
const FaqItem: FC<FaqItemProps> = ({ slice }) => {
  const { question, answer } = slice.primary;

  return (
    <section
      className="faq-item"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h3 className="faq-question">{question}</h3>
      <div className="faq-answer">
        <PrismicRichText field={answer} />
      </div>
    </section>
  );
};

export default FaqItem;
