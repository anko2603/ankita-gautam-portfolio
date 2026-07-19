"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import { projectList, Project } from "@/data/projects";

export default function Home() {
    // Nav active highlights on scroll
    const [activeSection, setActiveSection] = useState("about");
    
    // Mobile navigation menu toggle
    const [mobileOpen, setMobileOpen] = useState(false);
    
    // Project modal state
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    // Project filter category
    const [filterCategory, setFilterCategory] = useState("all");

    // Form inputs and feedback state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const [formLoading, setFormLoading] = useState(false);
    const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    // Typing Subtitle hook
    const [typingText, setTypingText] = useState("");
    const roles = ["Shopify Developer", "WordPress Developer", "Frontend Engineer", "E-Commerce Builder"];
    const typingIndexRef = useRef({ roleIdx: 0, charIdx: 0, isDeleting: false });

    // Typing Effect loop
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const speed = 100;
        const deleteSpeed = 50;
        const pauseTime = 1500;
        const nextRolePause = 400;

        const handleTyping = () => {
            const currentRole = roles[typingIndexRef.current.roleIdx];
            
            if (typingIndexRef.current.isDeleting) {
                // Delete character
                setTypingText(currentRole.substring(0, typingIndexRef.current.charIdx - 1));
                typingIndexRef.current.charIdx--;
                
                if (typingIndexRef.current.charIdx === 0) {
                    typingIndexRef.current.isDeleting = false;
                    typingIndexRef.current.roleIdx = (typingIndexRef.current.roleIdx + 1) % roles.length;
                    timer = setTimeout(handleTyping, nextRolePause);
                } else {
                    timer = setTimeout(handleTyping, deleteSpeed);
                }
            } else {
                // Add character
                setTypingText(currentRole.substring(0, typingIndexRef.current.charIdx + 1));
                typingIndexRef.current.charIdx++;

                if (typingIndexRef.current.charIdx === currentRole.length) {
                    typingIndexRef.current.isDeleting = true;
                    timer = setTimeout(handleTyping, pauseTime);
                } else {
                    timer = setTimeout(handleTyping, speed);
                }
            }
        };

        timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, []);

    // Scroll reveal observer & Active section tracking
    useEffect(() => {
        const revealElements = document.querySelectorAll(".scroll-reveal");
        const sections = document.querySelectorAll("section");

        // Reveal observer
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Scroll listener for active navbar indicators
        const handleScroll = () => {
            let activeId = "about";
            const scrollPos = window.scrollY + 200;

            sections.forEach(sec => {
                const top = sec.offsetTop;
                const height = sec.clientHeight;
                const id = sec.getAttribute("id");
                if (id && scrollPos >= top && scrollPos < top + height) {
                    activeId = id;
                }
            });

            // Adjust fallback if scrolled all the way to bottom
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                activeId = "contact";
            }

            setActiveSection(activeId);
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once initially
        handleScroll();

        return () => {
            revealObserver.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Filter projects
    const filteredProjects = projectList.filter(project => {
        if (filterCategory === "all") return true;
        if (filterCategory === "shopify") return project.tags.includes("Shopify");
        if (filterCategory === "wordpress") return project.tags.includes("WordPress");
        if (filterCategory === "fullstack") return project.tags.includes("Python") || project.tags.includes("Django");
        return true;
    });

    // Handle contact form submission
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormLoading(true);
        setFeedbackType(null);

        // Simulation delay
        setTimeout(() => {
            setFormLoading(false);
            setFeedbackType("success");
            setFeedbackMessage(`Thank you, ${name}. Your message has been sent successfully! I'll get back to you shortly.`);
            
            // Clear input fields
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            // Clear feedback after 6 seconds
            setTimeout(() => {
                setFeedbackType(null);
            }, 6000);
        }, 1500);
    };

    return (
        <>
            {/* Header / Navbar */}
            <header className="navbar" id="main-header">
                <div className="nav-container">
                    <a href="#" className="logo" id="logo-brand">
                        <span className="logo-accent">&lt;</span>Ankita<span className="logo-accent">/&gt;</span>
                    </a>
                    <nav className="nav-menu" id="nav-links">
                        <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}>About</a>
                        <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`}>Skills</a>
                        <a href="#projects" className={`nav-link ${activeSection === "projects" ? "active" : ""}`}>Projects</a>
                        <a href="#experience" className={`nav-link ${activeSection === "experience" ? "active" : ""}`}>Experience</a>
                        <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active" : ""}`}>Contact</a>
                    </nav>
                    <div className="nav-actions">
                        <ThemeToggle />
                        <a href="#contact" className="resume-btn" id="resume-download-btn">Hire Me</a>
                        <button 
                            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`} 
                            id="mobile-toggle" 
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} id="mobile-nav-menu">
                <a href="#about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</a>
                <a href="#skills" className="mobile-link" onClick={() => setMobileOpen(false)}>Skills</a>
                <a href="#projects" className="mobile-link" onClick={() => setMobileOpen(false)}>Projects</a>
                <a href="#experience" className="mobile-link" onClick={() => setMobileOpen(false)}>Experience</a>
                <a href="#contact" className="mobile-link" onClick={() => setMobileOpen(false)}>Contact</a>
                <a href="#contact" className="mobile-resume-btn" onClick={() => setMobileOpen(false)}>Hire Me</a>
            </div>

            {/* Hero Section */}
            <section className="hero-section" id="hero">
                <div className="grid-background"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="welcome-tag">Welcome to my Portfolio</span>
                        <h1 className="hero-title">
                            Hi, I&apos;m <span className="highlight-text">Ankita Gautam</span>
                        </h1>
                        <h2 className="hero-subtitle">
                            I am a <span className="typing-text" id="typing-sub">{typingText}</span><span className="cursor">|</span>
                        </h2>
                        <p className="hero-description">
                            E-Commerce Developer & Backend Engineer based in India. I specialize in building custom Shopify stores, styling high-performance WordPress sites, and crafting interactive e-commerce shopping workflows that scale.
                        </p>
                        <div className="hero-ctas">
                            <a href="#projects" className="primary-btn">View My Work</a>
                            <a href="#contact" className="secondary-btn">Let&apos;s Connect</a>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/gautamankita2683" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://linkedin.com/in/gautamankita2683" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://leetcode.com/u/gautamankita2683" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lc-svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.942l4 4a1.375 1.375 0 0 0 1.94 0l9.77-9.77a1.375 1.375 0 0 0 0-1.942l-4-4A1.374 1.374 0 0 0 13.483 0zM4.057 11.232l9.043-9.043 3.086 3.086-9.042 9.042-3.087-3.085zm12.016 1.488a5.534 5.534 0 0 1-5.53 5.53 5.534 5.534 0 0 1-5.53-5.53c0-1.285.45-2.47 1.202-3.418L4.85 7.936A7.472 7.472 0 0 0 2.543 12.72c0 4.148 3.36 7.51 7.509 7.51 4.148 0 7.51-3.362 7.51-7.51a7.461 7.461 0 0 0-2.308-4.783l-1.365 1.365a5.533 5.533 0 0 1 1.204 3.418zm2.646-6.177L17.354 7.91A9.452 9.452 0 0 1 20.05 12.72c0 5.253-4.257 9.51-9.51 9.51-5.253 0-9.51-4.257-9.51-9.51A9.452 9.452 0 0 1 3.73 7.91L2.365 6.543A11.439 11.439 0 0 0 .543 12.72c0 6.353 5.158 11.51 11.509 11.51 6.352 0 11.51-5.157 11.51-11.51a11.439 11.439 0 0 0-1.822-6.177z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-globe"></div>
                        <div className="visual-card">
                            <div className="visual-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="tab-title">ankita.liquid</span>
                            </div>
                            <div className="visual-body">
                                <pre><code><span className="code-keyword">assign</span> shopify_dev = <span className="code-string">&quot;Ankita&quot;</span>
<span className="code-keyword">if</span> store.needs_customization
  <span className="code-keyword">include</span> <span className="code-string">&apos;custom-layout&apos;</span>
  <span className="code-keyword">assign</span> conversion_rate = conversion_rate | <span className="code-keyword">plus</span>: <span className="code-number">40</span>
<span className="code-keyword">endif</span>
<span className="code-keyword">render</span> <span className="code-string">&apos;checkout-success&apos;</span></code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="container scroll-reveal">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-grid">
                        <div className="about-info">
                            <h3>Building High-Converting Storefronts</h3>
                            <p>
                                I am a Shopify and WordPress developer with extensive expertise in platform customization, custom theme development, and digital storefront optimization.
                            </p>
                            <p>
                                Whether it is creating custom cart modules for Shopify discount platforms, designing pixel-perfect pages using WordPress frameworks, or designing full-stack e-commerce systems from scratch, I bridge the gap between design templates and high-converting code.
                            </p>
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <span className="hl-number">40%+</span>
                                    <span className="hl-label">CRO Improvements</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="hl-number">1.2s</span>
                                    <span className="hl-label">Avg Store Load Time</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="hl-number">15+</span>
                                    <span className="hl-label">Successful Stores Live</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-details">
                            <div className="detail-card">
                                <h4>Education</h4>
                                <ul className="detail-list">
                                    <li>
                                        <strong>Master of Computer Applications (MCA)</strong>
                                        <span className="detail-sub">Dr. A.P.J. Abdul Kalam Technical University (2025)</span>
                                    </li>
                                    <li>
                                        <strong>Bachelor of Science in Information Technology (B.Sc. IT)</strong>
                                        <span className="detail-sub">Chhatrapati Shahu Ji Maharaj University (2022)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="detail-card">
                                <h4>Problem Solving</h4>
                                <p>
                                    Active on LeetCode with <strong>180+ solved algorithmic problems</strong> across data structures, graph theory, and dynamic programming. I apply logic-driven practices to e-commerce integrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section" id="skills">
                <div className="container scroll-reveal">
                    <h2 className="section-title">Technical Expertise</h2>
                    <div className="skills-grid">
                        {/* Skill Card 1 */}
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            </div>
                            <h3>Shopify Development</h3>
                            <ul className="skill-tags">
                                <li>Liquid Templates</li>
                                <li>Prestige / Dawn Customization</li>
                                <li>Cart &amp; Checkout Layouts</li>
                                <li>Shopify APIs</li>
                                <li>App Integrations (Webkul, Loox)</li>
                            </ul>
                        </div>
                        {/* Skill Card 2 */}
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            </div>
                            <h3>WordPress Core</h3>
                            <ul className="skill-tags">
                                <li>Astra &amp; Custom Themes</li>
                                <li>Elementor Customization</li>
                                <li>WooCommerce Architecture</li>
                                <li>PHP Development</li>
                                <li>Plugin Configuration</li>
                            </ul>
                        </div>
                        {/* Skill Card 3 */}
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <h3>Frontend Engineering</h3>
                            <ul className="skill-tags">
                                <li>HTML5 &amp; semantic structure</li>
                                <li>CSS3 &amp; responsive animation</li>
                                <li>Flexbox / Grid layouts</li>
                                <li>JavaScript (ES6+)</li>
                                <li>Cross-Browser QA testing</li>
                            </ul>
                        </div>
                        {/* Skill Card 4 */}
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"></path></svg>
                            </div>
                            <h3>Backend &amp; Databases</h3>
                            <ul className="skill-tags">
                                <li>Python &amp; Django</li>
                                <li>REST API design</li>
                                <li>PostgreSQL &amp; SQL</li>
                                <li>ORM Optimizations</li>
                                <li>Redis Caching</li>
                            </ul>
                        </div>
                        {/* Skill Card 5 */}
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                            </div>
                            <h3>Marketing Tech</h3>
                            <ul className="skill-tags">
                                <li>Klaviyo / Mailchimp</li>
                                <li>Facebook Pixel</li>
                                <li>Google Analytics 4</li>
                                <li>UpPromote Affiliate</li>
                                <li>CRO Automations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <div className="container scroll-reveal">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc">Click on any project to view key highlights and implementation details.</p>
                    
                    {/* Filters */}
                    <div className="project-filters">
                        <button 
                            className={`filter-btn ${filterCategory === "all" ? "active" : ""}`} 
                            onClick={() => setFilterCategory("all")}
                        >
                            All Projects
                        </button>
                        <button 
                            className={`filter-btn ${filterCategory === "shopify" ? "active" : ""}`} 
                            onClick={() => setFilterCategory("shopify")}
                        >
                            Shopify
                        </button>
                        <button 
                            className={`filter-btn ${filterCategory === "wordpress" ? "active" : ""}`} 
                            onClick={() => setFilterCategory("wordpress")}
                        >
                            WordPress
                        </button>
                        <button 
                            className={`filter-btn ${filterCategory === "fullstack" ? "active" : ""}`} 
                            onClick={() => setFilterCategory("fullstack")}
                        >
                            Full-Stack
                        </button>
                    </div>

                    {/* Project Grid */}
                    <div className="project-grid" id="project-container">
                        {filteredProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className="project-card" 
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="project-card-header">
                                    <span className="project-tag">
                                        {project.id === "django-ecommerce" ? "Django" : (project.tags.includes("WordPress") ? "WordPress" : "Shopify")}
                                    </span>
                                    <h3 className="project-card-title">{project.title}</h3>
                                </div>
                                <p className="project-card-excerpt">{project.description}</p>
                                <span className="view-detail-link">View Implementation &rarr;</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="experience-section" id="experience">
                <div className="container scroll-reveal">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="timeline">
                        {/* Timeline Item 1 */}
                        <div className="timeline-item">
                            <div className="timeline-badge"></div>
                            <div className="timeline-panel">
                                <div className="timeline-header">
                                    <span className="timeline-company">Adverta Pvt. Ltd.</span>
                                    <span className="timeline-date">Dec 2025 – Present</span>
                                </div>
                                <h3 className="timeline-title">Shopify &amp; WordPress Developer</h3>
                                <ul className="timeline-details">
                                    <li>Architected, customized, and maintained the main agency WordPress website using Astra and Elementor, utilizing custom CSS columns for speed and pixel-perfect design accuracy.</li>
                                    <li>Engineered the Prestiges-themed discount Shopify site (halfpe.com), configuring custom checkout rules, variant selections, and multi-vendor integrations.</li>
                                    <li>Optimized clients&apos; storefront speeds, decreasing average page load times from 2.8s to 1.2s, resulting in a 40% conversion rate increase.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="timeline-item">
                            <div className="timeline-badge"></div>
                            <div className="timeline-panel">
                                <div className="timeline-header">
                                    <span className="timeline-company">4 Fox Business Solution Pvt. Ltd.</span>
                                    <span className="timeline-date">Feb 2025 – Nov 2025</span>
                                </div>
                                <h3 className="timeline-title">Shopify &amp; WordPress Developer</h3>
                                <ul className="timeline-details">
                                    <li>Built and deployed sandwalkfootwear.com (premium footwear) and stepsoft.in (ethnic Mojaris/Kolhapuris storefront), structuring filters and swatches.</li>
                                    <li>Modified Dawn theme sections for roxxindia.com, coding dynamic JS scripts for accessory variant bundle selectors and reduced checkout friction.</li>
                                    <li>Integrated secure payment gateways, delivery webhooks (AfterShip), and customer support APIs (Gorgias, Yotpo).</li>
                                </ul>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="timeline-item">
                            <div className="timeline-badge"></div>
                            <div className="timeline-panel">
                                <div className="timeline-header">
                                    <span className="timeline-company">Info2Tech Private Limited</span>
                                    <span className="timeline-date">Apr 2024 – Jun 2024</span>
                                </div>
                                <h3 className="timeline-title">Python Developer Intern</h3>
                                <ul className="timeline-details">
                                    <li>Created robust backend microservices and REST APIs using Python, Django, and PostgreSQL.</li>
                                    <li>Optimized database performance and query loads by 35% through Redis caching configurations and Django ORM improvements.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="container scroll-reveal">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-grid">
                        <div className="contact-info-card">
                            <h3>Contact Information</h3>
                            <p>I am open to new opportunities, freelance contracts, or talking about store optimization. Drop a message!</p>
                            <div className="info-details">
                                <div className="info-link-item">
                                    <span className="icon">📍</span>
                                    <span>Kanpur, Uttar Pradesh, India</span>
                                </div>
                                <div className="info-link-item">
                                    <span className="icon">✉️</span>
                                    <a href="mailto:gautamankita2683@gmail.com">gautamankita2683@gmail.com</a>
                                </div>
                                <div className="info-link-item">
                                    <span className="icon">📞</span>
                                    <a href="tel:+918543834876">+91 8543834876</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-card">
                            <form id="contact-form" onSubmit={handleFormSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            required 
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            required 
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        required 
                                        placeholder="Project Proposal / Shopify Setup"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={5} 
                                        required 
                                        placeholder="Describe your store customization project details here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="submit-btn" 
                                    id="send-msg-btn"
                                    disabled={formLoading}
                                >
                                    {formLoading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                            
                            {feedbackType && (
                                <div className={`form-feedback ${feedbackType}`} id="feedback-msg">
                                    {feedbackMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; {new Date().getFullYear()} Ankita Gautam. All rights reserved.</p>
                    <p>Designed and Built by Ankita Gautam</p>
                </div>
            </footer>

            {/* Modal Dialog */}
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </>
    );
}
