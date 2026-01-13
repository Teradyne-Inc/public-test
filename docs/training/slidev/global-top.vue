<!-- global-top.vue -->
<template>
  <footer>
    <div class="absolute bottom-0 left-0 p-2 text-left" style="font-size: 0.5rem;">
      <img
        v-if="$slidev.nav.currentLayout !== 'end'"
        src="./media/logo-csra.svg"
        alt="Csra_Logo"
        class="inline h-10 w-auto align-middle"
        style="z-index: 50;"
      />
    </div>
    <div class="absolute bottom-0.5 left-11 p-2 text-left" style="font-size: 0.5rem; opacity: 0.1;">
      <img
        v-if="$slidev.nav.currentLayout !== 'end' && $slidev.nav.currentLayout !== 'intro'"
        src="./media/TerLogo_white_free_3313.png"
        alt="Ter_Logo"
        class="inline h-4 w-auto align-middle"
        style="z-index: 50;"
      />
    </div>
    <div
      v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'intro' && $slidev.nav.currentLayout !== 'end'"
      class="absolute bottom-0 right-0 p-2 text-right"
      style="font-size: 0.5rem; opacity: 0.2;"
    >
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 text-center" style="font-size: 0.5rem;">
      <span class="align-middle">Teradyne Confidential</span>
    </div>
    <div class="absolute bottom-60 center p-2 text-center" style="font-size: 1.8rem; opacity: 0.01;">
      <img
        v-if="$slidev.nav.currentLayout == 'end' || $slidev.nav.currentLayout == 'intro'"
        src="./media/TerLogo_white_free_3313.png"
        alt="Ter_Logo"
        class="inline h-40 w-auto align-middle"
        style="z-index: 50;"
      />
    </div>
  </footer>
</template>