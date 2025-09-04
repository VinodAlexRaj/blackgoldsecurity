import { FC } from "react";
import { SliceComponentProps, PrismicLink } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type ServicesGridProps = SliceComponentProps<Content.ServicesGridSlice>;

const ServicesGrid: FC<ServicesGridProps> = ({ slice }) => {
  const { heading } = slice.primary;

  return (
    <section className="services-grid py-12 px-4 bg-white">
      {heading && <h2 className="text-3xl font-bold mb-8">{heading}</h2>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slice.items.map((item, index) => (
          <div key={index} className="service-card p-4 border rounded shadow-sm">
            {item.title && <h3 className="text-xl font-semibold mb-2">{item.title}</h3>}
            {item.summary && <p className="text-gray-700 mb-4">{item.summary}</p>}
            {item.link?.url && (
              <PrismicLink field={item.link} className="text-blue-600 hover:underline">
                Learn More
              </PrismicLink>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
