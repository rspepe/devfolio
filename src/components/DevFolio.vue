<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Hey there! I'm a web developer who loves building cool stuff.<br>
      <a href="https://github.com/rspepe/" target="_blank" rel="noopener">GitHub</a>.
      <a href="https://qiita.com/rspepe/" target="_blank" rel="noopener">Qiita</a>.
    </p>
    <div class="skills-container">
      <div class="skill-category">
        <h3>Backend Development</h3>
        <div class="skill-grid">
          <a href="https://www.php.net/" target="_blank" rel="noopener" class="skill-tag">PHP</a>
          <a href="https://go.dev/" target="_blank" rel="noopener" class="skill-tag">Go</a>
          <a href="https://www.python.org/" target="_blank" rel="noopener" class="skill-tag">Python</a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noopener" class="skill-tag">Node.js</a>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Frontend Development</h3>
        <div class="skill-grid">
          <a href="https://vuejs.org" target="_blank" rel="noopener" class="skill-tag">Vue.js</a>
          <a href="https://reactjs.org" target="_blank" rel="noopener" class="skill-tag">React</a>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Cloud Platforms</h3>
        <div class="skill-grid">
          <a href="https://aws.amazon.com/" target="_blank" rel="noopener" class="skill-tag">AWS</a>
          <a href="https://cloud.google.com/" target="_blank" rel="noopener" class="skill-tag">GCP</a>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>AI & Tools</h3>
        <div class="skill-grid">
          <a href="https://claude.ai/" target="_blank" rel="noopener" class="skill-tag">Claude</a>
          <a href="https://www.docker.com/" target="_blank" rel="noopener" class="skill-tag">Docker</a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="skill-tag">Visual Studio Code</a>
          <a href="https://brew.sh/" target="_blank" rel="noopener" class="skill-tag">Homebrew</a>
        </div>
      </div>
    </div>
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
