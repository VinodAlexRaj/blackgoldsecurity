import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

const Navigation: FC<NavigationProps> = ({ slice }) => {
  return (
    <nav className="bg-white shadow py-4 px-6">
      <ul className="flex gap-6">
        {slice.items.map((item, index) => {
          if (!item.label || !item.link?.url) return null;

          const isExternal = item.link.url.startsWith("http");

          return (
            <li key={index}>
              <a
                href={item.link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
