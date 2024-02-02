import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'HTML',
      icon: 'devicon:html5',
      value: 90,
    },
    {
      id: 2,
      title: 'CSS',
      icon: 'devicon:css3',
      value: 85,
    },
  ]
})
