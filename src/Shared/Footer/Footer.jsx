import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-2xl font-bold text-gray-700">
              iAcademy
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50 text-step">
              Courses
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-step">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-step">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer text-gray-500" href="#/">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-step">Social media</div>
            <div className="flex justify-start space-x-3">
              <FaFacebook size={25} />
              <FaGithub size={25} />
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-500">
        © Copyright 2022. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
