const listOfTechnologies = [
  {
    name: "HTML",
    src: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS",
    src: "https://cdn.simpleicons.org/css/33A9DC",
  },
  {
    name: "JavaScript",
    src: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "React",
    src: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "NodeJs",
    src: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express",
    src: "https://cdn.simpleicons.org/express/ffffff",
  },
  {
    name: "PosgreSQL",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Shopify",
    src: "https://cdn.simpleicons.org/shopify/7AB55C",
  },
  {
    name: "Wix",
    src: "https://cdn.simpleicons.org/wix/ffffff",
  },
  {
    name: "Vercel",
    src: "https://cdn.simpleicons.org/vercel/000000",
  },
  {
    name: "Render",
    src: "https://cdn.simpleicons.org/render/ffffff",
  },
  {
    name: "Firebase",
    src: "https://cdn.simpleicons.org/firebase/DD2C00",
  },
];

const listOfProjects = [
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1770288339/Pokedex_-_Google_Chrome_-_5_February_2026_xrbmno.mp4",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327447/Pokedex_ext9gr.png",
    h1: "Pokedex",
    description:
      "A modern, user-friendly Pokédex that lets users explore and search for Pokémon, view detailed stats, download images and information, and even save their favorite Pokémon for quick access.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    styles: {
      backgroundColor: "rgba(250, 3, 3, 0.14)",
      color: "rgba(198, 6, 6, 0.85)",
      hex: "dd4037",
    },
    urls: {
      code: {
        frontEnd: "https://github.com/AymanZuleyhi/Pokedex",
        backEnd: "",
      },
      live: "https://pokedex-seven-red.vercel.app/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1770289123/Crunchy_-_Google_Chrome_-_5_February_2026_e1v9bz.mp4",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327431/Crunchy_bzks90.png",
    h1: "Crunchy",
    description:
      "A full-stack recipe application where users can create accounts, upload their favorite recipes, and easily filter through a diverse collection to find new culinary ideas.",
    technologies: ["React", "CSS", "NodeJs", "Express", "MongoDB"],
    styles: {
      backgroundColor: "rgba(246, 191, 25, 0.51)",
      color: "rgb(92, 69, 0)",
      hex: "705b17",
    },
    urls: {
      code: {
        frontEnd: "https://github.com/AymanZuleyhi/Crunchy",
        backEnd: "https://github.com/AymanZuleyhi/Crunchy-server",
      },
      live: "https://crunchy-two.vercel.app/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1770289393/Adeline_Sportswear_-_Google_Chrome_-_5_February_2026_p4lyvy.mp4",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327336/AdelineSportswear_lwoqgd.png",
    h1: "Adeline Sportswear",
    description:
      "A clothing brand focused on activewear. This website makes it easy for customers to browse, find, and buy sportswear items, with email marketing managed through Klaviyo.",
    technologies: ["Shopify"],
    styles: {
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      hex: "eeeeee",
    },
    urls: {
      live: "https://adelinesportswear.com/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1770290249/Google_-_Google_Chrome_-_5_February_2026_eusczc.mp4",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1769703572/logo-active_rgfkgd.png",
    h1: "Unicorn Reloader",
    description: "A Chrome Extension making tab reloading effortless and easy.",
    technologies: ["HTML", "CSS", "JavaScript"],
    styles: {
      backgroundColor: "rgba(171, 87, 235, 0.29)",
      color: "rgb(69, 10, 113)",
      hex: "59247e",
    },
    urls: {
      live: "https://chromewebstore.google.com/detail/unicorn-reloader/chdnobolinefiockhmpiblkdbfonkcne",
    },
  },
];

export { listOfProjects, listOfTechnologies };
