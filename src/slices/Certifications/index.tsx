import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type CertificationsProps =
  SliceComponentProps<Content.CertificationsSlice>;

const Certifications: FC<CertificationsProps> = ({ slice }) => {
  const items = slice.items || [];

  if (!items.length) return null;

  return (
    <section className="certifications py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {items.map((cert, index) => (
            <a
              key={index}
              href={cert.link?.url ?? "#"}
              target={cert.link?.target ?? "_self"}
              className="flex flex-col items-center justify-center p-4 border rounded hover:shadow-lg transition"
            >
              {cert.logo?.url && (
                <img
                  src={cert.logo.url}
                  alt={cert.name ?? "Certification Logo"}
                  className="max-h-20 mb-4"
                />
              )}
              {cert.name && <p className="text-center font-medium">{cert.name}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
