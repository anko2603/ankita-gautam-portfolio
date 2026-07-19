// Project Data Object
const projectDetails = {
    halfpe: {
        title: "halfpe.com",
        category: "Shopify Custom Theme & Apps Integration",
        description: "A high-traffic e-commerce discount platform. Customized to handle massive catalog selections and flash discount allocations seamlessly, focusing on a clean, conversions-first user interface.",
        bullets: [
            "Developed bespoke theme layouts modifying the premium Prestige theme structure.",
            "Integrated EComposer Page Builder to structure optimized product pages, increasing customer cart additions.",
            "Integrated and configured the Webkul Multi-Vendor Marketplace backend for seller management.",
            "Customized the UpPromote Affiliate marketing platform to manage promotional tracking pixels.",
            "Modified Shopify Liquid cart template codes to integrate custom slide-out carts, checkout countdowns, and automated upsell scripts."
        ],
        tags: ["Shopify", "Prestige Theme", "Liquid Templates", "EComposer Builder", "Webkul", "JavaScript"]
    },
    weareadverta: {
        title: "weareadverta.com",
        category: "WordPress Core & Layout customization",
        description: "The official agency portal for Adverta Growth Agency. Engineered to showcase corporate marketing case studies, interactive contact screens, and high-performance agency profiles.",
        bullets: [
            "Built responsive site templates using the Astra theme base and custom page modules.",
            "Customized extensive Elementor Page Builder sections, overriding native columns with clean CSS grids.",
            "Authored and debugged custom CSS code for glassmorphism panels, glow transitions, and responsive headings.",
            "Maintained zero-defect code deployment, ensuring pixel-perfect visuals across major desktop browsers and mobile screen breakpoints."
        ],
        tags: ["WordPress", "Astra", "Elementor", "Vanilla CSS", "Responsive Design", "PHP"]
    },
    sandwalk: {
        title: "sandwalkfootwear.com",
        category: "Shopify Store Setup & Custom Styling",
        description: "A complete Shopify store deployment for a premium leather footwear manufacturer, designed to present their legacy and showcase footwear comfort.",
        bullets: [
            "Designed and styled landing blocks emphasizing the brand's 40-year legacy of handcrafted Indian leather slippers.",
            "Configured local payment gateway APIs, secure checkouts, and discount rules.",
            "Customized variant displays to handle sizes, colors, and styling categories effortlessly.",
            "Improved cart abandonment metrics by implementing simplified checkout screen layouts."
        ],
        tags: ["Shopify", "Theme Setup", "Liquid", "Payment Gateways", "Footwear Niche"]
    },
    stepsoft: {
        title: "stepsoft.in",
        category: "Shopify Liquid Customization",
        description: "An ethnic footwear online store selling mojaris, juttis, and Kolhapuris. The platform requires high visual fidelity and robust filtering parameters.",
        bullets: [
            "Built custom Liquid collection templates to incorporate complex multi-attribute filtering scripts (size, leather finish, color).",
            "Coded dynamic variant swatch lists on product landing zones, cutting search-to-buy paths.",
            "Automated backend stock database sync routines to align with daily physical warehouse tallies."
        ],
        tags: ["Shopify", "Liquid", "Advanced Filters", "Variant Swatches", "Performance Optimization"]
    },
    roxxindia: {
        title: "roxxindia.com",
        category: "Shopify Dawn Theme Customization",
        description: "A mobile phone covers and accessories online retailer prioritizing speed, volume checkouts, and mobile usability.",
        bullets: [
            "Extensively customized the default Shopify Dawn theme to display accessory grid filters.",
            "Authored custom JavaScript code to handle bundle checkouts and automated buy-one-get-one discount rules in-cart.",
            "Integrated customized cash-on-delivery (COD) form overlays, reducing purchase friction and cutting cart abandonment rates by 40%."
        ],
        tags: ["Shopify", "Dawn Theme", "JavaScript Core", "COD Form logic", "Cart API"]
    },
    "django-ecommerce": {
        title: "Full-Stack Django E-Commerce Portal",
        category: "Python, Django & PostgreSQL development",
        description: "A fully custom web application implementing cataloging systems, order tracking, and administrative controls designed to showcase backend scripting.",
        bullets: [
            "Engineered scalable backend RESTful API endpoints utilizing Python, Django, and Django REST framework.",
            "Configured PostgreSQL database schemas and optimized slow ORM database select methods.",
            "Integrated Stripe payment gateway APIs, complete with webhook handlers for order fulfillment validation.",
            "Programmed administrative control screens for product additions, image uploads, and customer transaction logs."
        ],
        tags: ["Python", "Django", "PostgreSQL", "Stripe API", "REST framework", "Bootstrap"]
    }
};

// Document Load Event
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dark/Light Theme Toggle
    const themeBtn = document.getElementById("theme-btn");
    const bodyEl = document.body;
    
    // Check local storage for theme setting
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        bodyEl.className = savedTheme;
    }
    
    themeBtn.addEventListener("click", () => {
        if (bodyEl.classList.contains("dark-theme")) {
            bodyEl.classList.remove("dark-theme");
            bodyEl.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        } else {
            bodyEl.classList.remove("light-theme");
            bodyEl.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("open");
        mobileNavMenu.classList.toggle("open");
    });
    
    // Close mobile menu when links are clicked
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("open");
            mobileNavMenu.classList.remove("open");
        });
    });

    // 3. Typing Text Effect
    const typingSub = document.getElementById("typing-sub");
    const roles = ["Shopify Developer", "WordPress Developer", "Frontend Engineer", "E-Commerce Builder"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;
    
    function typeEffect() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            typingSub.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typeDelay = 50;
        } else {
            typingSub.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typeDelay = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            isDeleting = true;
            typeDelay = 1500; // Pause at end of role
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeDelay = 400; // Pause before typing next
        }
        
        setTimeout(typeEffect, typeDelay);
    }
    
    if (typingSub) {
        typeEffect();
    }

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Active Navbar Links on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // 6. Projects Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active from all buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // 7. Modals Logic (Popups)
    const projectModal = document.getElementById("project-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modalContent = document.getElementById("modal-content-area");
    
    function openModal(projectId) {
        const details = projectDetails[projectId];
        if (!details) return;
        
        // Generate list markup
        const bulletListMarkup = details.bullets.map(b => `<li>${b}</li>`).join("");
        
        // Generate tags markup
        const tagsMarkup = details.tags.map(t => `<span class="modal-tag-item">${t}</span>`).join("");
        
        modalContent.innerHTML = `
            <span class="project-tag">${projectId === 'django-ecommerce' ? 'Django & Python' : (details.tags.includes('WordPress') ? 'WordPress' : 'Shopify')}</span>
            <h3 class="modal-title">${details.title}</h3>
            <div class="modal-sub">${details.category}</div>
            
            <div class="modal-image-mock">
                👨‍💻 Development Showcase Overview Code
            </div>
            
            <p class="modal-desc">${details.description}</p>
            
            <div class="modal-list-title">Key Work Done:</div>
            <ul class="modal-bullets">
                ${bulletListMarkup}
            </ul>
            
            <div class="modal-list-title">Technologies Used:</div>
            <div class="modal-tags">
                ${tagsMarkup}
            </div>
            
            <div class="modal-footer">
                <a href="#contact" class="secondary-btn" onclick="document.getElementById('project-modal').classList.remove('open')">Hire Me for this Stack</a>
            </div>
        `;
        
        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Disable background scrolling
    }
    
    function closeModal() {
        projectModal.classList.remove("open");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    }
    
    // Attach click handlers to project cards
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project");
            openModal(projectId);
        });
    });
    
    closeModalBtn.addEventListener("click", closeModal);
    
    // Close modal on background click
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && projectModal.classList.contains("open")) {
            closeModal();
        }
    });

    // 8. Contact Form Handling (Validated Interactive Showcase)
    const contactForm = document.getElementById("contact-form");
    const feedbackMsg = document.getElementById("feedback-msg");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById("send-msg-btn");
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
            
            // Mock server response delay
            setTimeout(() => {
                const name = document.getElementById("name").value;
                
                feedbackMsg.className = "form-feedback success";
                feedbackMsg.innerHTML = `<strong>Success!</strong> Thank you, ${name}. Your message has been sent successfully (Local Mode Mockup).`;
                feedbackMsg.classList.remove("hidden");
                
                // Clear input form
                contactForm.reset();
                submitBtn.textContent = "Send Message";
                submitBtn.disabled = false;
                
                // Auto hide feedback after 5 seconds
                setTimeout(() => {
                    feedbackMsg.classList.add("hidden");
                }, 5000);
                
            }, 1200);
        });
    }
});
