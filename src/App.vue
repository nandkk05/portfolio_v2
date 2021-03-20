<template>
<Header/>
<Landing/>
<About/>
  <Education/>
  <Experience/>
  <Projects/>
</template>

<script>
import Education from './components/Education.vue'
import Landing from './components/Landing.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    Education,
    Landing,
    About,
    Experience,
    Projects
  }
}
</script>

