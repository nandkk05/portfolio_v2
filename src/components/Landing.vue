<template>
    <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-20 sm:py-0 md:flex-row  flex-col items-center w-screen h-screen">
    <div class="lg:flex-grow md:w-1/2 md:pr-24 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="mb-4 text-indigo-500">Hi, My Name is</h1>
      <h1 class="title-font sm:text-7xl text-5xl mb-4 font-bold text-gray-900">Nand Kishor.
      </h1>
      <h1 class="title-font sm:text-7xl text-5xl mb-4 font-bold text-gray-500">I build things for web.</h1>
      <p class="mb-8 text-lg leading-relaxed lg:w-1/2">I am a Web Designer from India who is working on a design tool called Adobe Xd. Love to create spaces for people to gather, collaborate, and share knowledge to add value and increase personal growth. Wanna talk to me? Just say "OK Google, talk to Alpha dev".</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get In Touch</button>
      </div>
    </div>
  </div>
        <img
        class="absolute top-0 b-auto right-0 pl-20    sm:w-1/2 h-auto mt-24  invisible sm:visible"
        :src="patternVue"
        alt="..."
      />
</section>
</template>



<script>

import patternVue from "@/assets/pattern_vue.png";

export default {
    name: 'Landing',
    data() {
    return {
      patternVue,
    }
    }
}
</script>