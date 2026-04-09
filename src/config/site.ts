import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Mission Ridge Marketing",
  description: "Digital Marketing and Solutions.",
  url: "https://thebrinkk.github.io/MRMTest1/",
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
    { text: "Home", href: import.meta.env.BASE_URL + "/" },
    //{ text: "Services", href: "/services" },
    {
      text: "Clients",
      href: import.meta.env.BASE_URL + "/clients",
      children: [
        {
          text: "San Antonio",
          href: import.meta.env.BASE_URL + "/clients/areas/san-antonio",
        },
        {
          text: "New Braunfels",
          href: import.meta.env.BASE_URL + "/clients/areas/new-braunfels",
          children: [
            {
              text: "Canyon Lake",
              href:
                import.meta.env.BASE_URL +
                "/clients/areas/new-braunfels/canyon-lake",
            },
          ],
        },
        {
          text: "Seguin",
          href: import.meta.env.BASE_URL + "/clients/areas/seguin",
        },
      ],
    },
    { text: "Contact", href: import.meta.env.BASE_URL + "/contact" },
    { text: "Widgets", href: import.meta.env.BASE_URL + "/widgets" },
  ],
};
