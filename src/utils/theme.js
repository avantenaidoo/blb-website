
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

export function getInitialTheme(storage, prefersDark = false) {
    const savedTheme = storage.getItem('theme');

    if (savedTheme === THEMES.LIGHT || savedTheme === THEMES.DARK) {
        return savedTheme;
    }

    return prefersDark ? THEMES.DARK : THEMES.LIGHT;
}

export function getNextTheme(currentTheme) {
    return currentTheme === THEMES.DARK
        ? THEMES.LIGHT
        : THEMES.DARK;
}

export function saveTheme(theme, storage) {
    if (theme !== THEMES.LIGHT && theme !== THEMES.DARK) {
        throw new Error(`Invalid theme: ${theme}`);
    }

    storage.setItem('theme', theme);
}

export function applyTheme(theme, root) {
    if (theme !== THEMES.LIGHT && theme !== THEMES.DARK) {
        throw new Error(`Invalid theme: ${theme}`);
    }

    root.dataset.theme = theme;
}
