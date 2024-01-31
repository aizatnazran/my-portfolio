import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'HTML',
      icon: 'devicon:html5',
      value: 90, // Adjust the percentage as needed
    },
    {
      id: 2,
      title: 'CSS',
      icon: 'devicon:css3',
      value: 85, // Adjust the percentage as needed
    },
    // Add more skills as needed
]
})