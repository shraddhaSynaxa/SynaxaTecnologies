"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className={`header-logo mb-8 block w-full`}>
                  {/* Light mode text */}
                  <span className="text-primary text-3xl font-bold dark:hidden">
                    Synaxa
                  </span>

                  {/* Dark mode text */}
                  <span className="hidden text-3xl font-bold text-white dark:inline-block">
                    Synaxa
                  </span>
                </Link>
                <p className="text-body-color dark:text-body-color-dark mb-9 text-base leading-relaxed">
                  Empowering ideas with innovative software solutions under one
                  roof.
                </p>

                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shraddhasalvi272@gmail.com"
                    target="_blank"
                    aria-label="mail-link"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary ml-4 duration-300"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Quick Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="#"
                      onClick={() => setShowPrivacy(true)}
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => setShowTerms(true)}
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
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
        <div className="absolute top-14 right-0 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="dark:bg-gray-dark relative w-full max-w-xl rounded-lg bg-white p-6">
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-3 right-3 z-50 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                aria-label="Close Privacy Policy"
              >
                ✕
              </button>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Privacy Policy
              </h3>
              <div className="max-h-[60vh] overflow-y-auto text-base leading-relaxed text-gray-700 dark:text-gray-200">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  Privacy Policy Your privacy is important to us. This Privacy
                  Policy explains how we handle the information you provide when
                  visiting our website. 1. Information We Collect We may collect
                  information you provide voluntarily, such as your name, email
                  address, and contact details when signing up for newsletters
                  or submitting inquiries. 2. How We Use Your Information Your
                  information is used to: Provide updates and respond to your
                  inquiries. Improve our website and services. Send promotional
                  content, if you have opted in. 3. Cookies Our website uses
                  cookies and similar technologies to enhance user experience,
                  analyze site traffic, and personalize content. 4. Data
                  Security We take reasonable measures to protect your
                  information. However, no method of transmission over the
                  Internet is completely secure. 5. Sharing Your Information We
                  do not sell or rent your personal information. We may share
                  information with trusted service providers to help operate the
                  website. 6. Third-Party Links Our site may contain links to
                  third-party websites. We are not responsible for their privacy
                  practices. 7. Your Rights You can update or request deletion
                  of your personal information by contacting us. Contact Us For
                  any questions regarding this Privacy Policy, please contact us
                  at: shraddha@synaxatechnologies.com
                </p>
              </div>
            </div>
          </div>
        )}

        {showTerms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="dark:bg-gray-dark relative w-full max-w-xl rounded-lg bg-white p-6">
              <button
                onClick={() => setShowTerms(false)}
                className="absolute top-3 right-3 z-50 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                aria-label="Close Privacy Policy"
              >
                ✕
              </button>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Terms of Use
              </h3>
              <div className="max-h-[60vh] overflow-y-auto text-base leading-relaxed text-gray-700 dark:text-gray-200">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  Terms of Use By using this website, you agree to the following
                  terms: Website Use - Use our website only for lawful purposes
                  and do not interfere with its operation or other users’
                  access. Intellectual Property - All content, logos, and
                  materials are owned by us and may not be copied or distributed
                  without permission. User Submissions - Any content you submit
                  (e.g., inquiries or feedback) grants us a license to use it.
                  You must ensure it does not violate laws or third-party
                  rights. Disclaimer - The website is provided “as is.” We do
                  not guarantee accuracy, reliability, or completeness of
                  information. Limitation of Liability -We are not responsible
                  for any damages arising from your use of the website.
                  Third-Party Links -We are not liable for content on external
                  sites linked from our website. Changes to Terms - We may
                  update these terms at any time. Continued use of the website
                  constitutes acceptance of any changes. Contact Us:
                  shraddha@synaxatechnologies.com{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
