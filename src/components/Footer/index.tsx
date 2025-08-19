"use client";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand + Description */}
            <div>
              <Link href="/" className="mb-6 block">
                <span className="text-primary text-3xl font-bold dark:hidden">
                  Synaxa
                </span>
                <span className="hidden text-3xl font-bold text-white dark:inline-block">
                  Synaxa
                </span>
              </Link>
              <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed">
                Empowering ideas with innovative software solutions under one
                roof.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    className="fill-current"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@synaxatechnologies.com"
                  target="_blank"
                  aria-label="Email"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                >
                  {/* Mail SVG */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 
                      2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 
                      2h20v.01L12 13 2 6.01V6zm0 2.236 8.803 
                      5.865a1 1 0 0 0 1.107 0L22 
                      8.236V18H2V8.236z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowBlog(true)}
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowCareers(true)}
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Optional Extra Column */}
            <div className="hidden lg:block">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Resources
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-primary duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary duration-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

          {/* Bottom */}
          <div className="pb-6">
            <p className="text-body-color text-center text-base dark:text-white">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://synaxatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary font-medium"
              >
                Synaxa Technologies Pvt. Ltd.
              </a>{" "}
              | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showPrivacy && (
        <Modal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
          <p>
            We value your privacy. Our Privacy Policy explains how we collect,
            use, and protect your information when you interact with our
            platform. We only collect essential data to improve our services,
            and we never sell your personal details to third parties. For more
            details, please review the complete Privacy Policy document.
          </p>
          <ul className="mt-3 list-disc pl-5">
            <li>Information we collect (name, email, usage data)</li>
            <li>How we use your information (improve services, support)</li>
            <li>Data security and user rights</li>
          </ul>
        </Modal>
      )}

      {showTerms && (
        <Modal title="Terms of Use" onClose={() => setShowTerms(false)}>
          <p>
            By using our website or services, you agree to comply with our Terms
            of Use. These terms outline acceptable usage, user responsibilities,
            and limitations of liability. If you do not agree with any of these
            terms, please discontinue using our services.
          </p>
          <ul className="mt-3 list-decimal pl-5">
            <li>Users must provide accurate and lawful information.</li>
            <li>Unauthorized use of our services is prohibited.</li>
            <li>We reserve the right to suspend accounts for violations.</li>
          </ul>
        </Modal>
      )}

      {showBlog && (
        <Modal title="Blog" onClose={() => setShowBlog(false)}>
          <p>
            Stay updated with our latest insights, tutorials, and company news.
            Our blog covers topics on technology, product updates, and industry
            trends.
          </p>
          <div className="mt-4 space-y-2">
            <a href="/blog/post-1" className="text-blue-600 underline">
              🔗 How to Get Started with Our Platform
            </a>
            <a href="/blog/post-2" className="text-blue-600 underline">
              🔗 Latest Product Updates and Features
            </a>
            <a href="/blog/post-3" className="text-blue-600 underline">
              🔗 Industry Insights You Should Know
            </a>
          </div>
        </Modal>
      )}

      {showCareers && (
        <Modal title="Careers" onClose={() => setShowCareers(false)}>
          <p>
            Join our growing team! We’re always looking for passionate
            individuals who want to make an impact. Explore open positions and
            apply today.
          </p>
          <ul className="mt-3 list-disc pl-5">
            <li>Frontend Developer – React/Next.js</li>
            <li>Backend Engineer – Node.js/Express</li>
            <li>UI/UX Designer – Figma, Prototyping</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@synaxatechnologies.com"
              className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Apply Now
            </a>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Footer;

/* --- Modal Component --- */
const Modal = ({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black-500 dark:hover:text-black-400"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
};
