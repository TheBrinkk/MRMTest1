import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Mission Ridge Marketing",
  description: "Digital Marketing and Solutions.",
  url: "https://missionridgetx.com",
  lang: "en",
  locale: "en_US",
  author: "Mission Ridge Marketing LLC",
  twitter: "",
  phonenumber: "(210) 728-2865",
  ogImage: ogImage,
  socialLinks: {
    telenumber: "tel:+12107282865",
    twitter: "",
    github: "",
    discord: "",
  },
  navLinks: [
    { text: "Home", href: "/" },
    //{ text: "Services", href: "/services" },
    {
      text: "Clients",
      href: "/clients",
      children: [
        { text: "San Antonio", href: "/clients/san-antonio" },
        {
          text: "New Braunfels",
          href: "/clients/new-braunfels",
          children: [
            { text: "Canyon Lake", href: "/clients/new-braunfels/canyon-lake" },
          ],
        },
        { text: "Seguin", href: "/clients/seguin" },
      ],
    },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
