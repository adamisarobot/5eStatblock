<template>
  <div>
    <hr class="relative z-10 h-2 bg-yellow-bar border" />
    <div
      id="content-wrap"
      class="relative z-0 w-[25rem] gap-10 columns-[25rem] mx-0.5 p-2 pb-1 border border-zinc-200 font-sans text-sm bg-paper"
    >
      <slot />
    </div>
    <hr class="relative z-10 h-2 bg-yellow-bar border" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#content-wrap {
  box-shadow: 0 0 1.5em #867453;
  height: var(--data-content-height);
  column-fill: auto;
}

[data-two-column] #content-wrap {
  /* One column is 400px and the gap between them is 40px. */
  width: 840px;
}

#content-wrap :slotted(h3) {
  border-bottom: 1px solid #7a200d;
  color: #7a200d;
  font-size: 21px;
  font-variant: small-caps;
  font-weight: normal;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 0.3em;

  break-inside: avoid-column;
  break-after: avoid-column;
}

#content-wrap :slotted(p) {
  margin-top: 0.3em;
  margin-bottom: 0.9em;
  line-height: 1.5;
}

#content-wrap :slotted(*:last-child) {
  margin-bottom: 0;
}
</style>
