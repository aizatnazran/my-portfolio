import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Front-End Development',
      },
    },
    {
      id: 2,
      title: {
        en: 'Back-End Development',
      },
    },
    {
      id: 3,
      title: {
        en: 'Database and SQL',
      },
    },
    {
      id: 4,
      title: {
        en: 'Messaging Services',
      },
    },
    {
      id: 5,
      title: {
        en: 'DevOps',
      },
    }
  ]
})
