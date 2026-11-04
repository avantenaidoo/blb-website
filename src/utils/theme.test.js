
import { describe, it, expect } from 'vitest';

import {
    THEMES,
    getInitialTheme,
    getNextTheme,
    saveTheme,
    applyTheme
} from './theme.js';

function createStorage(initialTheme = null) {
    const data = {};

    if (initialTheme !== null) {
        data.theme = initialTheme;
    }

    return {
        getItem(key) {
            return data[key] ?? null;
        },

        setItem(key, value) {
            data[key] = String(value);
        }
    };
}

describe('theme utility', () => {
    it('uses the saved light theme', () => {
        const storage = createStorage('light');

        expect(getInitialTheme(storage, true)).toBe(THEMES.LIGHT);
    });

    it('uses the saved dark theme', () => {
        const storage = createStorage('dark');

        expect(getInitialTheme(storage, false)).toBe(THEMES.DARK);
    });

    it('uses the system dark preference when no theme is saved', () => {
        const storage = createStorage();

        expect(getInitialTheme(storage, true)).toBe(THEMES.DARK);
    });

    it('defaults to light when no theme is saved and the system prefers light', () => {
        const storage = createStorage();

        expect(getInitialTheme(storage, false)).toBe(THEMES.LIGHT);
    });

    it('defaults to light for an invalid saved theme', () => {
        const storage = createStorage('blue');

        expect(getInitialTheme(storage, false)).toBe(THEMES.LIGHT);
    });

    it('switches from dark to light', () => {
        expect(getNextTheme(THEMES.DARK)).toBe(THEMES.LIGHT);
    });

    it('switches from light to dark', () => {
        expect(getNextTheme(THEMES.LIGHT)).toBe(THEMES.DARK);
    });

    it('saves the selected theme', () => {
        const storage = createStorage();

        saveTheme(THEMES.DARK, storage);

        expect(storage.getItem('theme')).toBe('dark');
    });

    it('rejects an invalid theme when saving', () => {
        const storage = createStorage();

        expect(() => saveTheme('blue', storage)).toThrow('Invalid theme: blue');
    });

    it('applies the selected theme to the document root', () => {
        const root = { dataset: {} };

        applyTheme(THEMES.DARK, root);

        expect(root.dataset.theme).toBe('dark');
    });
});
