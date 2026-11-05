
import { describe, it, expect, vi } from 'vitest';
import { renderServices, initServices } from './services.js';

describe('services component', () => {
    describe('renderServices()', () => {
        it('renders the services section', () => {
            const services = renderServices();

            expect(services).toContain('id="services"');
            expect(services).toContain('Our Services');
        });

        it('renders both service images', () => {
            const services = renderServices();

            expect(services).toContain('BLB monthly packages');
            expect(services).toContain('Website packages');
        });

        it('renders exactly two service slides', () => {
            const services = renderServices();

            const slideCount = (
                services.match(/data-service-slide/g) || []
            ).length;

            expect(slideCount).toBe(2);
        });

        it('shows the first image initially', () => {
            const services = renderServices();

            expect(services).toMatch(
                /data-service-slide\s*>/
            );
        });

        it('hides the second image initially', () => {
            const services = renderServices();

            expect(services).toMatch(
                /data-service-slide\s+hidden\s*>/
            );
        });

        it('renders accessible previous and next arrow buttons', () => {
            const services = renderServices();

            expect(services).toContain(
                'aria-label="Show previous service"'
            );

            expect(services).toContain(
                'aria-label="Show next service"'
            );

            expect(services).toContain('services-arrow-prev');
            expect(services).toContain('services-arrow-next');
        });

        it('provides alternative text for both images', () => {
            const services = renderServices();

            expect(services).toContain(
                'alt="BLB monthly packages"'
            );

            expect(services).toContain(
                'alt="Website packages"'
            );
        });
    });

    describe('initServices()', () => {
        function createMockRoot() {
            const slides = [
                { hidden: false },
                { hidden: true }
            ];

            const previousButton = {
                addEventListener: vi.fn()
            };

            const nextButton = {
                addEventListener: vi.fn()
            };

            const root = {
                querySelectorAll: vi.fn(() => slides),

                querySelector: vi.fn((selector) => {
                    if (selector === '.services-arrow-prev') {
                        return previousButton;
                    }

                    if (selector === '.services-arrow-next') {
                        return nextButton;
                    }

                    return null;
                })
            };

            return {
                root,
                slides,
                previousButton,
                nextButton
            };
        }

        function getClickHandler(button) {
            const clickCall = button.addEventListener.mock.calls.find(
                ([event]) => event === 'click'
            );

            return clickCall?.[1];
        }

        it('registers click handlers for both navigation buttons', () => {
            const {
                root,
                previousButton,
                nextButton
            } = createMockRoot();

            initServices(root);

            expect(previousButton.addEventListener).toHaveBeenCalledWith(
                'click',
                expect.any(Function)
            );

            expect(nextButton.addEventListener).toHaveBeenCalledWith(
                'click',
                expect.any(Function)
            );
        });

        it('shows the next image when the next arrow is clicked', () => {
            const {
                root,
                slides,
                nextButton
            } = createMockRoot();

            initServices(root);

            const nextClick = getClickHandler(nextButton);

            nextClick();

            expect(slides[0].hidden).toBe(true);
            expect(slides[1].hidden).toBe(false);
        });

        it('shows the previous image when the previous arrow is clicked', () => {
            const {
                root,
                slides,
                previousButton
            } = createMockRoot();

            initServices(root);

            const previousClick = getClickHandler(previousButton);

            previousClick();

            expect(slides[0].hidden).toBe(true);
            expect(slides[1].hidden).toBe(false);
        });

        it('wraps to the first image after the last image', () => {
            const {
                root,
                slides,
                nextButton
            } = createMockRoot();

            initServices(root);

            const nextClick = getClickHandler(nextButton);

            nextClick();
            nextClick();

            expect(slides[0].hidden).toBe(false);
            expect(slides[1].hidden).toBe(true);
        });

        it('wraps to the last image when going backwards from the first image', () => {
            const {
                root,
                slides,
                previousButton
            } = createMockRoot();

            initServices(root);

            const previousClick = getClickHandler(previousButton);

            previousClick();

            expect(slides[0].hidden).toBe(true);
            expect(slides[1].hidden).toBe(false);
        });

        it('does not throw when there are no service slides', () => {
            const root = {
                querySelectorAll: vi.fn(() => []),
                querySelector: vi.fn(() => ({
                    addEventListener: vi.fn()
                }))
            };

            expect(() => initServices(root)).not.toThrow();
        });

        it('does not throw when navigation buttons are missing', () => {
            const root = {
                querySelectorAll: vi.fn(() => [
                    { hidden: false },
                    { hidden: true }
                ]),
                querySelector: vi.fn(() => null)
            };

            expect(() => initServices(root)).not.toThrow();
        });
    });
});
