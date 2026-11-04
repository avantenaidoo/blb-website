
import { describe, it, expect } from 'vitest';
import { renderHero } from './hero.js';

describe('hero component', () => {
    it('renders the hero section', () => {
        const hero = renderHero();

        expect(hero).toContain('<section id="home"');
        expect(hero).toContain('class="hero"');
    });

    it('renders the main headline', () => {
        const hero = renderHero();

        expect(hero).toContain('Build Your Brand.');
        expect(hero).toContain('Grow Your Digital Presence.');
    });

    it('renders the supporting description', () => {
        const hero = renderHero();

        expect(hero).toContain('effective digital marketing');
        expect(hero).toContain('compelling content');
    });

    it('renders the contact call-to-action', () => {
        const hero = renderHero();

        expect(hero).toContain('href="#contact"');
        expect(hero).toContain('Get in Touch');
    });

    it('renders the services call-to-action', () => {
        const hero = renderHero();

        expect(hero).toContain('href="#services"');
        expect(hero).toContain('Explore Services');
    });
});
