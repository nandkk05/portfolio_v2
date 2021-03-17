<template>
<Header/>
<Landing/>
<About/>
  <Education/>
</template>

<script>
import Education from './components/Education.vue'
import Landing from './components/Landing.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Education,
    Landing,
    About
  }
}
</script>

