import heroImage from '../assets/blb-hero.jpg';

export function renderHero() {
    return `
        <section id="home" class="hero">
            <div class="container hero-content">
                <div class="hero-image">
                    <img
                        src="${heroImage}"
                        alt="BLB Digital Marketing"
                    >
                </div>

                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary">
                        Get in Touch
                    </a>

                    <a href="#services" class="btn btn-secondary">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    `;
}
