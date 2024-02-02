import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: {
        id: 1, 
        date: {
          en: 'March 2023',
        },
        title: {
          en: 'Front-End Development',
        },
         company: {
          en: 'toyyibPay Sdn. Bhd.',
        },
      },
      content: {
        en: 'I spearheaded the creation of several crucial pages in the E-Commerce website. Utilizing Vue.js, Nuxt.js, and Tailwind CSS, I meticulously crafted the profile, sales, order summary, receipt, setup, shop, and listing pages. My focus on delivering a seamless and visually appealing user experience is evident in the responsive design and dynamic features incorporated into these pages. This endeavor showcased my proficiency in cutting-edge technologies and my commitment to enhancing the overall functionality and aesthetics of the E-Commerce platform.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/ecommerce.jpg',
      url: 'https://www.google.com/',
    },
    {
      id: 2,
      title: 'SuDu Web',
      category: {
        id: 1, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Front-End Development',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'I took charge of crafting the SuDu Web application, leveraging the power of Vue.js to deliver a seamless and responsive user experience. Through meticulous development, I ensured the implementation of intuitive interfaces and dynamic functionalities, contributing to the overall success of the project. My role involved transforming concepts into a tangible and user-friendly web application, showcasing my proficiency in Vue.js and dedication to delivering high-quality solutions.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/sudu.png',
      url: 'https://www.google.com/',
    },
     {
      id: 3,
      title: 'RezekiSuri API',
      category: {
        id: 2, 
        date: {
          en: 'April 2023',
        },
        title: {
          en: 'Back-End Development',
        },
         company: {
          en: 'toyyibPay Sdn. Bhd.',
        },
      },
      content: {
        en: 'I played a pivotal role in the development of RezekiSuri, a mobile application designed to empower housewives to augment their income. My primary responsibility centered around crafting robust APIs using Node.js, adhering to the RESTful API approach. These APIs served as the backbone for seamless communication between the mobile application and the server, enabling essential functionalities.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/rss.png',
      url: 'https://www.google.com/',
    },
    {
      id: 4,
      title: 'Sudu Back-End',
      category: {
        id: 2, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Back-End Development',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'I played a pivotal role in the back-end development of the SuDu application, overseeing the implementation of Supabase. This open-source solution serves as an alternative to Firebase, seamlessly managing database operations, authentication processes, and storage functionalities. My responsibilities included ensuring the robust functionality and security of the back-end, contributing to a smooth and efficient user experience.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/supabase.png',
      url: 'https://www.google.com/',
    },
    {
      id: 5,
      title: 'PostgreSQL',
      category: {
        id: 3, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Database and SQL',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'In the SuDu web project, I have demonstrated expertise in leveraging PostgreSQL, a powerful relational database which is integrated seamlessly within the Supabase framework, utilizing its capabilities to handle data, manage authentication, and facilitate efficient storage. This experience highlights my adeptness in harnessing the features of PostgreSQL for secure and scalable applications',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/supabase.png',
      url: 'https://www.google.com/',
    },
    {
      id: 6,
      title: 'MongoDB',
      category: {
        id: 3, 
        date: {
          en: 'January 2023',
        },
        title: {
          en: 'Database and SQL',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'In the SuDu web project,  MongoDB is employed on the AI side to enhance data management. As a NoSQL database, MongoDB provided the flexibility and scalability required for these applications. This hands-on experience reflects my versatility in working with different database systems, ensuring optimal performance and data organization.',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/mongo.png',
      url: 'https://www.google.com/',
    },
     {
      id: 7,
      title: 'SuDu Whatsapp Service',
      category: {
        id: 4, 
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Messaging Services',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'In the SuDu web project,  I led the creation of SuDu WhatsApp service, enabling users to ask questions through WhatsApp. This service seamlessly integrates with an AI chatbot, ensuring swift and accurate responses. This innovative feature enhances user engagement and showcases my commitment to leveraging technology for a seamless and interactive experience',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/ws-service.jpg',
      url: 'https://www.google.com/',
    },
     {
      id: 8,
      title: 'Smart Whatsapp Service',
      category: {
        id: 4, 
        date: {
          en: 'January 2023',
        },
        title: {
          en: 'Messaging Services',
        },
         company: {
          en: 'A Serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'I developed a custom API that empowers users to send messages along with documents or images directly to WhatsApp. This streamlined solution enhances communication by providing a seamless integration between the application and WhatsApp',
      },
      desc: {
        en: 'View Project',
      }, 
      image: '/images/smart-service.jpg',
      url: 'https://www.google.com/',
    },
  ]
})
