export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    bullets: string[];
    tags: string[];
    vercelUrl?: string;
    githubUrl?: string;
}

export const projectDetails: Record<string, Project> = {
    halfpe: {
        id: "halfpe",
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
        id: "weareadverta",
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
        id: "sandwalk",
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
        id: "stepsoft",
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
        id: "roxxindia",
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
        id: "django-ecommerce",
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

export const projectList: Project[] = Object.values(projectDetails);
