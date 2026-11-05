
import { describe, it, expect } from 'vitest';
import { renderHero } from './hero.js';

describe('hero component', () => {
    it('renders the hero section', () => {
        const hero = renderHero();

        expect(hero).toContain('<section id="home"');
        expect(hero).toContain('class="hero"');
    });

    it('renders the hero image', () => {
        const hero = renderHero();

        expect(hero).toContain('class="hero-image"');
        expect(hero).toContain('alt="BLB Digital Marketing"');
        expect(hero).toContain('src="');
    });

    it('places the image before the action buttons', () => {
        const hero = renderHero();

        expect(hero.indexOf('class="hero-image"')).toBeLessThan(
            hero.indexOf('class="hero-actions"')
        );
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
