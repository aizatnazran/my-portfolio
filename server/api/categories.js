import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Full Stack Development',
      },
    },
    {
      id: 2,
      title: {
        en: 'Messaging Services',
      },
    },
    {
      id: 3,
      title: {
        en: 'Bots',
      },
    },
  ]
})
