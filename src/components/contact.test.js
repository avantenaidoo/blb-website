import { describe, it, expect } from 'vitest';
import { renderContact } from './contact.js';

describe('renderContact', () => {
    it('renders the Contact section with the correct structure', () => {
        const html = renderContact();

        expect(html).toContain('id="contact"');
        expect(html).toContain('class="section contact-section"');
        expect(html).toContain('class="container"');
        expect(html).toContain('class="contact-content"');
    });

    it('renders the Contact Us section heading', () => {
        const html = renderContact();

        expect(html).toContain('<h2>Contact Us</h2>');
    });

    it('renders the main promotional heading', () => {
        const html = renderContact();

        expect(html).toContain('<h3>');
        expect(html).toContain(
            'Your brand deserves more than just another post.'
        );
        expect(html).toContain(
            'It deserves to make an impact.'
        );
    });

    it('renders the introductory text', () => {
        const html = renderContact();

        expect(html).toContain('class="contact-intro"');
        expect(html).toContain(
            'In a digital world full of noise, being seen is only'
        );
        expect(html).toContain('the beginning.');
    });

    it('renders the complete Contact description', () => {
        const html = renderContact();
        const normalisedHtml = html.replace(/\s+/g, ' ');

        expect(normalisedHtml).toContain(
            'At BLB Digital Marketing, we bring creativity, strategy and purpose together'
        );

        expect(normalisedHtml).toContain(
            'build meaningful connections, showcase what makes them different'
        );

        expect(normalisedHtml).toContain(
            'turn their online presence into something worth remembering.'
        );
    });

    it('renders both email contact links', () => {
        const html = renderContact();

        expect(html).toContain(
            'mailto:hello.blbdm@gmail.com'
        );

        expect(html).toContain(
            'mailto:hello.blbdm1@gmail.com'
        );

        expect(html).toContain(
            'Click here for Digital Marketing'
        );

        expect(html).toContain(
            'Click here for Websites'
        );
    });


    it('renders an accessible email icon for each contact link', () => {
        const html = renderContact();

        const emailLinks = html.split(
            '<div class="contact-links">'
        )[1].split('</div>')[0];

        const iconCount = (emailLinks.match(/<svg/g) || []).length;

        expect(iconCount).toBe(2);
        expect(emailLinks.match(/aria-hidden="true"/g)).toHaveLength(2);
    });

    it('renders Facebook and Instagram social media links', () => {
        const html = renderContact();

        expect(html).toContain(
            'href="https://www.facebook.com/blbdigitalmarketing"'
        );

        expect(html).toContain(
            'href="https://www.instagram.com/blbdigitalmarketing/"'
        );
    });

    it('opens social media links in a new tab securely', () => {
        const html = renderContact();

        const socialLinks = html.match(
            /<a(?=[^>]*class="social-link")[^>]*>/g
        );

        expect(socialLinks).toHaveLength(2);

        socialLinks.forEach((link) => {
            expect(link).toContain('target="_blank"');
            expect(link).toContain('rel="noopener noreferrer"');
        });
    });

    it('renders accessible Facebook and Instagram icons', () => {
        const html = renderContact();

        expect(html).toContain(
            'aria-label="Visit our Facebook page"'
        );

        expect(html).toContain(
            'aria-label="Visit our Instagram page"'
        );

        const socialLinksSection = html.split(
            '<div class="social-links">'
        )[1].split('</div>')[0];

        expect(socialLinksSection.match(/<svg/g)).toHaveLength(2);
        expect(socialLinksSection.match(/aria-hidden="true"/g))
            .toHaveLength(2);
    });

    it('renders social media links between the contact image and tagline', () => {
        const html = renderContact();

        expect(html.indexOf('class="contact-image"'))
            .toBeLessThan(html.indexOf('class="social-links"'));

        expect(html.indexOf('class="social-links"'))
            .toBeLessThan(html.indexOf('class="contact-tagline"'));
    });

    it('renders the Contact image before the tagline', () => {
        const html = renderContact();

        expect(html).toContain('class="contact-image"');
        expect(html).toContain('<img');
        expect(html).toContain(
            'alt="BLB Digital Marketing and Web Development"'
        );

        expect(html.indexOf('class="contact-image"'))
            .toBeLessThan(html.indexOf('class="contact-tagline"'));
    });

    it('renders the tagline with individually styled text elements', () => {
        const html = renderContact();

        expect(html).toContain('class="tagline-build"');
        expect(html).toContain('class="tagline-lead"');
        expect(html).toContain('class="tagline-unforgettable"');

        expect(html).toContain(
            '<span class="tagline-highlight">Build</span>'
        );

        expect(html).toContain(
            '<span class="tagline-highlight">Lead</span>'
        );

        expect(html).toContain(
            '<span class="tagline-highlight">Become</span>'
        );

        expect(html).toContain('Your Brand.');
        expect(html).toContain('Your Way.');
        expect(html).toContain('Unforgettable.');

        expect(html.match(/class="tagline-highlight"/g)).toHaveLength(3);
    });
});