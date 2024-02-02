import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'RezekiSuri API',
      category: {
        id: 2, //see categories.js
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
        en: 'I created a few APIs with Node.js using the RESTful API approach, for a mobile application project called RezekiSuri, a platform for housewives to earn extra income',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/rs.png',
      url: 'https://ite.aghea.site',
    },

    {
      id: 2,
      title: 'E-Commerce Website',
      category: {
        id: 1, //see categories.js
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
        en: 'I was responsible for the creation of a few pages using Vue.js, Nuxt.js and Tailwind CSS in an E-Commerce Website , mainly being the profile, sales, order summary, receipt, setup, shop, and listing pages',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/ecommerce.jpg',
      url: 'https://ite.aghea.site',
    },
    {
      id: 3,
      title: 'SuDu Web',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'December 2023',
        },
        title: {
          en: 'Front-End Development',
        },
         company: {
          en: 'A serious Company Sdn. Bhd.',
        },
      },
      content: {
        en: 'I was responsible for creating the web application for SuDu Web using Vue.js',
      },
      desc: {
        en: 'View Project',
      },
      image: '/images/sudu.png',
      url: 'https://ite.aghea.site',
    },
  ]
})
