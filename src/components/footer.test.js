import { describe, it, expect } from 'vitest';
import { renderFooter } from './footer.js';

describe('footer component', () => {
    it('renders the footer element', () => {
        const footer = renderFooter();

        expect(footer).toContain('<footer');
        expect(footer).toContain('class="site-footer"');
    });

    it('renders the business name', () => {
        const footer = renderFooter();

        expect(footer).toContain('BLB Digital Marketing');
    });

    it('renders the copyright notice', () => {
        const footer = renderFooter();

        expect(footer).toContain('&copy;');
        expect(footer).toContain('All rights reserved.');
    });

    it('renders the website developer credit', () => {
        const footer = renderFooter();

        expect(footer).toContain('Website built by');
        expect(footer).toContain('href="https://avanteportfolio.vercel.app/"');
    });

    it('renders the developer logo', () => {
        const footer = renderFooter();

        expect(footer).toContain('class="footer-logo"');
        expect(footer).toContain('alt="Developer logo"');
        expect(footer).toContain('src="');
    });

    it('opens the developer website in a new tab securely', () => {
        const footer = renderFooter();

        expect(footer).toContain('target="_blank"');
        expect(footer).toContain('rel="noopener noreferrer"');
    });

    it('renders a back-to-top link', () => {
        const footer = renderFooter();

        expect(footer).toContain('href="#home"');
        expect(footer).toContain('Back to top');
    });
});