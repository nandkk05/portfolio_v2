<template>
<Landing/>
  <Hero/>
  <Education/>
</template>

<script>
import Hero from './components/Hero.vue'
import Education from './components/Education.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Education,
    Landing
  }
}
</script>

