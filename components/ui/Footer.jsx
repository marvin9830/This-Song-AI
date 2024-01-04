import clsx from "clsx";
import React from "react";
import { rajdhani } from "./fonts";

const Footer = () => {
  return (
    <footer className={clsx(rajdhani.className, "bg-secondary")}>
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pt-8 mb-10 text-center sm:text-end sm:grid-cols-2 lg:grid-cols-2">
          <div></div>
          <div>
            <p className="text-lg font-semibold tracking-widest text-gray-900">
              This Song
            </p>

            <ul className="text-base">
              <li>
                <a
                  href="mailto:admin@thissong.app"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {/* About */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-end">
          <p className="text-sm text-muted">
            All songs, lyrics, and images are property of their respective
            owners.
          </p>
          <p className="text-sm text-muted">
            &copy; 2024. This Song. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;