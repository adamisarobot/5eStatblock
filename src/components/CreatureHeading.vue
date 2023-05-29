<template>
  <header class="creature-header">
    <slot />
  </header>
</template>

<style scoped>
.creature-header :slotted(h1) {
  font-family: 'Libre Baskerville', 'Lora', 'Calisto MT', 'Bookman Old Style', Bookman,
    'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;
  color: #7a200d;
  font-weight: 700;
  margin: 0px;
  font-size: 23px;
  letter-spacing: 1px;
  font-variant: small-caps;
}

.creature-header :slotted(h2) {
  font-weight: normal;
  font-style: italic;
  font-size: 12px;
  margin: 0;
}
</style>
