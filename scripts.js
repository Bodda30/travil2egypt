// Constants and DOM Elements
const languageToggle = document.getElementById('language-toggle');
const body = document.body;
const headerTitle = document.getElementById('header-title');
const navLinks = document.querySelectorAll('.nav-link');
const servicesSection = document.getElementById('services');
const footerText = document.querySelector('footer p');

const serviceContent = {
    title: ['Our Services', '우리의 서비스'],
    services: [
        {
            name: ['Airport Transfer', '공항 픽업 서비스'],
            price: ['4 US$', '4 달러'],
            description: ['Airport Transfer Service', '공항 교통 서비스'],
            button: ['Book Now', '예약하기']
        },
        {
            name: ['Cairo City Tour', '카이로 시티 투어'],
            price: ['10 US$', '10 달러'],
            description: ['Cairo City Tour', '카이로 시내 관광'],
            button: ['Book Now', '예약하기']
        },
        {
            name: ['Custom Day Trip', '맞춤형 당일 여행'],
            price: ['18 US$', '18 달러'],
            description: ['Custom Day Trip', '맞춤형 당일 여행 서비스'],
            button: ['View Course', '코스 보기']
        },
        {
            name: ['City Tour', '시티 투어'],
            price: ['30 US$', '30 달러'],
            description: ['City Tour Service', '도시 관광 서비스'],
            button: ['Book Now', '예약하기']
        }
    ]
};

// Language Toggle Logic
languageToggle.addEventListener('click', function() {
    body.classList.toggle('show-korean');
    const isKorean = body.classList.contains('show-korean');

    // Toggle visibility for all sections with fade effect
    document.querySelectorAll('.english, .korean').forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.display = section.classList.contains(isKorean ? 'korean' : 'english') ? 'block' : 'none';
            section.style.opacity = '1';
        }, 300);
    });

    // Update header title
    headerTitle.textContent = isKorean ? '이집트 여행' : 'Discover Egypt';

    // Update navigation links
    navLinks[0].textContent = isKorean ? '우리에 대해' : 'About';
    navLinks[1].textContent = isKorean ? '갤러리' : 'Gallery';
    navLinks[2].textContent = isKorean ? '여행 계획' : 'Plan Your Trip';
    navLinks[3].textContent = isKorean ? '문의하기' : 'Contact';

    // Update services section
    const servicesTitle = servicesSection.querySelector('h2');
    servicesTitle.textContent = isKorean ? serviceContent.title[1] : serviceContent.title[0];

    const serviceItems = servicesSection.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        const serviceName = item.querySelector('.service-name');
        const servicePrice = item.querySelector('.service-price');
        const serviceDesc = item.querySelector('.service-description');
        const serviceButton = item.querySelector('.service-button');

        serviceName.textContent = isKorean ? 
            serviceContent.services[index].name[1] : 
            serviceContent.services[index].name[0];
            
        servicePrice.textContent = isKorean ? 
            serviceContent.services[index].price[1] : 
            serviceContent.services[index].price[0];
            
        if (serviceDesc) {
            serviceDesc.textContent = isKorean ? 
                serviceContent.services[index].description[1] : 
                serviceContent.services[index].description[0];
        }

        serviceButton.textContent = isKorean ? 
            serviceContent.services[index].button[1] : 
            serviceContent.services[index].button[0];
    });

    // Update footer text
    footerText.textContent = isKorean ? '© 2024 Discover Egypt. 모든 권리 보유.' : '© 2024 Discover Egypt. All rights reserved.';

    // Update language toggle button
    languageToggle.textContent = isKorean ? 'Change to English' : 'Change to Korean';
});

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Scroll to Contact Section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    window.scrollTo({
        top: contactSection.offsetTop - 60, // Offset for header
        behavior: 'smooth'
    });
}

// Add event listeners to "Book Now" buttons
const bookNowButtons = document.querySelectorAll('.service-button');
bookNowButtons.forEach(button => {
    button.addEventListener('click', scrollToContact);
});

// Add transition styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .english, .korean {
            transition: opacity 0.3s ease;
        }
        .service-item {
            transition: transform 0.3s ease;
        }
        .service-item:hover {
            transform: translateY(-5px);
        }
    </style>
`);

// Simple Image Viewer Implementation
const viewer = {
    container: document.getElementById('fullscreenViewer'),
    image: document.querySelector('#fullscreenViewer img'),
    closeBtn: document.querySelector('#fullscreenViewer .close-button'),

    show(imgSrc) {
        this.image.src = imgSrc;
        document.body.style.overflow = 'hidden';
        this.container.classList.add('active');
    },

    hide() {
        this.container.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => this.image.src = '', 300);
    },

    init() {
        // Close on button click
        this.closeBtn.onclick = () => this.hide();

        // Close on background click
        this.container.onclick = (e) => {
            if (e.target === this.container) this.hide();
        };

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.container.classList.contains('active')) {
                this.hide();
            }
        });

        // Setup image clicks
        document.querySelectorAll('.gallery img, .carousel img').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.show(img.src);
            };
        });
    }
};

// Initialize immediately
viewer.init();

// Update form labels and placeholders
document.addEventListener('DOMContentLoaded', () => {
    const isKorean = body.classList.contains('show-korean');
    const forms = {
        tripFormEnglish: document.getElementById('tripFormEnglish'),
        tripFormKorean: document.getElementById('tripFormKorean')
    };

    // Update form labels and placeholders
    Object.values(forms).forEach(form => {
        if (form) {
            form.querySelectorAll('label, input[placeholder], textarea[placeholder]').forEach(element => {
                const key = element.dataset.translate;
                if (key && translations.forms[key]) {
                    if (element.tagName === 'LABEL') {
                        element.textContent = translations.forms[key][isKorean ? 1 : 0];
                    } else {
                        element.placeholder = translations.forms[key][isKorean ? 1 : 0];
                    }
                }
            });
        }
    });
});

// Update alert messages
function showAlert(type, message) {
    alert(translations.alerts[type][body.classList.contains('show-korean') ? 1 : 0] + ' ' + message);
}
