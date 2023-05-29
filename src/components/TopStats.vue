<template>
  <TaperedRule />
  <div class="top-stats">
    <slot />
  </div>
  <TaperedRule />
</template>

<script setup lang="ts">
import TaperedRule from './TaperedRule.vue';
</script>

<style scoped>
.top-stats {
  color: #7a200d;
}
</style>
