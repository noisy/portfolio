const db = {
  projects: [
    {
      name: "Opera Mobile for Android",
      slug: "opera-mobile",
      summaryTitle: "Example title",
      summary: "Description of a project",
      tags: ["angular", "python-django", "android", "java", "ccpp"],
      badges: ["Java", "C/C++", "Android", "Python", "Perl"],
      thumbnailLogo: "logo-opera.svg",
    },
    // {
    //   name: "Reksio",
    //   badges: ["Lisp", "C/C++", "Android", "Python", "Perl"],
    // },
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
