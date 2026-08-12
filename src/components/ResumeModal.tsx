"use client";

import { useEffect } from "react";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div 
            className="modal-overlay open print-modal-overlay" 
            onClick={(e) => e.target === e.currentTarget && onClose()}
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-container print-modal-container" style={{ maxWidth: "800px" }}>
                <button 
                    className="modal-close-btn no-print" 
                    onClick={onClose} 
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="modal-body print-area" style={{ padding: "40px" }}>
                    {/* Resume Header */}
                    <div style={{ borderBottom: "2px solid var(--accent-color)", paddingBottom: "16px", marginBottom: "24px" }}>
                        <h1 style={{ fontSize: "28px", color: "var(--text-primary)", marginBottom: "4px" }}>Ankita Gautam</h1>
                        <h2 style={{ fontSize: "16px", color: "var(--accent-color)", fontWeight: "600", marginBottom: "8px" }}>
                            Shopify &amp; WordPress Developer
                        </h2>
                        <div style={{ fontSize: "13.5px", color: "var(--text-secondary)", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                            <span>📍 Kanpur, Uttar Pradesh, India</span>
                            <span>✉️ gautamankita2683@gmail.com</span>
                            <span>🔗 github.com/anko2603</span>
                            <span>🔗 linkedin.com/in/ankitagautam0</span>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "15px", color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                            Professional Summary
                        </h3>
                        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                            Shopify Developer with 1.5+ years of experience building and customizing e-commerce storefronts for 30+ clients using Shopify Liquid, HTML5, CSS3, JavaScript, React, and Node.js. Skilled in theme development, third-party app integration, payment gateway setup, and performance optimization. Resolved a critical plugin conflict that had taken a client&apos;s Shopify store fully offline, restoring full functionality, and engineered cost-effective custom solutions (e.g., a free Google Drive + Apps Script workflow) in place of paid subscription apps. Also works with WordPress/WooCommerce, backed by a supporting backend foundation in Python and Django.
                        </p>
                    </div>

                    {/* Areas of Expertise */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "15px", color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                            Areas of Expertise
                        </h3>
                        <p style={{ fontSize: "13.5px", color: "var(--text-primary)", lineHeight: "1.7", backgroundColor: "var(--border-color)", padding: "10px 14px", borderRadius: "6px" }}>
                            Shopify Theme Development (Liquid) • React • Node.js • JavaScript • HTML5/CSS3 • Payment Gateway Integration • Performance Optimization • SEO &amp; CRO • WordPress/WooCommerce • Python &amp; Django (secondary) • Git/GitHub
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "15px", color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                            Technical Skills
                        </h3>
                        <ul style={{ listStyle: "none", fontSize: "13.5px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "6px" }}>
                            <li><strong style={{ color: "var(--text-primary)" }}>E-Commerce Platforms:</strong> Shopify, Shopify Liquid, WordPress, WooCommerce</li>
                            <li><strong style={{ color: "var(--text-primary)" }}>Frontend Development:</strong> React, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Responsive Design, Theme Customization</li>
                            <li><strong style={{ color: "var(--text-primary)" }}>Runtime / Backend:</strong> Node.js (Shopify Apps), Python, Django (basic/supporting), PostgreSQL, SQLite</li>
                            <li><strong style={{ color: "var(--text-primary)" }}>E-Commerce Expertise:</strong> Product &amp; Inventory Management, Payment Gateway Integration, CRO, SEO</li>
                            <li><strong style={{ color: "var(--text-primary)" }}>Marketing Integration:</strong> Google Analytics 4, Facebook Pixel, Klaviyo, Mailchimp</li>
                            <li><strong style={{ color: "var(--text-primary)" }}>Tools &amp; Methodologies:</strong> Git, GitHub, VS Code, Apps Script, Payment Gateways</li>
                        </ul>
                    </div>

                    {/* Work Experience */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "15px", color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                            Professional Experience
                        </h3>

                        {/* Position 1 */}
                        <div style={{ marginBottom: "16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                                <strong style={{ fontSize: "14.5px", color: "var(--text-primary)" }}>Shopify &amp; WordPress Developer — <span style={{ color: "var(--accent-color)" }}>Adverta Pvt. Ltd.</span></strong>
                                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Dec 2025 – Present | Kanpur, UP</span>
                            </div>
                            <ul style={{ paddingLeft: "18px", fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                                <li>Customized and maintained Shopify and WordPress storefronts for 20+ e-commerce clients, focusing on theme development and on-page SEO.</li>
                                <li>Built and adjusted Shopify Liquid themes using HTML5, CSS3, and JavaScript to improve usability and conversion paths.</li>
                                <li>Fixed a recurring photo-upload bug for a phone-case client by building a free Google Drive + Apps Script integration in place of a paid app, delivering auto-organized image links at zero added cost.</li>
                                <li>Developed custom-coded storefront features (wishlist, upsell/cross-sell) in place of paid third-party apps, cutting subscription costs.</li>
                                <li>Integrated marketing tools (Google Analytics, Facebook Pixel, Klaviyo, Mailchimp) and implemented secure, PCI-compliant payment gateways.</li>
                            </ul>
                        </div>

                        {/* Position 2 */}
                        <div style={{ marginBottom: "16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                                <strong style={{ fontSize: "14.5px", color: "var(--text-primary)" }}>Shopify &amp; WordPress Developer — <span style={{ color: "var(--accent-color)" }}>4 Fox Business Solution Pvt. Ltd.</span></strong>
                                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Feb 2025 – Nov 2025 | Kanpur, UP</span>
                            </div>
                            <ul style={{ paddingLeft: "18px", fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                                <li>Customized and deployed responsive Shopify and WordPress themes for 10+ U.S.-based DTC and SaaS e-commerce clients.</li>
                                <li>Diagnosed and resolved a critical Veda plugin conflict that had taken a client&apos;s Shopify store fully offline, restoring full functionality.</li>
                                <li>Built responsive layouts with strong cross-browser compatibility using HTML5, CSS3, and JavaScript.</li>
                                <li>Integrated third-party apps (Gorgias, Loox, Yotpo, Aftership) with a focus on clean QA handoff.</li>
                                <li>Built reusable CSS component libraries that reduced repetitive development work across client projects.</li>
                            </ul>
                        </div>

                        {/* Position 3 */}
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                                <strong style={{ fontSize: "14.5px", color: "var(--text-primary)" }}>Python Developer Intern — <span style={{ color: "var(--accent-color)" }}>Info2Tech Private Limited</span></strong>
                                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Apr 2024 – Jun 2024 | Kanpur, UP</span>
                            </div>
                            <ul style={{ paddingLeft: "18px", fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                                <li>Built scalable backend RESTful API endpoints utilizing Python, Django, and PostgreSQL with microservices architecture.</li>
                                <li>Optimized database performance, reducing query execution times by 35% using Django ORM optimization and Redis caching implementations.</li>
                                <li>Applied advanced data structures and algorithms to resolve complex computational tasks, achieving 2x performance speedups.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "15px", color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                            Education
                        </h3>
                        <div style={{ fontSize: "13.5px", color: "var(--text-secondary)" }}>
                            <p style={{ marginBottom: "4px" }}>
                                <strong style={{ color: "var(--text-primary)" }}>Master of Computer Applications (MCA)</strong> — Dr. A.P.J. Abdul Kalam Technical University (2025)
                            </p>
                            <p>
                                <strong style={{ color: "var(--text-primary)" }}>Bachelor of Science in Information Technology (B.Sc. IT)</strong> — Chhatrapati Shahu Ji Maharaj University (2022)
                            </p>
                        </div>
                    </div>

                    {/* Modal Footer / Print Actions */}
                    <div className="modal-footer no-print" style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "24px" }}>
                        <button 
                            className="primary-btn" 
                            onClick={handlePrint}
                            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                        >
                            📄 Save PDF / Print Resume
                        </button>
                        <button 
                            className="secondary-btn" 
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
