import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LINKS = [
  {
    title: "Certificates",
    items: [
      {
        name: "80G Certificate",
        url: "https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf",
      },
      {
        name: "12A Certificate",
        url: "https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf",
      },
      {
        name: "CSR Certificate",
        url: "https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF",
      },
      {
        name: "Suvidha Darpan Registration",
        url: "https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf",
      },
      {
        name: "Suvidha Pan Card",
        url: "https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf",
      },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Gallery", url: "/gallery" },
      { name: "Events", url: "/events" },
      { name: "Our Donors", url: "/ourdonors" },
      { name: "News", url: "/news" },
    ],
  },
  {
    title: "Useful Links",
    items: [
      {
        name: "Verify Your Certificate",
        url: "https://suvidhafoundationedutech.org/verify.php",
      },
      {
        name: "Privacy Policy",
        url: "https://suvidhafoundationedutech.org/privacypolicy.php",
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full px-16">
        <div className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2">
          <Typography className="mb-6">
            <p className="text-3xl font-bold">
              Suvidha Foundation (Suvidha Mahila Mandal)
            </p>

            <div>
              <p className="text-2xl font-semibold">Office Headquarters -</p>
              <div>
                <div>
                  <p className="text-lg font-medium">Nagpur Headquarter:</p>
                  <p className="font-normal">
                    Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar,
                    Walni, Saoner Nagpur, Maharashtra 441102
                  </p>
                </div>
                <div>
                  <p className="text-lg font-medium">Hyderabad Headquarter:</p>
                  <p className="font-normal">
                    Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul
                key={title}
                className={title === "Company" ? "hidden md:block" : ""}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map(({ name, url }) => (
                  <li key={name}>
                    {/* Use Link component for navigation */}
                    <Typography
                      as={Link}
                      to={url} // Ensure the 'to' prop is set correctly
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="#">Suvidha Foundation (Suvidha Mahila Mandal)</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.466-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.993a6.007 6.007 0 100 12.014 6.007 6.007 0 000-12.014zm0 1.802a4.205 4.205 0 110 8.41 4.205 4.205 0 010-8.41zm6.406-.899a1.402 1.402 0 100 2.804 1.402 1.402 0 000-2.804z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2c2.133 0 2.405.007 3.245.047.84.04 1.41.175 1.938.372a4.602 4.602 0 011.68 1.1 4.602 4.602 0 011.1 1.68c.197.528.332 1.098.372 1.938.04.84.047 1.112.047 3.245s-.007 2.405-.047 3.245c-.04.84-.175 1.41-.372 1.938a4.602 4.602 0 01-1.1 1.68 4.602 4.602 0 01-1.68 1.1c-.528.197-1.098.332-1.938.372-.84.04-1.112.047-3.245.047s-2.405-.007-3.245-.047c-.84-.04-1.41-.175-1.938-.372a4.602 4.602 0 01-1.68-1.1 4.602 4.602 0 01-1.1-1.68c-.197-.528-.332-1.098-.372-1.938C2.007 14.405 2 14.133 2 12s.007-2.405.047-3.245c.04-.84.175-1.41.372-1.938a4.602 4.602 0 011.1-1.68 4.602 4.602 0 011.68-1.1c.528-.197 1.098-.332 1.938-.372C9.595 2.007 9.867 2 12 2zm0 1.802c-2.121 0-2.367.007-3.203.046-.77.037-1.187.166-1.463.276-.369.138-.632.303-.91.581a2.801 2.801 0 00-.581.91c-.11.276-.239.693-.276 1.463-.039.836-.046 1.082-.046 3.203s.007 2.367.046 3.203c.037.77.166 1.187.276 1.463.138.369.303.632.581.91.278.278.541.443.91.581.276.11.693.239 1.463.276.836.039 1.082.046 3.203.046s2.367-.007 3.203-.046c.77-.037 1.187-.166 1.463-.276.369-.138.632-.303.91-.581.278-.278.443-.541.581-.91.11-.276.239-.693.276-1.463.039-.836.046-1.082.046-3.203s-.007-2.367-.046-3.203c-.037-.77-.166-1.187-.276-1.463a2.801 2.801 0 00-.581-.91 2.801 2.801 0 00-.91-.581c-.276-.11-.693-.239-1.463-.276-.836-.039-1.082-.046-3.203-.046zm0 4.039a4.159 4.159 0 110 8.318 4.159 4.159 0 010-8.318zm0 1.804a2.354 2.354 0 100 4.708 2.354 2.354 0 000-4.708zm4.403-1.985a.994.994 0 100 1.989.994.994 0 000-1.989z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
