import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'It Never Ends ft. Julian Wilt',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'January 2023'
        },
        title: {
          en: 'Song'
        },
      },
      content: {
        en: 'This song was made for gear testing and to honour the work of the great band, Bring Me The Horizon.'
      },
      desc: {
          en: 'View Project'
        },
      image: '/images/ine.jpg',
      url: 'https://ite.aghea.site',
    },
  ]
})
