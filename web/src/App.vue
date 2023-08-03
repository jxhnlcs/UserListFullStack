<template>
  <Header/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  data() {
    return {
      name: 'Cataline',
    }
  },

  components: {
    Header,
  },
})
</script>
