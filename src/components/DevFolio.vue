<template>
  <div class="page">
    <!-- Hero -->
    <header class="hero">
      <div class="avatar-ring">
        <img class="avatar" alt="rspepe" src="@/assets/me.png" width="300" height="300">
      </div>
      <h1 class="hero-name">{{ msg }}</h1>
      <p class="hero-role">Software Engineer &amp; Web Developer</p>
      <p class="hero-bio">
        Hey there! I'm a web developer who loves building cool stuff &mdash;
        from backend services to games shipped on Steam.
      </p>
      <nav class="hero-links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="hero-link"
        >{{ link.label }}</a>
      </nav>
    </header>

    <!-- Showcase -->
    <section class="section">
      <h2 class="section-title">Showcase</h2>
      <p class="section-lead">Things I've built and shipped.</p>
      <div class="showcase-grid">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="showcase-item"
          :class="{ 'is-featured': project.featured }"
        >
          <span v-if="project.badge" class="showcase-badge">{{ project.badge }}</span>
          <h3 class="showcase-heading">{{ project.title }}</h3>
          <p class="showcase-desc">{{ project.description }}</p>
          <p v-if="project.meta" class="showcase-meta">{{ project.meta }}</p>
          <span class="showcase-cta">View <span aria-hidden="true">&rarr;</span></span>
        </a>
      </div>
    </section>

    <!-- Skills -->
    <section class="section">
      <h2 class="section-title">Tools &amp; Stack</h2>
      <p class="section-lead">What I reach for day to day.</p>
      <div class="skills-grid">
        <div v-for="category in skills" :key="category.name" class="skill-category">
          <h3 class="skill-category-title">
            <span class="skill-icon" aria-hidden="true">{{ category.icon }}</span>
            {{ category.name }}
          </h3>
          <div class="skill-tags">
            <a
              v-for="skill in category.items"
              :key="skill.name"
              :href="skill.url"
              target="_blank"
              rel="noopener"
              class="skill-tag"
            >{{ skill.name }}</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; {{ year }} rspepe</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DevFolio',
  props: {
    msg: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      links: [
        { label: 'GitHub', url: 'https://github.com/rspepe/' },
        { label: 'Qiita', url: 'https://qiita.com/rspepe/' },
        { label: 'Steam', url: 'https://store.steampowered.com/app/5081400/HOSHIKUI/' }
      ],
      projects: [
        {
          title: 'HOSHIKUI',
          description:
            'A star that keeps losing heat. There is no attack button — crashing into other stars is your attack, your healing, your movement, and your exploration.',
          meta: '2D Action Roguelike · Published by Sakamo Productions',
          url: 'https://store.steampowered.com/app/5081400/HOSHIKUI/',
          badge: 'Steam',
          featured: true
        },
        {
          title: 'DAKENSHI',
          description:
            'Can you hear the bad can? Tap, listen, and reject defective cans in a sound-based inspection game. The line keeps accelerating. Three mistakes end your shift.',
          meta: 'Audio Inspection Game · Published by Sakamo Productions',
          url: 'https://store.steampowered.com/app/5156410/DAKENSHI/',
          badge: 'Steam',
          featured: true
        },
        {
          title: "Texas Hold'em Poker",
          description: 'Online poker game with Texas Hold\'em rules.',
          meta: 'Web · Vue.js',
          url: 'https://rspepe.github.io/holdem-poker-online/'
        },
        {
          title: 'Minesweeper Online',
          description: 'Classic minesweeper game built with modern web technologies.',
          meta: 'Web · Vue.js',
          url: 'https://rspepe.github.io/minesweeper-online/'
        }
      ],
      skills: [
        {
          name: 'Backend Development',
          icon: '⚙️',
          items: [
            { name: 'PHP', url: 'https://www.php.net/' },
            { name: 'Go', url: 'https://go.dev/' },
            { name: 'Python', url: 'https://www.python.org/' },
            { name: 'Node.js', url: 'https://nodejs.org/en/' }
          ]
        },
        {
          name: 'Frontend Development',
          icon: '🎨',
          items: [
            { name: 'Vue.js', url: 'https://vuejs.org' },
            { name: 'React', url: 'https://reactjs.org' }
          ]
        },
        {
          name: 'Cloud Platforms',
          icon: '☁️',
          items: [
            { name: 'AWS', url: 'https://aws.amazon.com/' },
            { name: 'GCP', url: 'https://cloud.google.com/' }
          ]
        },
        {
          name: 'AI & Tools',
          icon: '🛠️',
          items: [
            { name: 'Claude', url: 'https://claude.ai/' },
            { name: 'Codex', url: 'https://openai.com/codex/' },
            { name: 'Neovim', url: 'https://neovim.io/' },
            { name: 'Docker', url: 'https://www.docker.com/' },
            { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
            { name: 'Homebrew', url: 'https://brew.sh/' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

/* ---------- Hero ---------- */

.hero {
  text-align: center;
  padding: 88px 0 72px;
  animation: rise 0.7s ease both;
}

.avatar-ring {
  width: 168px;
  height: 168px;
  margin: 0 auto 28px;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 10px rgba(66, 185, 131, 0.08), var(--shadow);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  background: var(--bg-soft);
}

.hero-name {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(120deg, #ffffff 20%, var(--accent) 70%, var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-role {
  margin: 8px 0 0;
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-bio {
  max-width: 620px;
  margin: 22px auto 0;
  color: var(--muted);
  font-size: 1.06rem;
}

.hero-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero-link {
  padding: 10px 24px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.hero-link:hover,
.hero-link:focus-visible {
  transform: translateY(-2px);
  border-color: var(--accent);
  background: var(--accent-soft);
}

/* ---------- Sections ---------- */

.section {
  margin-top: 72px;
  animation: rise 0.7s ease both;
  animation-delay: 0.12s;
}

.section-title {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section-title::after {
  content: '';
  display: block;
  width: 52px;
  height: 3px;
  margin-top: 12px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
}

.section-lead {
  margin: 14px 0 32px;
  color: var(--muted);
}

/* ---------- Showcase ---------- */

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 22px;
}

.showcase-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease,
    box-shadow 0.3s ease;
}

.showcase-item::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.showcase-item:hover,
.showcase-item:focus-visible {
  transform: translateY(-6px);
  border-color: var(--border-strong);
  background: var(--surface-hover);
  box-shadow: var(--shadow);
}

.showcase-item:hover::before,
.showcase-item:focus-visible::before {
  opacity: 1;
}

.showcase-item.is-featured {
  grid-column: 1 / -1;
  border-color: rgba(66, 185, 131, 0.42);
  background: linear-gradient(
    135deg,
    rgba(66, 185, 131, 0.12),
    rgba(56, 189, 248, 0.06) 60%,
    var(--surface)
  );
}

.showcase-item.is-featured::before {
  opacity: 1;
}

.showcase-item.is-featured .showcase-heading {
  font-size: 2rem;
  letter-spacing: 0.02em;
}

.showcase-item.is-featured .showcase-desc {
  max-width: 62ch;
  font-size: 1.05rem;
}

.showcase-badge {
  align-self: flex-start;
  margin-bottom: 14px;
  padding: 5px 14px;
  border-radius: 999px;
  background: var(--steam);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.showcase-heading {
  margin: 0 0 10px;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}

.showcase-desc {
  margin: 0;
  color: var(--muted);
}

.showcase-meta {
  margin: 14px 0 0;
  color: #6f7f92;
  font-size: 0.85rem;
}

.showcase-cta {
  margin-top: 20px;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
}

.showcase-item:hover .showcase-cta span {
  display: inline-block;
  transform: translateX(4px);
  transition: transform 0.25s ease;
}

/* ---------- Skills ---------- */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}

.skill-category {
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.skill-category:hover {
  border-color: var(--border-strong);
  background: var(--surface-hover);
}

.skill-category-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.skill-icon {
  font-size: 1.1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.skill-tag {
  padding: 7px 15px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease,
    color 0.22s ease;
}

.skill-tag:hover,
.skill-tag:focus-visible {
  transform: translateY(-2px);
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
}

/* ---------- Footer ---------- */

.footer {
  margin-top: 88px;
  padding-top: 26px;
  border-top: 1px solid var(--border);
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
}

.footer p {
  margin: 0;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 56px 0 48px;
  }

  .avatar-ring {
    width: 132px;
    height: 132px;
  }

  .showcase-item {
    padding: 22px;
  }

  .showcase-item.is-featured .showcase-heading {
    font-size: 1.6rem;
  }
}
</style>
