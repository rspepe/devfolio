<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      ここはrspepeという開発者の紹介ページです。<br>
      <a href="https://github.com/rspepe/" target="_blank" rel="noopener">Github</a>.
    </p>
    <h3>Installed Server Side Skils</h3>
    <ul>
      <li><a href="https://www.php.net/" target="_blank" rel="noopener">PHP</a></li>
      <li><a href="https://go.dev/" target="_blank" rel="noopener">Go</a></li>
    </ul>
    <h3>Installed Frontend Skils</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a></li>
    </ul>
    <h3>Installed Cloud Skils</h3>
    <ul>
      <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener">AWS</a></li>
      <li><a href="https://cloud.google.com/" target="_blank" rel="noopener">GCP</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DevFolio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
