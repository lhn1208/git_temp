<script setup>
import { useRoute, RouterView } from 'vue-router'
import UserHeader from './common/UserHeader.vue'
import AgentHeader from './common/AgentHeader.vue'

const route = useRoute()
</script>

<template>
  
  <component :is="route.meta.isAdmin ? AgentHeader : UserHeader" />
  <RouterView />

</template>

<style scoped>

</style>
