import ogImageSrc from "@images/social.png";



export const SITE = {
  title: "Renovate",
  tagline: "Professional Home, Office & Retail Fitouts",
  description: "Transform your space with our expert renovation and fitout services. We specialize in creating beautiful, functional, and inspiring environments for homes, offices, and retail stores.",
  description_short: "Professional home, office, and retail fitout services.",
  url: "https://renovate.com",
  author: "Your Name",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Professional Renovation and Fitout Services`,
  description: "From concept to completion, we provide a comprehensive range of services to bring your vision to life. Contact us today for a free consultation.",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: `<svg class="w-32 h-auto py-3 mx-auto sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.24 30.6C24.24 36.6 18.9 41.76 12.54 41.76C6.18 41.76 0.839996 36.6 0.839996 30.6C0.839996 24.6 6.18 19.44 12.54 19.44C18.9 19.44 24.24 24.6 24.24 30.6ZM89.34 21.3L83.1 39.06H74.88L85.98 12H94.98L79.62 41.7H99.18V21.3H89.34ZM39.9 12.42C33.66 12.42 28.56 17.58 28.56 23.94C28.56 30.3 33.66 35.46 39.9 35.46C46.14 35.46 51.24 30.3 51.24 23.94C51.24 17.58 46.14 12.42 39.9 12.42ZM39.9 30.18C36.9 30.18 34.26 27.54 34.26 24C34.26 20.46 36.9 17.82 39.9 17.82C42.9 17.82 45.54 20.46 45.54 24C45.54 27.54 42.9 30.18 39.9 30.18ZM65.52 12V41.7H57.18V12H65.52Z" fill="#A3A3A3"/>
        </svg>`,
        name: "first",
        href: "#",
    },
    {
        icon: `<svg class="w-32 h-auto py-3 mx-auto sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7 12.42C5.22 12.42 0 17.16 0 24.3C0 31.44 5.22 36.18 11.7 36.18C18.18 36.18 23.4 31.44 23.4 24.3C23.4 17.16 18.18 12.42 11.7 12.42ZM11.7 30.9C8.22 30.9 5.58 28.02 5.58 24.3C5.58 20.58 8.22 17.7 11.7 17.7C15.18 17.7 17.82 20.58 17.82 24.3C17.82 28.02 15.18 30.9 11.7 30.9ZM36.66 12H27.9V41.7H36.66V12ZM50.88 12.42C44.4 12.42 39.18 17.16 39.18 24.3C39.18 31.44 44.4 36.18 50.88 36.18C57.36 36.18 62.58 31.44 62.58 24.3C62.58 17.16 57.36 12.42 50.88 12.42ZM50.88 30.9C47.4 30.9 44.76 28.02 44.76 24.3C44.76 20.58 47.4 17.7 50.88 17.7C54.36 17.7 57 20.58 57 24.3C57 28.02 54.36 30.9 50.88 30.9ZM90.06 12.42C83.58 12.42 78.36 17.16 78.36 24.3C78.36 31.44 83.58 36.18 90.06 36.18C96.54 36.18 101.76 31.44 101.76 24.3C101.76 17.16 96.54 12.42 90.06 12.42ZM90.06 30.9C86.58 30.9 83.94 28.02 83.94 24.3C83.94 20.58 86.58 17.7 90.06 17.7C93.54 17.7 96.18 20.58 96.18 24.3C96.18 28.02 93.54 30.9 90.06 30.9Z" fill="#A3A3A3"/>
        </svg>`,
        name: "Second",
        href: "#",
    },
    {
        icon: `<svg class="w-32 h-auto py-3 mx-auto sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99.6 15.18V21.3H90.06L85.5 12H75.18L83.7 30.18L72.42 41.7H81.3L87.66 32.58L93.9 41.7H100L91.26 28.62L99.6 15.18ZM11.16 12.42C4.68 12.42 -0.54 17.16 -0.54 24.3C-0.54 31.44 4.68 36.18 11.16 36.18C17.64 36.18 22.86 31.44 22.86 24.3C22.86 17.16 17.64 12.42 11.16 12.42ZM11.16 30.9C7.68 30.9 5.04 28.02 5.04 24.3C5.04 20.58 7.68 17.7 11.16 17.7C14.64 17.7 17.28 20.58 17.28 24.3C17.28 28.02 14.64 30.9 11.16 30.9ZM36.12 12H27.36V41.7H36.12V12ZM60.3 12.42C53.82 12.42 48.6 17.16 48.6 24.3C48.6 31.44 53.82 36.18 60.3 36.18C66.78 36.18 72 31.44 72 24.3C72 17.16 66.78 12.42 60.3 12.42ZM60.3 30.9C56.82 30.9 54.18 28.02 54.18 24.3C54.18 20.58 56.82 17.7 60.3 17.7C63.78 17.7 66.42 20.58 66.42 24.3C66.42 28.02 63.78 30.9 60.3 30.9Z" fill="#A3A3A3"/>
        </svg>`,
        name: "Third",
        href: "#",
    },

    {
        icon: `<svg class="w-24 h-auto py-3 mx-auto md:w-32 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 100 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99.54 12.42C93.06 12.42 87.84 17.16 87.84 24.3C87.84 31.44 93.06 36.18 99.54 36.18C105.9 36.18 111.12 31.44 111.12 24.3C111.12 17.16 105.9 12.42 99.54 12.42ZM99.54 30.9C96.06 30.9 93.42 28.02 93.42 24.3C93.42 20.58 96.06 17.7 99.54 17.7C103.02 17.7 105.66 20.58 105.66 24.3C105.66 28.02 103.02 30.9 99.54 30.9ZM11.16 12.42C4.68 12.42 -0.54 17.16 -0.54 24.3C-0.54 31.44 4.68 36.18 11.16 36.18C17.64 36.18 22.86 31.44 22.86 24.3C22.86 17.16 17.64 12.42 11.16 12.42ZM11.16 30.9C7.68 30.9 5.04 28.02 5.04 24.3C5.04 20.58 7.68 17.7 11.16 17.7C14.64 17.7 17.28 20.58 17.28 24.3C17.28 28.02 14.64 30.9 11.16 30.9ZM36.12 12H27.36V41.7H36.12V12ZM60.3 12.42C53.82 12.42 48.6 17.16 48.6 24.3C48.6 31.44 53.82 36.18 60.3 36.18C66.78 36.18 72 31.44 72 24.3C72 17.16 66.78 12.42 60.3 12.42ZM60.3 30.9C56.82 30.9 54.18 28.02 54.18 24.3C54.18 20.58 56.82 17.7 60.3 17.7C63.78 17.7 66.42 20.58 66.42 24.3C66.42 28.02 63.78 30.9 60.3 30.9Z" fill="#A3A3A3"/>
        </svg>`,
        name: "Fourth",
        href: "#",
    },
]
