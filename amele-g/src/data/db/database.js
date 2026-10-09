import Mock from "../mock";

const database = {
  information: {
    name: "Amelework Getnet",
    aboutContent:
      "I am a frontend web developer with enterprise-level experience. I turn Figma designs into clean, pixel-perfect user interfaces and build responsive, interactive, and user-friendly web applications.",
    // age: "is a Number",
    phone: "123-456-7890",
    // nationality: "American",
    // language: "English, Amharic",
    email: "getnet.amelework98@gmail.com",
    address: "Dallas, TX, USA",
    freelanceStatus: "Available for Fulltime Angular Role",
    socialLinks: {
      facebook: "https://www.facebook.com/amele.henok/",
      twitter: "https://twitter.com",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/amelework-g/?isSelfProfile=true",
      dribbble: "",
      github: "https://github.com/ac16443",
    },
    brandImage: "./../assets/profile.webp",
    aboutImage: "././../assets/profile.webp",
    aboutImageLg: "./../assets/profile.webp",
    cvfile: "/files/cv.pdf",
  },
  services: [
    {
      title: "Web Development",
      icon: "code",
      details:
        "Developed Scalable UI in a CitiBank self invest account UI development team.",
    },
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Design and Developed responsive web applications in Evangadi Tech  ",
    },
    {
      title: "Write Poems & Articls",
      icon: "book",
      details:
        "Writing is my way of expressing faith, culture and the beauty of life.",
    },
  ],
  reviews: [
    // {
    //   id: 1,
    //   content:
    //     "Jason: is a lead and Manager at Citi",
    //   author: {
    //     name: "Jason ",
    //     designation: "Software Engineer at CitiBank",
    //   },
    // },
    // {
    //   id: 2,
    //   content:
    //     "He is a lead ",
    //   author: {
    //     name: "Seife Demissie",
    //     designation: "Software Engineer Evangadi Tech",
    //   },
    // },
    // {
    //   id: 3,
    //   content: "Terence and I work in a UI development team",
    //   author: {
    //     name: "Terence ",
    //     designation: "software Engineer at TCS",
    //   },
    // },
  ],
  skills: [
    {
      title: "HTML5",
      value: 90,
      
    },
    {
      title: "CSS3",
      value: 90,
    },
{
      title: "Bootstrap",
      value: 90,
    },
    {
      title: "Javascript",
      value: 90,
    },
    {
      title: "Angular",
      value: 90,
    },
{
      title: "NodeJS",
      value: 90,
    },
    {
      title: "ReactJS",
       value: 90,
    },
    {
      title: "Figma",
       value: 90,
    },
  ],
  portfolios: [
{
      id: 0,
      title: "Project Angular",
      subtitle: "Used angular framework to build Self invest dashboard account at CitiBank.",
      imageUrl: "/assets/self-invest-overview.png",
      largeImageUrl: ["/assets/Self Invest-dashboard-overview-1.png"],
      url: "https://online.citi.com/US/nga/citi-self-invest",
    },
    {
      id: 1,
      title: "Angular",
      subtitle: "Self invest dashboard account at CitiBank.",
      imageUrl: "/images/angular-550x400.png",
      largeImageUrl: ["/assets/Self Invest-dashboard-overview-1.png"],
      url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "TypeScript",
      subtitle: "Self invest dashboard account at CitiBank.",
      imageUrl: "/images/typescript-550x400.png",
      largeImageUrl: [
        "/assets/Self Invest-dashboard-overview-1.png",
        "/images/typescript-550x400.png",
      ],
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "HTML5",
      subtitle: "Self invest dashboard account at CitiBank",
      imageUrl: "images/html-550x400.png",
      largeImageUrl: ["images/html-550x400.png"],
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "CSS3",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "images/css-550x400.png",
      largeImageUrl: ["images/css-550x400.png"],
      url: "#",
    },
    {
      id: 5,
      title: "JavaScript",
      subtitle: "Self invest dashboard account at CitiBank",
      imageUrl: "images/javascript-550x400.png",
      largeImageUrl: ["images/javascript-550x400.png"],
    },
    {
      id: 6,
      title: "NodeJS",
      subtitle: "I'm on it",
      imageUrl: "images/nodejs-550x400.png",
      largeImageUrl: ["images/nodejs-550x400.png"],
    },
    {
      id: 7,
      title: "React",
      subtitle: "I'm on it",
      imageUrl: "images/React-logo.png",
      largeImageUrl: ["images/React-logo.png"],
      url: "https://twitter.com",
    },
//     {
//       id: 8,
//       title: "Bootstrap",
//       subtitle: "Used to develop Responsive app",
//       imageUrl: "images/bootstrap-550x400.png",
//       largeImageUrl: ["images/bootstrap-550x400.png"],
// url: "https://twitter.com",
// bo    },
    {
      id: 9,
      title: "Bootstrap",
      subtitle: "Used it to develop responsive app",
      imageUrl: "images/bootstrap-550x400.png",
      largeImageUrl: ["images/bootstrap-550x400.png"],
    },
    {
      id: 10,
      title: "Git",
      subtitle: "Version control",
      imageUrl: "/images/github-550x400.png",
      largeImageUrl: ["/images/github-550x400.png"],
      url: "#",
    },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2026 - Present",
        position: "Frontend Web Developer",
        company: "Evangadi Tech",
        details:
          "Web App",
      },
     {
        id: 2,
        year: "2021 - 2026",
        position: "Full Stack Developer",
        company: "Tata Consultancy Service",
        details:
          "Project Ended january 2026",
      },
      {
        id: 3,
        year: "2019 - 2020",
        position: "Software Development ",
        company: "MIU",
        details:
          "Graduated december 2020",
      },
      {
        id: 4,
        year: "2018 - 1019",
        position: "Junior Web Developer ",
        company: "Hahu INC",
        details:
          "Bellevue WA ",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "MSC",
        university: "MIU",
        details:
          "Graduate 2020",
      },
       {
        id: 2,
        year: "2004 - 2008",
        graduation: "Bachelor of Art",
        university: "Bahir Dar University ",
        details:
          "Graduate",
      },
      
    ],
  },
  blogs: [
    {
      id: 1,
      title: "May Books",
      featuredImage: "/images/books-1140x641.png",
      filesource: "Written in Amharic language",
      createDay: "29",
      createMonth: "March",
      createYear: "2026",
    },
    {
      id: 2,
      title: "My book",
      featuredImage: "/images/my-book-1140x641.png",
      filesource: "Written in Amharic language",
      createDay: "12",
      createMonth: "April",
      createYear: "2026",
    },
  ],
 contactInfo: {
    phoneNumbers: ["+012-3456-7891", "+012-3456-7892"],
    emailAddress: ["getnet.amelework98@gmail.com", "ag.ui.carees@gmail.com"],
    address: "Dallas, TX, USA",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
