<template>
    <section class="text-gray-600 body-font lg:mt-10  ">
  <div class="container mx-auto px-5 py-24 flex md:flex-row flex-col items-center ">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded-full lg:w-10/12 lg:ml-5" alt="hero" src="https://avatars.githubusercontent.com/u/33036554?s=460&u=a4796232da49d983a500fe86a0db4a0b723a79b1&v=4">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">About Me
      </h1>
      <p class="text-xl leading-relaxed">I am a Web Designer from India who is working on a design tool called Adobe Xd. Love to create spaces for people to gather, collaborate, and share knowledge to add value and increase personal growth. Wanna talk to me? Just say "OK Google, talk to Alpha dev".</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
  
}
</script>
