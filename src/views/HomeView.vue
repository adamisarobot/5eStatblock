<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import StatBlock from '../components/StatBlock.vue';
import CreatureHeading from '../components/CreatureHeading.vue';
import TopStats from '../components/TopStats.vue';
</script>

<template>
  <main>
    <TheWelcome />
    <div class="flex justify-center w-full">
      <StatBlock>
        <CreatureHeading>
          <h1>Animated Armor</h1>
          <h2>Medium construct, unaligned</h2>
        </CreatureHeading>
        <TopStats></TopStats>
        <h3>Actions</h3></StatBlock
      >
    </div>
  </main>
</template>
