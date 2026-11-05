import developerLogo from '../assets/avante-logo.svg'

export function renderFooter() {
    return `
        <footer class="site-footer">
            <div class="container footer-content">
                <p class="footer-brand">BLB Digital Marketing</p>

                <p class="footer-copyright">
                    &copy; ${new Date().getFullYear()} BLB Digital Marketing.
                    All rights reserved.
                </p>

                <p class="footer-credit">
                    Website built by
                    <a
                        href="https://avanteportfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit developer website"
                    >
                        <img
                            src="${developerLogo}"
                            alt="Developer logo"
                            class="footer-logo"
                        >
                    </a>
                </p>

                <a href="#home" class="footer-back-to-top">
                    Back to top
                </a>
            </div>
        </footer>
    `;
}