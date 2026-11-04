import './style.css';
import { renderHeader, initHeader } from './components/header';

const app = document.querySelector('#app');

app.innerHTML = `
${renderHeader()}


  <main>
        <section id="home" class="section container">
            <h1>Welcome to BLB Digital Marketing</h1>
            <p>Your digital marketing journey starts here.</p>
        </section>

        <section id="services" class="section container">
            <h2>Services</h2>
        </section>

        <section id="about" class="section container">
            <h2>About</h2>
        </section>

        <section id="portfolio" class="section container">
            <h2>Portfolio</h2>
        </section>

        <section id="contact" class="section container">
            <h2>Contact</h2>
        </section>
  </main>
`;