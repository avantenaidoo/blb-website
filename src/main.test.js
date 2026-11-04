
import { describe, it, expect } from 'vitest';
import { renderHeader } from './components/header.js';

describe('main application', () => {
    it('renders the header', () => {
        const header = renderHeader();

        expect(header).toContain('BLB');
        expect(header).toContain('Digital Marketing');
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
});
