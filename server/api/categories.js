import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Song'
      },
    },
    {
      id: 2,
      title: {
        en: 'App'
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design'
      },
    },
  ]
})
