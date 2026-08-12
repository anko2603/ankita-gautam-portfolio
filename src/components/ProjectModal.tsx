"use client";

import { useEffect } from "react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Disable background scrolling when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [project]);

    // Handle ESC key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!project) return null;

    const getPrimaryTag = () => {
        if (project.id === "django-ecommerce") return "Django & Python";
        if (project.tags.includes("WordPress")) return "WordPress";
        return "Shopify";
    };

    return (
        <div 
            className="modal-overlay open" 
            onClick={(e) => e.target === e.currentTarget && onClose()}
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-container">
                <button 
                    className="modal-close-btn" 
                    onClick={onClose} 
                    aria-label="Close details"
                >
                    &times;
                </button>
                <div className="modal-body">
                    <span className="project-tag">{getPrimaryTag()}</span>
                    {project.liveUrl ? (
                        <h3 className="modal-title">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                                {project.title} <span style={{ fontSize: "16px", color: "var(--accent-color)" }}>↗</span>
                            </a>
                        </h3>
                    ) : (
                        <h3 className="modal-title">{project.title}</h3>
                    )}
                    <div className="modal-sub">{project.category}</div>
                    
                    <div className="modal-image-mock">
                        👨‍💻 Development Showcase Overview Code
                    </div>
                    
                    <p className="modal-desc">{project.description}</p>
                    
                    <div className="modal-list-title">Key Work Done:</div>
                    <ul className="modal-bullets">
                        {project.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                    
                    <div className="modal-list-title">Technologies Used:</div>
                    <div className="modal-tags">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="modal-tag-item">{tag}</span>
                        ))}
                    </div>
                    
                    <div className="modal-footer" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="primary-btn"
                                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                            >
                                Visit Live Site ↗
                            </a>
                        )}
                        <a 
                            href="#contact" 
                            className="secondary-btn" 
                            onClick={onClose}
                        >
                            Hire Me for this Stack
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
