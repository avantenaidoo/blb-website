
import monthlyPackages from '../assets/blb-monthly-packages.jpg';
import websitePackages from '../assets/website-packages.jpg';

const services = [
    {
        image: monthlyPackages,
        alt: 'BLB monthly packages'
    },
    {
        image: websitePackages,
        alt: 'Website packages'
    }
];


export function renderServices() {
    const serviceSlides = services.map((service, index) => `
        <div
            class="service-slide"
            data-service-slide
            ${index !== 0 ? 'hidden' : ''}
        >
            <img
                src="${service.image}"
                alt="${service.alt}"
            >
        </div>
    `).join('');

    return `
        <section id="services" class="section services-section">
            <div class="container">
                <h2>Our Services</h2>

                <div class="services-carousel">
                    <div
                        class="services-slides"
                        aria-live="polite"
                    >
                        ${serviceSlides}
                    </div>

                    <button
                        class="services-arrow services-arrow-prev"
                        type="button"
                        aria-label="Show previous service"
                    >
                        &#10094;
                    </button>

                    <button
                        class="services-arrow services-arrow-next"
                        type="button"
                        aria-label="Show next service"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    `;
}


export function initServices(root = document) {
    const slides = root.querySelectorAll('[data-service-slide]');
    const previousButton = root.querySelector('.services-arrow-prev');
    const nextButton = root.querySelector('.services-arrow-next');

    if (!slides.length || !previousButton || !nextButton) {
        return;
    }

    let activeIndex = 0;

    function showSlide(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.hidden = slideIndex !== activeIndex;
        });
    }

    previousButton.addEventListener('click', () => {
        showSlide(activeIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(activeIndex + 1);
    });
}
