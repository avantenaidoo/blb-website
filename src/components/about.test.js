
import { describe, it, expect } from 'vitest';
import { renderAbout } from './about.js';

describe('renderAbout', () => {
    it('renders the About section with the correct structure', () => {
        const html = renderAbout();

        expect(html).toContain('id="about"');
        expect(html).toContain('class="section about-section"');
        expect(html).toContain('class="container"');
        expect(html).toContain('class="about-content"');
    });

    it('renders the About Us heading', () => {
        const html = renderAbout();

        expect(html).toContain('<h2>About Us</h2>');
    });

    it('renders the introductory heading', () => {
        const html = renderAbout();

        expect(html).toContain(
            'What if your brand could do more than just exist online?'
        );
    });

    it('renders the complete About content', () => {
        const html = renderAbout();
        const normalisedHtml = html.replace(/\s+/g, ' ');

        expect(normalisedHtml).toContain(
            'At BLB Digital Marketing, we believe your business deserves'
        );

        expect(normalisedHtml).toContain(
            'creative product marketing, engaging digital content'
        );

        expect(normalisedHtml).toContain(
            'professionally designed websites that give your business the presence it deserves.'
        );
    });

    it('renders the About description inside a paragraph', () => {
        const html = renderAbout();

        expect(html).toContain('<p>');
        expect(html).toContain('</p>');
    });
});
