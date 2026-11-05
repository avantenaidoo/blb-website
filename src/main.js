import './style.css';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFooter } from './components/footer.js';
import { renderServices, initServices } from './components/services.js';

import {
    THEMES,
    getInitialTheme,
    getNextTheme,
    saveTheme,
    applyTheme
} from './utils/theme.js';

const app = document.querySelector('#app');

app.innerHTML = `
${renderHeader()}


  <main>

        ${renderHero()}

        ${renderServices()}

        <section id="about" class="section container">
            <h2>About</h2>
        </section>

<!-- Hidden portfolio section for use later 
        <section id="portfolio" class="section container">
            <h2>Portfolio</h2>
        </section>
-->

        <section id="contact" class="section container">
            <h2>Contact</h2>
        </section>
  </main>

  ${renderFooter()}
`;

initServices(app);

const themeButton = app.querySelector('.theme-toggle');

let currentTheme = getInitialTheme(
    window.localStorage,
    window.matchMedia('(prefers-color-scheme: dark)').matches
);

function updateTheme(theme) {
    currentTheme = theme;

    applyTheme(currentTheme, document.documentElement);
    saveTheme(currentTheme, window.localStorage);

    themeButton.setAttribute(
        'aria-pressed',
        String(currentTheme === THEMES.DARK)
    );

    themeButton.textContent =
        currentTheme === THEMES.DARK ? 'Light mode' : 'Dark mode';
}

updateTheme(currentTheme);

initHeader(app, () => {
    const nextTheme = getNextTheme(currentTheme);
    updateTheme(nextTheme);
});