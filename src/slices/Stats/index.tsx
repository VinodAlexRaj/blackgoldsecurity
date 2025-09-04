import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type StatsProps = SliceComponentProps<Content.StatsSlice>;

const Stats: FC<StatsProps> = ({ slice }) => {
  const { intro } = slice.primary;

  return (
    <section className="stats-section py-12 px-4 bg-gray-50">
      {intro && <p className="text-lg text-center mb-8">{intro}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {slice.items.map((item, index) => (
          <div key={index} className="stat-item p-4 bg-white rounded shadow">
            {item.value && <h3 className="text-3xl font-bold mb-2">{item.value}</h3>}
            {item.label && <p className="text-gray-600">{item.label}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
