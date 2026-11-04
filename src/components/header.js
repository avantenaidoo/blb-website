
export function renderHeader() {
    return `
        <header class="site-header">
            <div class="container header-inner">
                <a class="site-brand" href="#home" aria-label="BLB Digital Marketing home">
                    <span class="site-brand-name">BLB</span>
                    <span class="site-brand-description">Digital Marketing</span>
                </a>

                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    class="site-nav"
                    id="primary-navigation"
                    aria-label="Main navigation"
                    hidden
                >
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button
                    class="theme-toggle"
                    type="button"
                    aria-label="Toggle dark mode"
                    aria-pressed="false"
                >
                    Dark mode
                </button>
            </div>
        </header>
    `;
}

export function setMenuOpen(menuButton, navigation, isOpen) {
    navigation.hidden = !isOpen;

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
}

export function initHeader(root = document, onThemeToggle = () => { }) {
    const menuButton = root.querySelector('.menu-toggle');
    const navigation = root.querySelector('.site-nav');
    const themeButton = root.querySelector('.theme-toggle');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';

            setMenuOpen(menuButton, navigation, isOpen);
        });

        navigation.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                setMenuOpen(menuButton, navigation, false);
            });
        });

        root.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(menuButton, navigation, false);
            }
        });
    }

    if (themeButton) {
        themeButton.addEventListener('click', onThemeToggle);
    }
}
