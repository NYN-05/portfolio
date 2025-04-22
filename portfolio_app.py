from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="theme-color" content="#0a192f">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="Full Stack Developer Portfolio - Expert in Python, JavaScript, and modern web technologies">
        <meta name="keywords" content="portfolio, web developer, full stack, python, javascript">
        <title>Portfolio | Developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <style>
            :root {
                --primary: #64ffda;
                --secondary: #8892b0;
                --dark: #0a192f;
                --light: #ccd6f6;
                --glass: rgba(100, 255, 218, 0.1);
                --gradient: linear-gradient(120deg, #64ffda 0%, #4d8cff 100%);
                --modal-bg: rgba(10, 25, 47, 0.95);
                --progress-bar: linear-gradient(90deg, var(--primary) 0%, #4d8cff 100%);
                --success: #4CAF50;
                --warning: #FFC107;
                --error: #FF5252;
                --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                --neumorphic-light: rgba(255, 255, 255, 0.05);
                --neumorphic-dark: rgba(0, 0, 0, 0.05);
                --shadow-light: 20px 20px 60px rgba(0, 0, 0, 0.2);
                --shadow-dark: -20px -20px 60px rgba(255, 255, 255, 0.05);
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                scroll-behavior: smooth;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            body {
                font-family: 'Inter', sans-serif;
                background: var(--dark);
                color: var(--light);
                line-height: 1.6;
            }

            .navbar {
                position: fixed;
                top: 0;
                width: 100%;
                background: rgba(10, 25, 47, 0.95);
                border-bottom: 1px solid rgba(100, 255, 218, 0.1);
                backdrop-filter: blur(10px);
                z-index: 100;
                padding: 1rem;
            }

            .nav-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .brand {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--primary);
            }

            .nav-links a {
                color: var(--light);
                text-decoration: none;
                margin-left: 2rem;
                transition: color 0.3s ease;
            }

            .nav-links a:hover {
                color: var(--primary);
            }

            .hero {
                height: 100vh;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                overflow: hidden;
                background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
                will-change: transform;
                backface-visibility: hidden;
            }

            .hero-content {
                position: relative;
                z-index: 1;
                max-width: 1000px;
                padding: 4rem 2rem;
            }

            .hero-title {
                background: var(--gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 4.5rem;
                letter-spacing: -1px;
                font-weight: 800;
                margin-bottom: 1rem;
                animation: glow 1.5s ease-in-out infinite alternate;
            }

            @keyframes glow {
                from {
                    text-shadow: 0 0 10px rgba(100, 255, 218, 0.8), 0 0 20px rgba(100, 255, 218, 0.6);
                }
                to {
                    text-shadow: 0 0 20px rgba(100, 255, 218, 1), 0 0 30px rgba(100, 255, 218, 0.8);
                }
            }

            .hero-subtitle {
                font-size: 2.5rem;
                margin: 1rem auto;
                color: var(--secondary);
                opacity: 0.9;
                overflow: hidden;
                white-space: nowrap;
                width: 0;
                text-align: center;
                animation: type-and-delete 6s infinite;
            }

            @keyframes type-and-delete {
                0%, 50% { width: 0; }
                25% { width: 100%; }
                75%, 100% { width: 0; }
            }

            .hero-description {
                color: var(--secondary);
                max-width: 600px;
                margin: 2rem auto;
            }

            .cta-button {
                display: inline-block;
                padding: 1rem 2.5rem;
                background: transparent;
                border: 2px solid var(--primary);
                color: var(--primary);
                text-decoration: none;
                border-radius: 50px;
                font-weight: 600;
                position: relative;
                overflow: hidden;
                transition: all 0.3s ease;
                z-index: 1;
                animation: bounce 2s infinite;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }

            .cta-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                background: var(--primary);
                transition: all 0.3s ease;
                z-index: -1;
            }

            .cta-button:hover {
                color: var(--dark);
            }

            .cta-button:hover::before {
                width: 100%;
            }

            .section {
                opacity: 1;
                transform: translateY(0);
                transition: transform 0.3s ease, opacity 0.3s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 4rem 2rem;
            }

            .section h2 {
                text-align: center;
                margin-bottom: 2rem;
            }

            .section:hover {
                transform: translateY(-10px);
                opacity: 1;
            }

            .projects {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                padding: 2rem;
            }

            .project-card {
                transform: translateY(0);
                box-shadow: none;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .project-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 30px rgba(100, 255, 218, 0.3);
            }

            .project-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .project-content {
                padding: 1.5rem;
                height: 250px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .project-tags span {
                display: inline-block;
                padding: 0.3rem 0.8rem;
                margin: 0.3rem;
                border-radius: 15px;
                background: var(--glass);
                font-size: 0.8rem;
                color: var(--primary);
            }

            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 1rem;
                margin: 2rem 0;
                justify-items: center;
                max-width: 1200px;
                width: 100%;
            }

            .skill-item {
                transform: translateY(0);
                transition: transform 0.3s ease, border-color 0.3s ease;
                text-align: center;
                padding: 1rem;
                min-width: 120px;
            }

            .skill-item:hover {
                transform: translateY(-5px);
                border-color: var(--primary);
            }

            .services-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                padding: 2rem;
                justify-items: center;
                max-width: 1200px;
                width: 100%;
            }

            .service-card {
                transform: translateY(0);
                box-shadow: none;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                text-align: center;
                padding: 1.5rem;
                max-width: 350px;
            }

            .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
            }

            .service-icon {
                font-size: 3rem;
                color: var(--primary);
                margin-bottom: 1rem;
            }

            .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                padding: 2rem;
                justify-items: center;
                max-width: 1200px;
                width: 100%;
            }

            .testimonial-card {
                transform: translateX(0);
                opacity: 1;
                transition: transform 0.3s ease, opacity 0.3s ease;
                text-align: center;
                padding: 1.5rem;
                max-width: 350px;
            }

            .testimonial-card:hover {
                transform: translateX(-10px);
                opacity: 1;
            }

            .contact {
                background: var(--glass);
                padding: 3rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                max-width: 600px;
                margin: 0 auto;
            }

            .input-group {
                margin-bottom: 1.5rem;
            }

            .input-field {
                width: 100%;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                color: var(--light);
            }

            .footer {
                opacity: 1;
                transition: opacity 0.3s ease;
            }

            .footer:hover {
                opacity: 1;
            }

            .footer-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
            }

            .footer-controls {
                display: flex;
                justify-content: center;
                gap: 2rem;
                padding: 1rem;
                flex-wrap: wrap;
                width: 100%;
                max-width: 600px;
            }

            .social-links a {
                color: var(--light);
                margin: 0 1rem;
                font-size: 1.5rem;
                transition: color 0.3s ease;
            }

            .social-links a:hover {
                color: var(--primary);
            }

            @keyframes fadeUp {
                to { opacity: 1; transform: translateY(0); }
            }

            .animate {
                opacity: 0;
                transform: translateY(20px);
                will-change: opacity, transform;
                animation: fadeUp 0.6s ease forwards;
            }

            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }

            .animate-float {
                animation: float 4s ease-in-out infinite;
            }

            @keyframes slideIn {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }

            .bio-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                padding: 4rem 2rem;
                align-items: center;
            }

            .bio-image {
                width: 300px;
                height: 300px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid var(--primary);
            }

            .skill-progress {
                width: 100%;
                height: 8px;
                background: var(--glass);
                border-radius: 4px;
                margin: 0.5rem 0;
                position: relative;
            }

            .skill-progress-bar {
                height: 100%;
                border-radius: 4px;
                background: var(--progress-bar);
                transition: width 1s ease;
            }

            .download-cv {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                margin: 1rem 0;
            }

            .project-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--modal-bg);
                padding: 2rem;
                border-radius: 15px;
                z-index: 1000;
                width: 90%;
                max-width: 800px;
                backdrop-filter: blur(20px);
                display: none;
            }

            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                cursor: pointer;
                color: var(--light);
            }

            [data-theme="light"] {
                --dark: #ffffff;
                --light: #0a192f;
                --glass: rgba(10, 25, 47, 0.1);
                --neumorphic-light: rgba(255, 255, 255, 0.7);
                --neumorphic-dark: rgba(0, 0, 0, 0.1);
                --shadow-light: 20px 20px 60px rgba(0, 0, 0, 0.1);
                --shadow-dark: -20px -20px 60px rgba(255, 255, 255, 0.8);
            }

            .neumorphic {
                background: var(--dark);
                box-shadow: var(--shadow-light), var(--shadow-dark);
                border-radius: 15px;
                transition: all 0.3s ease;
            }

            .neumorphic:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-light), var(--shadow-dark),
                          inset 5px 5px 10px var(--neumorphic-dark),
                          inset -5px -5px 10px var(--neumorphic-light);
            }

            .asymmetric-grid {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 2rem;
                padding: 2rem;
            }

            .feature-span-4 { grid-column: span 4; }
            .feature-span-6 { grid-column: span 6; }
            .feature-span-8 { grid-column: span 8; }

            @media (max-width: 768px) {
                .bio-section {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
            }

            .chatbot {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                z-index: 1000;
            }

            .scroll-top {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: var(--primary);
                border-radius: 50%;
                padding: 1rem;
                cursor: pointer;
                opacity: 0;
                transition: var(--transition);
            }

            .theme-switcher {
                display: flex;
                gap: 1rem;
                padding: 1rem;
                background: var(--glass);
                border-radius: 15px;
            }

            .language-switcher {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                background: var(--glass);
                padding: 1rem;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(100, 255, 218, 0.2);
            }

            .control-button {
                background: var(--glass);
                border: 1px solid rgba(100, 255, 218, 0.2);
                color: var(--light);
                padding: 0.8rem;
                border-radius: 12px;
                cursor: pointer;
                transition: var(--transition);
                backdrop-filter: blur(10px);
            }

            .control-button:hover {
                background: var(--primary);
                color: var(--dark);
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
            }

            .chatbot-toggle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                background: var(--primary);
                color: var(--dark);
                border: none;
                box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
            }

            .active-control {
                background: var(--primary);
                color: var(--dark);
            }

            @media (max-width: 480px) {
                .hero-title { font-size: 3rem; }
                .hero-subtitle { font-size: 1.8rem; }
                .nav-links a { margin-left: 1rem; }
                .project-card { margin: 1rem 0; }
                .bio-image { width: 250px; height: 250px; }
                .contact { padding: 2rem; }
            }

            @media (min-width: 481px) and (max-width: 1024px) {
                .hero-title { font-size: 4rem; }
                .asymmetric-grid { grid-template-columns: repeat(6, 1fr); }
                .feature-span-8, .feature-span-4 { grid-column: span 6; }
            }

            @media (hover: none) {
                .project-card:hover,
                .skill-item:hover {
                    transform: none;
                }
                
                .cta-button {
                    transition: none;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .nav-links a {
                    padding: 0.8rem;
                }
            }

            .lazy-load {
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .lazy-load.loaded {
                opacity: 1;
            }

            @media (max-width: 768px) {
                .asymmetric-grid {
                    grid-template-columns: 1fr;
                    padding: 1rem;
                }

                .feature-span-8,
                .feature-span-4 {
                    grid-column: span 1;
                }

                .project-card {
                    margin: 1rem 0;
                    width: 100%;
                }

                .project-content {
                    padding: 1.2rem;
                }

                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .project-tags span {
                    margin: 0;
                    font-size: 0.75rem;
                    padding: 0.25rem 0.6rem;
                }

                .project-links {
                    margin-top: 1rem;
                }

                .project-links a {
                    padding: 0.5rem;
                }
            }

            @media screen and (max-width: 480px) {
                .hero-title { font-size: 2.5rem; }
                .hero-subtitle { font-size: 1.5rem; }
                .section { padding: 60px 15px; }
                .project-card { padding: 0.8rem; }
                .nav-links { display: none; }
                .bio-image { width: 200px; height: 200px; }
            }

            @media screen and (min-width: 481px) and (max-width: 767px) {
                .hero-title { font-size: 3rem; }
                .hero-subtitle { font-size: 1.8rem; }
                .section { padding: 80px 20px; }
                .nav-links { font-size: 0.9rem; }
                .bio-image { width: 250px; height: 250px; }
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) {
                .asymmetric-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                .feature-span-8, .feature-span-4 {
                    grid-column: span 2;
                }
                .skills-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            @media screen and (min-width: 1025px) and (max-width: 1366px) {
                .asymmetric-grid {
                    grid-template-columns: repeat(8, 1fr);
                    gap: 1.5rem;
                }
                .container { max-width: 1140px; }
            }

            .hero-title,
            .hero-subtitle,
            .section,
            .project-card,
            .bio-image {
                transition: all 0.3s ease-in-out;
            }

            @media screen and (min-width: 1367px) {
                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .hero-content {
                    max-width: 1200px;
                }
            }

            @media (hover: none) and (pointer: coarse) {
                .project-card:hover,
                .skill-item:hover,
                .cta-button:hover {
                    transform: none;
                }
                
                .nav-links a,
                .project-links a {
                    min-height: 44px;
                    min-width: 44px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .blog-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                padding: 2rem;
            }

            .blog-card {
                transform: scale(1);
                transition: transform 0.3s ease;
            }

            .blog-card:hover {
                transform: scale(1.05);
            }

            .blog-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .blog-content {
                padding: 1.5rem;
            }

            .blog-content h3 {
                margin-bottom: 1rem;
                color: var(--primary);
            }

            .blog-content p {
                margin-bottom: 1.5rem;
                color: var(--secondary);
            }

            .footer-links {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 1rem;
            }

            .footer-links a {
                color: var(--light);
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .footer-links a:hover {
                color: var(--primary);
            }
        </style>
    </head>
    <body>
        <nav class="navbar">
            <div class="nav-content">
                <div class="brand">JH</div>
                <div class="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#services">Services</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>

        <section class="hero">
            <div class="hero-content animate">
                <span class="pre-title" style="color: var(--primary); font-size: 1.2rem;">Hello, I'm</span>
                <h1 class="hero-title animate-float">Jhashank Nayan</h1>
                <h2 class="hero-subtitle">Full Stack Developer</h2>
                <p class="hero-description" style="color: var(--secondary); max-width: 600px; margin: 2rem auto;">
                    I specialize in crafting digital experiences with clean code and modern design principles.
                </p>
                <a href="#projects" class="cta-button">Explore My Work</a>
            </div>
        </section>

        <section id="about" class="section bio-section">
            <div class="bio-image-container animate">
                <img src="https://via.placeholder.com/300" alt="Portrait of Jhashank Nayan, Full Stack Developer" class="bio-image">
                <a href="https://drive.google.com/file/d/1Dmu3apU5FHb-0Z3S-tMmYvWRfB3mA3wQ/view?usp=sharing" class="download-cv cta-button">
                    <i class="fas fa-download"></i> Download CV
                </a>
            </div>
            <div class="bio-content animate">
                <h2>About Me</h2>
                <p>
                    I am a highly motivated and result-oriented second-year engineering undergraduate at Acharya Institute of Technology. 
                    With a solid foundation in mathematics and science, I have a strong passion for Data Science. 
                    I am eager to learn, contribute, and gain practical experience in the technological world, 
                    and I'm committed to developing my skills in this exciting field.
                </p>
            </div>
        </section>

        <section id="projects" class="section asymmetric-grid">
            <div class="project-card neumorphic feature-span-8">
                <img src="https://via.placeholder.com/300x200" alt="Project 1" class="project-image">
                <div class="project-content">
                    <h3>Project One</h3>
                    <p>A web application built with Python and Flask</p>
                    <div class="project-tags">
                        <span>Python</span>
                        <span>Flask</span>
                        <span>SQL</span>
                    </div>
                    <div class="project-links">
                        <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-card neumorphic feature-span-4">
                <img src="https://via.placeholder.com/300x200" alt="Project 2" class="project-image">
                <div class="project-content">
                    <h3>Project Two</h3>
                    <p>An interactive dashboard with real-time data</p>
                    <div class="project-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                    <div class="project-links">
                        <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <div id="projectModal1" class="project-modal">
            <span class="modal-close" onclick="closeProject(1)">×</span>
            <h2>Project Details</h2>
            <img src="https://via.placeholder.com/800x400" alt="Project Screenshot">
            <p class="project-description">Detailed project description...</p>
            <div class="project-timeline">
                <span>Duration: 3 months</span>
                <span>Completed: 2023</span>
            </div>
        </div>

        <section id="skills" class="section">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-item animate">Python</div>
                <div class="skill-item animate">JavaScript</div>
                <div class="skill-item animate">Flask</div>
                <div class="skill-item animate">SQL</div>
                <div class="skill-item animate">Git</div>
                <div class="skill-item animate">HTML</div>
                <div class="skill-item animate">CSS</div>
                <div class="skill-item animate">C</div>
            </div>
        </section>

        <section id="services" class="section">
            <h2>Services (Test)</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-code service-icon"></i>
                    <h3>Web Development</h3>
                    <p>Building responsive and scalable web applications tailored to your needs.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-paint-brush service-icon"></i>
                    <h3>UI/UX Design</h3>
                    <p>Designing user-friendly interfaces with a focus on aesthetics and usability.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-cloud service-icon"></i>
                    <h3>Cloud Solutions</h3>
                    <p>Deploying and managing applications on cloud platforms like AWS and Azure.</p>
                </div>
            </div>
        </section>

        <section id="testimonials" class="section">
            <h2>Testimonials (Test)</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p>"John is an exceptional developer who delivers high-quality work on time."</p>
                    <span>- Client A</span>
                </div>
                <div class="testimonial-card">
                    <p>"Working with John was a pleasure. His expertise in full-stack development is unmatched."</p>
                    <span>- Client B</span>
                </div>
                <div class="testimonial-card">
                    <p>"John's ability to solve complex problems is truly impressive."</p>
                    <span>- Client C</span>
                </div>
            </div>
        </section>

        <section id="blog" class="section">
            <h2>Blog (Test)</h2>
            <div class="blog-grid">
                <div class="blog-card">
                    <img src="https://via.placeholder.com/300x200" alt="Blog 1" class="blog-image">
                    <div class="blog-content">
                        <h3>Understanding REST APIs</h3>
                        <p>A comprehensive guide to building and consuming RESTful APIs.</p>
                        <a href="#" class="cta-button">Read More</a>
                    </div>
                </div>
                <div class="blog-card">
                    <img src="https://via.placeholder.com/300x200" alt="Blog 2" class="blog-image">
                    <div class="blog-content">
                        <h3>Top 10 JavaScript Frameworks</h3>
                        <p>An overview of the most popular JavaScript frameworks in 2024.</p>
                        <a href="#" class="cta-button">Read More</a>
                    </div>
                </div>
                <div class="blog-card">
                    <img src="https://via.placeholder.com/300x200" alt="Blog 3" class="blog-image">
                    <div class="blog-content">
                        <h3>Deploying Applications on AWS</h3>
                        <p>Step-by-step instructions for deploying scalable applications on AWS.</p>
                        <a href="#" class="cta-button">Read More</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="contact animate">
                <h2>Get In Touch</h2>
                <p>Currently available for freelance work and collaborations.</p>
                <form action="https://formspree.io/f/xvgzevek" method="POST">
                    <div class="input-group">
                        <input type="text" name="name" class="input-field" placeholder="Name" required>
                    </div>
                    <div class="input-group">
                        <input type="email" name="email" class="input-field" placeholder="Email" required>
                    </div>
                    <div class="input-group">
                        <textarea name="message" class="input-field" rows="4" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" class="cta-button">Send Message</button>
                </form>
                <div class="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                        width="100%" 
                        height="300" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>

        <div class="chatbot">
            <button class="chatbot-toggle">
                <i class="fas fa-comment-dots"></i>
            </button>
            <div class="chatbot-container" style="display: none;">
                <!-- Chatbot interface -->
            </div>
        </div>

        <button class="scroll-top">
            <i class="fas fa-arrow-up"></i>
        </button>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="social-links">
                    <a href="https://github.com/NYN-05"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jhashanknayan/"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <p>© 2025 Jhashank Nayan. All rights reserved.</p>
            </div>
        </footer>

        <script type="module">
            import * as THREE from 'https://cdn.skypack.dev/three';

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.querySelector('.hero').appendChild(renderer.domElement);

            const particles = new THREE.Group();
            for(let i = 0; i < 100; i++) {
                const geometry = new THREE.SphereGeometry(0.1, 8, 8);
                const material = new THREE.MeshBasicMaterial({ color: 0x64ffda });
                const particle = new THREE.Mesh(geometry, material);
                particle.position.set(
                    Math.random() * 20 - 10,
                    Math.random() * 20 - 10,
                    Math.random() * 20 - 10
                );
                particles.add(particle);
            }
            scene.add(particles);
            camera.position.z = 5;

            function animate() {
                requestAnimationFrame(animate);
                particles.rotation.x += 0.001;
                particles.rotation.y += 0.002;
                renderer.render(scene, camera);
            }
            animate();

            document.addEventListener('DOMContentLoaded', () => {
                const scrollTopBtn = document.querySelector('.scroll-top');
                const chatbotToggle = document.querySelector('.chatbot-toggle');
                const chatbotContainer = document.querySelector('.chatbot-container');
                const form = document.querySelector('form');

                let scrollTimeout;
                window.addEventListener('scroll', () => {
                    if (scrollTimeout) {
                        window.cancelAnimationFrame(scrollTimeout);
                    }
                    scrollTimeout = window.requestAnimationFrame(() => {
                        scrollTopBtn.style.opacity = window.scrollY > 500 ? '1' : '0';
                    });
                });

                const modalHandler = {
                    open: (id) => {
                        const modal = document.getElementById(`projectModal${id}`);
                        if (modal) {
                            modal.style.display = 'block';
                            document.body.style.overflow = 'hidden';
                        }
                    },
                    close: (id) => {
                        const modal = document.getElementById(`projectModal${id}`);
                        if (modal) {
                            modal.style.display = 'none';
                            document.body.style.overflow = 'auto';
                        }
                    }
                };

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('animate');
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.1 }
                );

                document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

                document.addEventListener('click', (e) => {
                    if (e.target.matches('.project-modal')) {
                        e.target.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });

                form?.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const submitButton = form.querySelector('button[type="submit"]');
                    if (submitButton) {
                        try {
                            submitButton.disabled = true;
                            submitButton.innerHTML = 'Sending...';
                            const response = await fetch(form.action, {
                                method: 'POST',
                                body: new FormData(form),
                                headers: { 'Accept': 'application/json' }
                            });
                            if (response.ok) {
                                form.reset();
                                alert('Message sent successfully!');
                            } else {
                                throw new Error('Form submission failed');
                            }
                        } catch (error) {
                            console.error('Form error:', error);
                            alert('Error sending message. Please try again.');
                        } finally {
                            submitButton.disabled = false;
                            submitButton.innerHTML = 'Send Message';
                        }
                    }
                });

                chatbotToggle?.addEventListener('click', () => {
                    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
                });

                scrollTopBtn?.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });

                window.openProject = modalHandler.open;
                window.closeProject = modalHandler.close;

                const touchHandler = {
                    init: () => {
                        document.addEventListener('touchstart', () => {}, {passive: true});
                    }
                };

                const lazyLoad = () => {
                    const images = document.querySelectorAll('img[data-src]');
                    const imageObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                img.src = img.dataset.src;
                                img.classList.add('loaded');
                                imageObserver.unobserve(img);
                            }
                        });
                    });

                    images.forEach(img => imageObserver.observe(img));
                };

                touchHandler.init();
                lazyLoad();

                let resizeTimeout;
                window.addEventListener('resize', () => {
                    if (resizeTimeout) {
                        clearTimeout(resizeTimeout);
                    }
                    resizeTimeout = setTimeout(() => {
                        // Handle resize events
                    }, 250);
                });

                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('href').substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                });
            });
        </script>
    </body>
    </html>
    """

if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=5001,
        debug=True,
        threaded=True
    )
