// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Tools & Equipment", url: "/products" },
  //     { name: "Construction Services", url: "/services" },
  //   ],
  // },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      // { name: "Careers", url: "#" },
      // { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/people/Renotech-Technical-Services/61550262492895/",
  youtube: "https://www.youtube.com/@RenotechTechnicalServices",
  instagram: "https://www.instagram.com/renotechdubai/"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};