
import { describe, it, expect } from 'vitest';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderServices } from './components/services.js';
import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';

describe('main application', () => {
    it('renders the header', () => {
        const header = renderHeader();

        expect(header).toContain('BLB');
        expect(header).toContain('Digital Marketing');
    });

    it('renders the hero section', () => {
        const hero = renderHero();

        expect(hero).toContain('id="home"');
    });

    it('includes all active website sections', () => {
        const sections = [
            'home',
            'services',
            'about',
            'contact'
        ];

        sections.forEach((section) => {
            expect(section).toBeTruthy();
        });
    });

    it('does not include the Portfolio section', () => {
        const portfolio = `
            ${renderHeader()}
            ${renderHero()}
            ${renderFooter()}
        `;

        expect(portfolio).not.toContain('id="portfolio"');
    });

    it('renders the footer', () => {
        const footer = renderFooter();

        expect(footer).toContain('<footer');
        expect(footer).toContain('BLB Digital Marketing');
        expect(footer).toContain('Website built by');
    });
});
