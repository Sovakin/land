// Main JavaScript file for landing

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');

    // Scripts initialization
    initScripts();
});

// Function to initialize all scripts
function initScripts() {
    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Mobile menu
    initMobileMenu();

    // Other initialization functions
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            if (blockID === '#') return;

            const targetElement = document.querySelector(blockID);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Function for mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.block-10__item');

    accordionItems.forEach(item => {
        const question = item.querySelector('.block-10__question');

        question.addEventListener('click', function () {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Optional: Close accordion when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.block-10__item')) {
            accordionItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleOptions = document.querySelectorAll('.block-8__toggle-option');
    const cards = document.querySelectorAll('.block-8__card');

    // Функция для переключения периода
    function switchPeriod(period) {
        // Обновляем активное состояние табов
        toggleOptions.forEach(option => {
            if (option.getAttribute('data-period') === period) {
                option.classList.add('block-8__toggle-option--active');
            } else {
                option.classList.remove('block-8__toggle-option--active');
            }
        });

        // Обновляем данные в карточках
        cards.forEach(card => {
            const plan = card.getAttribute('data-plan');

            const priceAmount = card.querySelector('.block-8__card-price-amount');
            const pricePeriod = card.querySelector('.block-8__card-price-period');
            const creditsSpan = card.querySelector('.yearly-text-header__span');
            const creditsText = card.querySelector('.block-8__card-yearly-text-header');
            const pricePer = card.querySelector('.price-per-credit');

            if (period === 'yearly') {
                // Переключаем на годовой план
                if (plan !== 'free') {
                    priceAmount.textContent = '$' + priceAmount.getAttribute('data-yearly');
                    pricePeriod.textContent = '/month';

                    const yearlyCredits = creditsSpan.getAttribute('data-yearly');
                    creditsSpan.textContent = yearlyCredits;
                    creditsText.innerHTML = `<span class="yearly-text-header__span" data-monthly="${creditsSpan.getAttribute('data-monthly')}" data-yearly="${yearlyCredits}">${yearlyCredits}</span>Credits per month`;

                    if (pricePer) {
                        pricePer.textContent = pricePer.getAttribute('data-yearly');
                    }
                }
            } else {
                // Переключаем на месячный план
                if (plan !== 'free') {
                    priceAmount.textContent = '$' + priceAmount.getAttribute('data-monthly');
                    pricePeriod.textContent = '/month';

                    const monthlyCredits = creditsSpan.getAttribute('data-monthly');
                    creditsSpan.textContent = monthlyCredits;
                    creditsText.innerHTML = `<span class="yearly-text-header__span" data-monthly="${monthlyCredits}" data-yearly="${creditsSpan.getAttribute('data-yearly')}">${monthlyCredits}</span>Credits per month`;

                    if (pricePer) {
                        pricePer.textContent = pricePer.getAttribute('data-monthly');
                    }
                } else {
                    // Для бесплатного плана просто обновляем текст периода
                    creditsText.innerHTML = `<span class="yearly-text-header__span" data-monthly="0" data-yearly="0">0</span>Credits per month`;
                }
            }
        });
    }

    // Обработчики кликов на табы
    toggleOptions.forEach(option => {
        option.addEventListener('click', function () {
            const period = this.getAttribute('data-period');
            switchPeriod(period);
        });
    });

    // Инициализация - устанавливаем месячный план по умолчанию
    switchPeriod('monthly');
});

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const dotsContainer = document.getElementById('galleryDots');

    if (!gallery || !dotsContainer) return;

    const items = gallery.querySelectorAll('.gallery-item');
    const itemCount = items.length;

    // создаём точки
    for (let i = 0; i < itemCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.gallery-dot');

    function updateDots() {
        const galleryRect = gallery.getBoundingClientRect();
        let closestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const galleryCenter = galleryRect.left + galleryRect.width / 2;
            const distance = Math.abs(itemCenter - galleryCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[closestIndex].classList.add('active');
    }

    gallery.addEventListener('scroll', () => {
        requestAnimationFrame(updateDots);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGallerySlider, 100);
});

function initGallerySlider() {
    const gallery = document.getElementById('gallery');
    const dotsContainer = document.getElementById('galleryDots');
    const items = document.querySelectorAll('.gallery-item');

    if (!gallery || !dotsContainer || !items.length) return;

    dotsContainer.innerHTML = '';

    items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'gallery-dot';
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
}

