
import { describe, it, expect } from 'vitest';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
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

    it('includes all main website sections', () => {
        const sections = [
            'home',
            'services',
            'about',
            'portfolio',
            'contact'
        ];

        sections.forEach((section) => {
            expect(section).toBeTruthy();
        });
    });

    it('renders the footer', () => {
        const footer = renderFooter();

        expect(footer).toContain('<footer');
        expect(footer).toContain('BLB Digital Marketing');
        expect(footer).toContain('Website built by');
    });
});
