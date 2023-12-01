<template>
    <div id="app" class="relative flex h-screen">
      <!-- Navigation Menu -->
      <nav class="absolute top-0 right-0 p-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="font-mono text-lg text-white hover:bg-gray-700 p-2 rounded transition">Home</router-link>
        </li>
        <li>
          <router-link to="/experience" class="font-mono text-lg text-white hover:bg-gray-700 p-2 rounded transition">Experience</router-link>
        </li>
        <li>
          <router-link to="/contact" class="font-mono text-lg text-white hover:bg-gray-700 p-2 rounded transition">Contact</router-link>
        </li>
      </ul>
    </nav>
  
      <div class="basis-1/3 bg-black">
        <h6 class="text-2xl text-white mt-5 ml-10 font-serif font-bold">Aizat N.</h6>
      </div>
      <div class="basis-2/3 bg-indigo-950">
        <div class = "absolute bottom-20 right-30">
        <h6 class = "font-bold text-white text-6xl indent-40">I'm Aizat Nazran.</h6>
        <h6 class = "font-bold text-white text-6xl indent-40">A Software Developer</h6>
        <h6 class = "font-bold text-neutral-500 text-6xl indent-40 mb-10">based in Kuala Lumpur.</h6>
        <h6 class = "text-white text-xl indent-40">I'm a very passionate developer, proficient in full-stack development. If you have a great</h6>
        <h6 class = "text-white text-xl indent-40">project that needs amazing skills, I'm your guy. </h6>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "",
  };
  </script>
  
  <style>
  @import "styles/main.css";
  
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  
  nav a {
    transition: background-color 0.3s ease;
  }
  
  nav a:hover {
    background-color: #4a5568; 
  }
  </style>
  