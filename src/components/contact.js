import contactImage from '../assets/contact-image.png';

export function renderContact() {
    return `
        <section id="contact" class="section contact-section">
            <div class="container">
                <h2>Contact Us</h2>

                <div class="contact-content">

                    <h3>
                        Your brand deserves more than just another post.
                        It deserves to make an impact.
                    </h3>

                    <p class="contact-intro">
                        In a digital world full of noise, being seen is only
                        the beginning.
                    </p>

                    <p>
                        At BLB Digital Marketing, we bring creativity,
                        strategy and purpose together to help businesses
                        build meaningful connections, showcase what makes
                        them different and turn their online presence into
                        something worth remembering.
                    </p>

                    <div class="contact-links">

                        <a
                            href="mailto:hello.blbdm@gmail.com"
                            class="contact-link"
                            aria-label="Email us about Digital Marketing"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="5" width="18" height="14" rx="2"/>
                                <path d="m3 7 9 6 9-6"/>
                            </svg>

                            <span>Click here for Digital Marketing</span>
                        </a>

                        <a
                            href="mailto:hello.blbdm1@gmail.com"
                            class="contact-link"
                            aria-label="Email us about Websites"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="5" width="18" height="14" rx="2"/>
                                <path d="m3 7 9 6 9-6"/>
                            </svg>

                            <span>Click here for Websites</span>
                        </a>

                    </div>

                    <div class="contact-image">
                        <img
                            src="${contactImage}"
                            alt="BLB Digital Marketing and Web Development"
                        >
                    </div>

                   <div class="social-links">

                        <!-- Facebook -->
                        <a
                            href="https://www.facebook.com/blbdigitalmarketing"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit our Facebook page"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.6v8h3.4Z"/>
                            </svg>
                        </a>

                        <!-- Instagram -->
                        <a
                            href="https://www.instagram.com/blbdigitalmarketing/"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit our Instagram page"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                            </svg>
                        </a>

                    </div>

                    <div class="contact-tagline">
                        <span class="tagline-build">
                            <span class="tagline-highlight">Build</span> Your Brand.
                        </span>

                        <span class="tagline-lead">
                            <span class="tagline-highlight">Lead</span> Your Way.
                        </span>

                        <span class="tagline-unforgettable">
                            <span class="tagline-highlight">Become</span> Unforgettable.
                        </span>
                    </div>

                </div>
            </div>
        </section>
    `;
}
