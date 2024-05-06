import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="flex flex-col items-center justify-center mx-auto mt-10"
    >
      <div className="gap-7 bg-secondary flex flex-col w-full max-w-xl p-10 rounded-md shadow-md">
        <h2 className="md:text-4xl text-light text-2xl font-bold text-center">
          FBF - Contact Us
        </h2>

        <p className="text-light text-sm font-light text-center">
          Get in touch with us
        </p>

        <div className="text-light flex flex-col gap-5 text-lg font-medium text-center">
          <p>
            Email:{" "}
            <span className="text-base font-normal">info@feedbackform.com</span>{" "}
          </p>
          <p>
            Phone: <span className="text-base font-normal">+91 0000000000</span>{" "}
          </p>
          <p>
            Address:{" "}
            <span className="text-base font-normal">
              123 Main St, Anytown USA
            </span>{" "}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-5">
          <Link to="#">
            <FaFacebook
              size={25}
              className="hover:scale-105 text-light hover:text-white transition"
            />
          </Link>

          <Link to="#">
            <FaInstagram
              size={25}
              className="hover:scale-105 text-light hover:text-white transition"
            />
          </Link>
          <Link to="#">
            <FaWhatsapp
              size={25}
              className="hover:scale-105 text-light hover:text-white transition"
            />
          </Link>
          <Link to="#">
            <FaTwitter
              size={25}
              className="hover:scale-105 text-light hover:text-white transition"
            />
          </Link>
          <Link to="#">
            <FaLinkedin
              size={25}
              className="hover:scale-105 text-light hover:text-white transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
