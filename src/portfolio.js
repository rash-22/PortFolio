/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rashmi Sahani",
  title: "Hi all, I'm Rashmi",
  subTitle: emoji(
    "Aspiring Full Stack Developer focused on building clean, responsive user experiences. Strong with HTML, CSS, JavaScript, React. Exploring backend with Node.js, Express, and MongoDB. Always learning. Always building."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rash-22",
  linkedin: "https://www.linkedin.com/in/rashmi-sahani/",
  gmail: "rashmisahani08@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER IN TRAINING – FRONTEND SHARP, BACKEND RISING",
  skills: [
    emoji(
      "⚡ Build clean, responsive UIs using HTML, CSS, JavaScript, and React"
    ),
    emoji("⚡ Work with REST APIs and handle dynamic data on the frontend"),
    emoji(
      "⚡ Learning and building backend apps using Node.js, Express, and MongoDB"
    )
    // emoji(
    //   "⚡ Version control with Git & GitHub, and code confidently in VS Code"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      // skillName: "express",
      // fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Thakur Institute of Management Studies, Career Development & Research (TIMSCDR), Mumbai",
      logo: require("./assets/images/timscdrLogo.png"), // Replace with actual logo path
      subHeader: "Masters in Computer Application (Pursuing)",
      duration: "2023 - 2025",
      desc: "Building a strong foundation in software development, database management, and full-stack web applications while applying knowledge through internship and personal projects.",
      descBullets: [
        "CGPA: 7.38",
        "Actively learning full-stack development with focus on MERN stack"
      ]
    },
    {
      schoolName: "Nirmala Memorial Foundation Degree College, Mumbai",
      logo: require("./assets/images/nirmalaLogo.png"), // Replace with actual logo path
      subHeader: "Bachelors of Science in Computer Science",
      duration: "2020 - 2023",
      desc: "Ranked in the top 5 of the class with a focus on programming fundamentals, data structures, and computer systems.",
      descBullets: [
        "CGPA: 9.13",
        "Excelled in subjects like DBMS, OS, and Web Programming"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Intern",
      company: "Cloud Counselage Pvt. Ltd.",
      companylogo: require("./assets/images/cloudcounselageLogo.jpg"), // Make sure logo path is correct
      date: "Feb 2025 – July 2025",
      desc: "Developed a real-world Java application for onboarding student ambassadors, integrating MySQL database operations and email functionality.",
      descBullets: [
        "Built a Java-based console application with features like UTM link generation, ambassador CRUD, and email automation using Jakarta Mail",
        "Designed MySQL schema and wrote JDBC-based code for storing and managing ambassador records",
        "Exported ambassador data to CSV and integrated real email sending with Gmail SMTP"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "PROJECTS THAT I BUILT FROM SCRATCH",
  projects: [
    {
      images: [
        require("./assets/images/chat-ss1.png"),
        require("./assets/images/chat-ss2.png"),
        require("./assets/images/chat-ss4.png"),
        require("./assets/images/chat-ss3.png")
      ],
      projectName: "DeBugIT – Q&A Portal (Stack Overflow Clone)",
      projectDesc:
        "Full-stack web app using React, Node, MongoDB & GraphQL. Features secure APIs, indexed DB for speed, and CI/CD via GitHub Actions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rash-22/Stack_underflow"
        }
      ]
    },
    {
      images: [
        require("./assets/images/chat-ss21.png"),
        require("./assets/images/chat-ss22.png"),
        require("./assets/images/chat-ss23.png"),
        require("./assets/images/chat-ss24.png")
      ],
      projectName: "MessageFlow – Real-Time Chat App",
      projectDesc:
        "Socket.io-based real-time messaging platform with JWT auth, MongoDB persistence, and a React-based frontend.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://chat-app-yuaq.onrender.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/rash-22/Chat_Application"
        }
      ]
    },
    {
      images: [require("./assets/images/thumbnail.jpg")],
      projectName: "BrainBot – Voice-Activated Assistant",
      projectDesc:
        "Python-based AI assistant with voice control, WhatsApp/email integration, weather/news APIs, and to-do management.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rash-22/BrainBot-Voice-Activated-Personal-Assistant-"
        }
      ]
    },
    {
      images: [
        require("./assets/images/chat-ss31 (6).png"),
        require("./assets/images/chat-ss31 (1).png"),
        require("./assets/images/chat-ss31 (2).png"),
        require("./assets/images/chat-ss31 (3).png"),
        require("./assets/images/chat-ss31 (4).png"),
        require("./assets/images/chat-ss31 (5).png")

        // Add more as needed
      ],
      projectName: "Ambassador Onboarding & College Discovery Platform",
      projectDesc:
        "Full-stack web platform combining ambassador onboarding with real-time college discovery. Features UTM-based tracking, email automation, CRUD operations, and college search filters.",
      footerLink: [
        // {
        //   name: "Live Demo",
        //   url: "https://your-deployed-link.com" // 🔁 Replace with actual if available
        // },
        {
          name: "GitHub",
          url: "https://github.com/rash-22/college-research-system" // 🔁 Replace if needed
        }
      ]
    }
  ],
  display: true
};

export default bigProjects;

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle:
    "Certifications and courses I’ve completed to build strong technical foundations.",

  achievementsCards: [
    {
      title: "Java Programming – NPTEL (2024)",
      subtitle:
        "Completed a 12-week course by NPTEL with practical and theoretical concepts of Java programming.",
      image: require("./assets/images/javaLogo.png"), // Add or replace with an actual image if available
      imageAlt: "NPTEL Java Logo",
      footerLink: [
        {
          name: "View Certificate",
          // replace with actual link
          url: "https://drive.google.com/file/d/1qxdEqOby5SvD6VPr_c4EwArKqWKYmS-F/view"
        }
      ]
    },
    {
      title: "Spoken Tutorial – IIT Bombay",
      subtitle:
        "Completed beginner to intermediate courses in Java, Python, C++, and HTML with an average score of 76.87%.",
      image: require("./assets/images/iitbLogo.png"), // Add IIT Bombay or Spoken Tutorial logo
      imageAlt: "IIT Bombay Logo",
      footerLink: [
        {
          name: "View Certificate",

          url: "https://drive.google.com/file/d/1E1yPsK53hxvGlDrsF5LwQx89LG_83PBI/view" // replace with actual link
        }
      ]
    },
    {
      title: "SQL Bootcamp – Udemy (2023)",
      subtitle:
        "Completed Udemy’s hands-on SQL Bootcamp, focusing on real-world queries, joins, and database design.",
      image: require("./assets/images/udemyLogo.png"), // Use Udemy logo or custom image
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/your-sql-bootcamp-cert-link" // replace with actual link
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Actively looking for full-time opportunities in software development. Feel free to reach out!",
  number: "+91-8169396506", // Add your real number if you'd like
  email_address: "rashmisahani08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
