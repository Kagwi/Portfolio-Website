// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".skill-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: [
            "Project Manager",
            "I.T Professional",
            "Digital Marketer",
            "Data Scientist",
            "Writer"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
    };

    const typed = new Typed('.typed-text', options);
});

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio items data
const portfolioItems = [
    {
        title: "Data Analysis Dashboard",
        description: "Interactive dashboard for visualizing complex datasets using Python and Streamlit",
        category: "data-science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "E-commerce SEO Campaign",
        description: "Comprehensive SEO strategy that increased organic traffic by 200%",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Cloud Infrastructure Migration",
        description: "Successfully migrated enterprise systems to cloud architecture",
        category: "it",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Healthcare Analytics Platform",
        description: "Machine learning model for predicting patient outcomes",
        category: "data-science",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Social Media Campaign",
        description: "Viral marketing campaign that reached 1M+ audience",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Network Security Implementation",
        description: "Enhanced security infrastructure for financial institution",
        category: "it",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#"
    }
];

// Function to render portfolio items
function renderPortfolioItems(category = 'all') {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filteredItems = category === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category);

    portfolioGrid.innerHTML = filteredItems.map(item => `
        <div class="portfolio-item" data-aos="fade-up">
            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn" target="_blank">View Project</a>
            </div>
        </div>
    `).join('');
}

// Portfolio filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderPortfolioItems(btn.dataset.filter);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
const modal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close');

contactForm.addEventListener('submit', function(e) {
    // Form will be handled by mailto: protocol
    setTimeout(() => {
        modal.style.display = 'flex';
        contactForm.reset();
    }, 1000);
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Animate skill progress bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.progress;
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize portfolio items on load
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioItems();
});