const db = {
  projects: [
    {
      name: "Opera Mobile for Android",
      slug: "opera-mobile",
      companyName: "Opera Software",
      thumbnail: "opera-mobile.png",
      summaryTitle: "Example title",
      summary: "Description of a project",
      tags: ["python-django", "android", "java", "ccpp"],
      badges: ["Java", "C/C++", "Android", "Python"],
      thumbnailLogo: "logo-opera.svg",
      featured: true,
    },
    {
      name: "Opera Max for Android",
      slug: "opera-max",
      companyName: "Opera Software",
      thumbnail: "opera-max.jpg",
      summaryTitle: "Example title",
      summary: "Data management and data saving app for Android",
      tags: ["android"],
      badges: ["Java", "C/C++", "Android"],
      thumbnailLogo: "logo-opera.svg",
    },
    {
      name: "SpisTresci.pl",
      slug: "spistresci-pl",
      companyName: "SpisTresci.pl",
      thumbnail: "spistresci.png",
      summaryTitle: "Example title",
      summary: "Description of a project",
      tags: ["python-django"],
      badges: ["Python", "Django", "jQuery"],
      thumbnailLogo: "spistresci.png",
      featured: true,
    },
    {
      name: "Digital Asset Managment Platform",
      slug: "myzonza",
      companyName: "Hogarthww, through STXNext",
      thumbnail: "myzonza.png",
      summaryTitle: "Zonza & MyZonza",
      summary:
        "Asset Management Platform for the Enterprise, allowing businesses to store and manage materials in one cloud-based system",
      tags: ["python-django"],
      badges: ["Python", "Django", "Backbone.js"],
      thumbnailLogo: "logo-zonza.png",
    },
    {
      name: "Seerene",
      slug: "seerene",
      companyName: "Seerene, through STXNext",
      thumbnail: "seerene.jpg",
      summaryTitle: "Seerene",
      summary:
        "An analytics platform that helps companies see how their other software is performing",
      tags: ["python-django", "angular"],
      badges: ["Python", "Django", "Angular"],
      thumbnailLogo: "logo-seerene.svg",
      featured: true,
    },
    {
      name: "HiveProjects",
      slug: "hiveprojects",
      companyName: "HiveProjects",
      thumbnail: "hiveprojects.png",
      summaryTitle: "HiveProjects",
      summary:
        "Hive Projects is a directory of over a hundred apps, sites and tools built by Hive community. Your project is not listed here? You can add it on your own!",
      tags: ["python-django", "blockchain"],
      badges: ["Python", "Django", "blockchain"],
      thumbnailLogo: "hiveprojects.png",
      featured: true,
    },
  ],
  projectFilters: [
    { name: "Angular", tag: ".angular" },
    { name: "React", tag: ".react" },
    { name: "Python/Django", tag: ".python-django" },
    { name: "Android", tag: ".android" },
    { name: "C/C++", tag: ".ccpp" },
    { name: "Java", tag: ".java" },
    { name: "Blockchain", tag: ".blockchain" },
  ],
  talks: [
    {
      source: "youtube",
      id: "fz1Oz47q5IU",
      type: "video",
      title: "How to use and store your Bitcoins in a secure way",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus penatibus et magnis dis parturient montes, nascetur ridiculus mus..",
      date: "Jan 4, 2018",
    },
  ],
  testimonials: [
    {
      author: "Paweł Ustaborowicz",
      title: "Project Manager, Opera Software",
      type: "linkedin",
      pictureUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQG4EuUk13Vf0Q/profile-displayphoto-shrink_100_100/0/1516277136633?e=1626912000&v=beta&t=wFgJg724bKxY4QtqGwk4jLfKmJ_qa_lQkHDhLBcmoz8",
      body:
        "I've had the pleasure to work with Krzysztof in Opera Software. He is a skilled and hard working developer, who is always full of great, creative ideas. Krzysztof is very energetic and has an endless supply of positive energy which makes him a valuable member of any team.",
    },
  ],
  links: {
    linkedinProfile: "https://www.linkedin.com/in/krzysztofszumny/",
  },
};

export default db;
