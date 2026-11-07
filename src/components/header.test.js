
import { describe, it, expect } from 'vitest';
import {
    renderHeader,
    setMenuOpen
} from './header.js';

describe('header component', () => {
    it('renders the BLB logo', () => {
        const header = renderHeader();

        expect(header).toContain('class="site-logo"');
        expect(header).toContain('alt="BLB Digital Marketing"');
        expect(header).toContain('src="');
    });

    it('renders the main navigation links', () => {
        const header = renderHeader();

        expect(header).toContain('href="#home"');
        expect(header).toContain('href="#about"');
        expect(header).toContain('href="#services"');
        expect(header).toContain('href="#portfolio"');
        expect(header).toContain('href="#contact"');
    });

    it('renders an accessible menu toggle button', () => {
        const header = renderHeader();

        expect(header).toContain('aria-controls="primary-navigation"');
        expect(header).toContain('aria-expanded="false"');
    });

    it('opens the navigation menu', () => {
        const menuButton = {
            attributes: {},
            setAttribute(name, value) {
                this.attributes[name] = value;
            }
        };

        const navigation = { hidden: true };

        setMenuOpen(menuButton, navigation, true);

        expect(navigation.hidden).toBe(false);
        expect(menuButton.attributes['aria-expanded']).toBe('true');
        expect(menuButton.attributes['aria-label']).toBe(
            'Close navigation menu'
        );
    });

    it('closes the navigation menu', () => {
        const menuButton = {
            attributes: {},
            setAttribute(name, value) {
                this.attributes[name] = value;
            }
        };

        const navigation = { hidden: false };

        setMenuOpen(menuButton, navigation, false);

        expect(navigation.hidden).toBe(true);
        expect(menuButton.attributes['aria-expanded']).toBe('false');
        expect(menuButton.attributes['aria-label']).toBe(
            'Open navigation menu'
        );
    });


    it('renders the theme toggle button', () => {
        const header = renderHeader();

        expect(header).toContain('class="theme-toggle"');
        expect(header).toContain('aria-label="Toggle dark mode"');
    });

    it('initially marks the dark theme as inactive', () => {
        const header = renderHeader();

        expect(header).toContain('aria-pressed="false"');
    });

});
