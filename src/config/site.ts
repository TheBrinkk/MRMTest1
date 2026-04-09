import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Mission Ridge Marketing",
  description: "Digital Marketing and Solutions.",
  url: "https://missionridgetx.com",
  lang: "en",
  locale: "en_US",
  author: "Mission Ridge Marketing LLC",
  twitter: "",
  phonenumber: "(123) 456-7890",
  ogImage: ogImage,
  socialLinks: {
    telenumber: "tel:+1234567890",
    twitter: "#",
    github: "#",
    discord: "#",
  },
  navLinks: [
    { text: "Home", href: "/" },
    //{ text: "Services", href: "/services" },
    {
      text: "Clients",
      href: "/clients",
      children: [
        { text: "San Antonio", href: "/clients/areas/san-antonio" },
        {
          text: "New Braunfels",
          href: "/clients/areas/new-braunfels",
          children: [
            {
              text: "Canyon Lake",
              href: "/clients/areas/new-braunfels/canyon-lake",
            },
          ],
        },
        { text: "Seguin", href: "/clients/areas/seguin" },
      ],
    },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
