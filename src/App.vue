<template>
  <DevFolio msg="rspepe" />
</template>

<script>
import DevFolio from './components/DevFolio.vue'

export default {
  name: 'App',
  components: {
    DevFolio
  }
}
</script>

<style>
:root {
  --bg: #0a0e1a;
  --bg-soft: #111726;
  --surface: rgba(255, 255, 255, 0.04);
  --surface-hover: rgba(255, 255, 255, 0.07);
  --border: rgba(255, 255, 255, 0.09);
  --border-strong: rgba(255, 255, 255, 0.16);
  --text: #e7edf5;
  --muted: #94a3b8;
  --accent: #42b983;
  --accent-soft: rgba(66, 185, 131, 0.14);
  --accent-2: #38bdf8;
  --steam: #1b2838;
  --radius: 16px;
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  color: var(--text);
}

/* Ambient gradient wash behind the whole page */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(60rem 32rem at 12% -8%, rgba(66, 185, 131, 0.18), transparent 60%),
    radial-gradient(48rem 30rem at 92% 4%, rgba(56, 189, 248, 0.14), transparent 62%),
    linear-gradient(180deg, #0a0e1a 0%, #0a0e1a 42%, #0c1222 100%);
}

#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Avenir,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  line-height: 1.6;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
</style>
