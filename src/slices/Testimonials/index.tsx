import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <section className="testimonials py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="testimonial p-6 bg-white rounded shadow hover:shadow-lg transition"
          >
            {item.quote && <PrismicRichText field={item.quote} />}
            {item.author && <p className="mt-4 font-semibold">{item.author}</p>}
            {item.company && <p className="text-gray-500">{item.company}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
