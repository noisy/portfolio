import { allFilterTag } from "./types";
import type { IDB } from "./types/IDB";

const db: IDB = {
  me: {
    firstName: "Marek",
    lastName: "Szumny",
    fullName: "Marek Szumny",
    title: "",
    email: "szumny.marek@gmail.com",
    location: "",
  },
  projects: [
    {
      name: "Neuroshima",
      slug: "neuroshima",
      url: "https://en.wikipedia.org/wiki/Neuroshima",
      type: "Board Game",
      companyName: "Portal Games",
      thumbnail: "neuroshima/main.jpg",
      summaryTitle: "Neuroshima",
      summary: "Postapocalyptic RPG board game",
      filterTags: [],
      badges: ["Game", "Board Game"],
      technologies: [],
      thumbnailLogo: "portalgames.png",
      featured: true,
    },
    {
      name: "Call of Juarez: The Cartel",
      slug: "call-of-juarez-the-cartel",
      type: "Game",
      url: "https://en.wikipedia.org/wiki/Call_of_Juarez:_The_Cartel",
      companyName: "Techland",
      thumbnail: "calljuarez/main.jpg",
      summaryTitle: "Call of Juarez: The Cartel",
      summary: "",
      filterTags: [],
      badges: ["Game"],
      technologies: [],
      thumbnailLogo: "techland.svg",
      featured: true,
    },
    {
      name: "HiveProjects",
      slug: "hiveprojects.io",
      type: "Web Application",
      url: "https://hiveprojects.io/",
      thumbnail: "hiveprojects.png",
      summaryTitle: "HiveProjects",
      summary:
        "Hive Projects is a directory of over a hundred apps, sites and tools built by Hive community. Your project is not listed here? You can add it on your own!",
      filterTags: [],
      badges: ["Open Source", "Rest API"],
      technologies: ["python", "django"],
      thumbnailLogo: "hiveprojects.png",
      featured: true,
      repositoryUrl: "https://github.com/wise-team/hiveprojects.io",
    },
    {
      name: "Dev / QA Web Portfolio",
      slug: "portfolio",
      type: "Web Application",
      url: "https://krzysztofszumny.com/",
      thumbnail: "hiveprojects.png",
      summaryTitle: "Vue Based Web Portfolio",
      summary:
        "Hive Projects is a directory of over a hundred apps, sites and tools built by Hive community. Your project is not listed here? You can add it on your own!",
      filterTags: ["responsive", "vue"],
      badges: ["Open Source"],
      technologies: ["typescript", "vue", "bootstrap"],
      thumbnailLogo: "hiveprojects.png",
      featured: true,
      repositoryUrl: "https://github.com/noisy/portfolio",
    },
  ],
  projectFilters: [
    { name: "All", tag: allFilterTag, isActive: true },
    { name: "Python/Django", tag: "python-django", isActive: false },
    { name: "JS/TS", tag: "js-ts", isActive: false },
    { name: "Vue", tag: "vue", isActive: false },
  ],
  companies: [
    {
      name: "Steem",
      url: "https://steem.com/",
      logo: "logos/logo-steem.svg",
    },
    {
      name: "Techland",
      url: "https://techland.net/",
      logo: "logos/techland.svg",
    },
    {
      name: "Portal Games",
      url: "https://portalgames.pl/",
      logo: "logos/portalgames.png",
    },
  ],
  talks: [],
  talkFilters: [],
  languageFilters: [
    { name: "🌎", tag: allFilterTag, isActive: true },
    { name: "🇬🇧", tag: "english", isActive: false },
    { name: "🇵🇱", tag: "polish", isActive: false },
  ],
  testimonials: [
    {
      author: "Bartłomiej Rynkiewicz",
      title: "CEO of New Deal",
      type: "written",
      signature: "bartlomiej-rynkiewicz-signature.png",
      body: "Marek worked for New Deal / DR Traiding for 8 years. His skills provided substential value for both companies. I recommend him as a solid and trustowrthy employee with a wide range of technical knowledge.",
      relevantForProjects: ["spistresci-pl"],
      url: "https://lukmarcus.github.io/recommendations/Marek%20Szumny%20NDDR%20EN.pdf",
    },
  ],
  links: {
    linkedinProfile: "https://www.linkedin.com/in/marek-szumny-63ba3295/",
    githubProfile: "https://github.com/lukmarcus",
  },
  flags: {
    polish: "🇵🇱",
    english: "🇬🇧",
  },
  blogPosts: [],
  skillsGroups: [
    {
      name: "Manual Testing",
      skills: [
        "Creating test scenarios",
        "Regression testing",
        "Bugs raporting",
        "API testing",
        "Quality control",
      ],
      icon: "@/images/manual-testing-icon.svg",
    },
    {
      name: "Automated Testing",
      skills: [
        "Cypress",
        "Newman (Postman CLI)",
        "BrowserStack / Sauce Labs",
        "Page Object Pattern",
        "Cucumber / BDD",
      ],
      icon: "@/images/automated-testing-icon.svg",
    },
    {
      name: "Tools",
      skills: [
        "Git CLI / GitHub",
        "Chrome Dev Tools / XPath",
        "SQL / SQLite / MySQL",
        "HTML / CSS",
        "Linux /  Windows",
      ],
      icon: "@/images/tools-icon.svg",
    },
  ],
};

export default db;
