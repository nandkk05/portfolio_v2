<template>
<Header/>
<Landing/>
<About/>
  <Experience/>
  <Projects/>
  <Contributions/>
  <Talks/>
</template>

<script>
import Landing from './components/Landing.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contributions from './components/Contributions.vue'
import Talks from './components/Talks.vue'





export default {


  name: 'App',
  components: {
    Header,
    Landing,
    About,
    Experience,
    Projects,
    Contributions,
    Talks
  }
}
</script>

,
    Contributions