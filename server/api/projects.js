import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Share4Life',
      category: {
        id: 2, 
        date: {
          en: 'January 2025',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'Share4Life is a web application designed to facilitate item donations and requests within university campuses. It offers comprehensive features, including full CRUD (Create, Read, Update, Delete) operations for listings, a messaging system for user communication, and a favorites functionality to bookmark preferred listings. This platform provides an intuitive interface for efficient resource management and interaction.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/share4life.png',
      url: 'https://github.com/aizatnazran/Share4Life.git',
    },
    {
      id: 2,
      title: 'Whatsapp-Based Appointment Booking System',
      category: {
        id: 2, 
        date: {
          en: 'December 2024',
        },
        title: {
          en: 'Messaging Services',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The WhatsApp Chatbot is an appointment booking system built using Laravel, Next.js, and MySQL to streamline appointment booking and user information collection. It integrates a robust backend for managing data and WhatsApp API interactions with a user-friendly frontend for seamless chatbot interactions, delivering an efficient solution for scheduling and data management.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/booking.PNG',
      url: 'https://github.com/aizatnazran/whatsapp-chatbot.git',
    },
    {
      id: 3,
      title: 'WIRA Ranking Dashboard',
      category: {
        id: 1, 
        date: {
          en: 'December 2024',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The WIRA Dashboard is a web application designed to manage and display comprehensive score data for players of the game WIRA. This application combines an efficient backend capable of handling over 100,000 lines of data with an interactive, user-friendly frontend that delivers a seamless experience for end users.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/wira-dashboard.png',
      url: 'https://wira.aizat.dev',
    },
    {
      id: 4,
      title: 'DevOps Project Planner',
      category: {
        id: 1, 
        date: {
          en: 'December 2024',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The DevOps Project Planner is a containerized web application showcasing Jenkins Pipeline-as-Code for automated build and deployment. It implements CI/CD practices, ensuring that each code push to the GitHub repository is automatically built and deployed, providing an efficient and streamlined development workflow.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/devops-project-planner.png',
      url: 'https://github.com/aizatnazran/wira-dashboard.git',
    },
    {
      id: 5,
      title: 'Social Web Application',
      category: {
        id: 1, 
        date: {
          en: 'October 2024',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The ARBA Test application is a simple social web platform that allows users to create posts and leave comments with full CRUD (Create, Read, Update, and Delete) functionality. It features an authentication system for secure login and logout, ensuring user-specific access to post and comment management. This streamlined interface delivers a user-friendly experience for managing content effectively.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/arba-test.png',
      url: 'https://github.com/aizatnazran/arba_test.git',
    },
    {
      id: 6,
      title: 'Telegram To-Do List Bot',
      category: {
        id: 3, 
        date: {
          en: 'April 2024',
        },
        title: {
          en: 'Bots',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The Telegram To-Do Bot is a task management tool designed for efficiency. Built to integrate seamlessly with Telegram, it allows users to add, list, edit, and delete tasks while maintaining sequential ID management for clarity and organization. This bot provides a simple yet effective solution for managing daily to-do lists directly within Telegram.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/todo.png',
      url: 'https://github.com/aizatnazran/telegram-todo-list.git',
    },
    {
      id: 7,
      title: 'Discord To-Do List Bot',
      category: {
        id: 3, 
        date: {
          en: 'March 2024',
        },
        title: {
          en: 'Bots',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The Discord To-Do Bot is a task management tool built for Discord, enabling users to manage tasks efficiently. It supports features such as adding, listing, editing, and deleting to-dos, all with sequential ID management for better task organization. This bot offers a seamless solution for task tracking directly within a Discord server.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/discord-todo.png',
      url: 'https://github.com/aizatnazran/discord-todo-list.git',
    },
    {
      id: 8,
      title: 'WhatsApp Scheduler',
      category: {
        id: 2, 
        date: {
          en: 'February 2024',
        },
        title: {
          en: 'Messaging Services',
        },
        company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'The WhatsApp Message Scheduler is an automation tool built with Node.js and whatsapp-web.js, designed to send customized messages based on user-defined schedules. It supports cron-like scheduling, allowing for flexible and recurring message delivery. This solution simplifies the process of managing automated communications on WhatsApp.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/scheduler.png',
      url: 'https://github.com/aizatnazran/scheduler.git',
    },
    {
      id: 9,
      title: 'Project Planner',
      category: {
        id: 1, 
        date: {
          en: 'February 2024',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The Project Planner is a web application designed to streamline project management. It offers essential functionalities such as create, read, update, and delete (CRUD) operations, providing users with a simple and effective solution for organizing and managing their projects efficiently.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/planner.png',
      url: 'https://github.com/aizatnazran/project-planner.git',
    },
    {
      id: 10,
      title: 'Smart WhatsApp Service',
      category: {
        id: 2, 
        date: {
          en: 'January 2024',
        },
        title: {
          en: 'Messaging Services',
        },
        company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'Custom Whatsapp API that empowers users to send messages along with documents or images directly to WhatsApp. This streamlined solution enhances communication by providing a seamless integration between the application and WhatsApp.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/smart-service.jpg',
      url: 'https://www.google.com/',
    },
    {
      id: 11,
      title: 'SuDu Web',
      category: {
        id: 1, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'A Web application, leveraging the power of Vue.js to deliver a seamless and responsive user experience. Through meticulous development, I ensured the implementation of intuitive interfaces and dynamic functionalities, contributing to the overall success of the project. My role involved transforming concepts into a tangible and user-friendly web application, showcasing my proficiency in Vue.js and dedication to delivering high-quality solutions.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/sudu.png',
      url: 'http://sudu.ai:8080/',
    },
    {
      id: 12,
      title: 'EduBoard',
      category: {
        id: 1, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'EduBoard is an educational dashboard built with Vue.js and Supabase. It allows educators to track student progress, manage data efficiently, and provides a user-friendly interface for monitoring learning outcomes.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/edu.png',
      url: 'https://github.com/aizatnazran/EduBoard',
    },
    {
      id: 13,
      title: 'File Management System',
      category: {
        id: 1, 
        date: {
          en: 'November 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'The File Management System is a web application built with Vue.js and Node.js, featuring full CRUD functionalities. It allows users to upload, view, download, update, and delete files. The system provides a responsive interface for efficient file management and stores file metadata for easy retrieval.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/file.png',
      url: 'https://github.com/aizatnazran/file-management-system.git',
    },
    {
      id: 14,
      title: 'Personal Finance Mobile Application',
      category: {
        id: 1, 
        date: {
          en: 'November 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'A personal finance mobile application project using React Native and Expo.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/mobile.jpg',
      url: 'https://github.com/aizatnazran/personal-finance-mobile-app.git',
    },
    {
      id: 15,
      title: 'RezekiSuri API',
      category: {
        id: 1, 
        date: {
          en: 'April 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'toyyibPay Sdn. Bhd.',
        },
      },
      content: {
        en: 'API Development of RezekiSuri, a mobile application designed to empower housewives to augment their income. My primary responsibility centered around crafting robust APIs using Node.js, adhering to the RESTful API approach. These APIs served as the backbone for seamless communication between the mobile application and the server, enabling essential functionalities.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/rss.png',
      url: 'https://www.google.com/',
    },
    {
      id: 16,
      title: 'E-Commerce Website',
      category: {
        id: 1, 
        date: {
          en: 'March 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'toyyibPay Sdn. Bhd.',
        },
      },
      content: {
        en: 'Creation of several crucial pages in the E-Commerce website. Utilizing Vue.js, Nuxt.js, and Tailwind CSS, I meticulously crafted the profile, sales, order summary, receipt, setup, shop, and listing pages. My focus on delivering a seamless and visually appealing user experience is evident in the responsive design and dynamic features incorporated into these pages. This endeavor showcased my proficiency in cutting-edge technologies and my commitment to enhancing the overall functionality and aesthetics of the E-Commerce platform.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/ecommerce.jpg',
      url: 'https://www.google.com/',
    },
    {
      id: 17,
      title: 'Portfolio',
      category: {
        id: 1, 
        date: {
          en: 'February 2023',
        },
        title: {
          en: 'Full Stack Development',
        },
        company: {
          en: 'Personal Project',
        },
      },
      content: {
        en: 'S simple portfolio to showcase my skills.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/portfolio.png',
      url: 'https://portfolio.aizat.dev',
    },
  ]
})
