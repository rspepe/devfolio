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

    <div class="showcase-container">
      <h2>Showcase</h2>
      <div class="showcase-grid">
        <div class="showcase-item">
          <a href="https://rspepe.github.io/minesweeper-online/" target="_blank" rel="noopener">
            <h3>Minesweeper Online</h3>
            <p>Classic minesweeper game built with modern web technologies</p>
          </a>
        </div>
        <div class="showcase-item">
          <a href="https://rspepe.github.io/holdem-poker-online/" target="_blank" rel="noopener">
            <h3>Texas Hold'em Poker</h3>
            <p>Online poker game with Texas Hold'em rules</p>
          </a>
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

.showcase-container {
  margin-top: 60px;
  padding: 20px;
}

.showcase-container h2 {
  font-size: 2em;
  margin-bottom: 30px;
  color: #2c3e50;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.showcase-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #e9ecef;
}

.showcase-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.showcase-item a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.showcase-item h3 {
  margin: 0 0 15px 0;
  color: #42b983;
  font-size: 1.5em;
}

.showcase-item p {
  margin: 0;
  color: #6c757d;
  line-height: 1.6;
}
</style>
