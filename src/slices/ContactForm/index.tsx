import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  const { heading, subtext } = slice.primary;

  return (
    <section className="contact-form py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {subtext && <p className="text-gray-600 mb-8">{subtext}</p>}

        {/* Example contact form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded p-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded p-2 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border rounded p-2 w-full h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
