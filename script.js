// ==================== LOADING SCREEN & SCROLL ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Reset any lingering transition effects from back button navigation
    resetTransitionState();

    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Hide loading screen after 4 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        mainContent.classList.remove('hidden');

        // Remove loading screen from DOM after fade animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 4000);
});

// Intersection Observer for scroll animations with fade out
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is coming into view - fade in
            entry.target.classList.add('visible');
        } else {
            // Element is going out of view - fade out
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(element => {
        // Keep header always visible once it appears
        if (element.tagName === 'HEADER') {
            const headerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing once visible
                        headerObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            headerObserver.observe(element);
        } else {
            observer.observe(element);
        }
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Check if it's an external link (starts with http/https) or internal anchor
            if (targetId.startsWith('http') || targetId.startsWith('//')) {
                // Let external links work normally
                return;
            }

            // Only prevent default for internal anchor links
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced transition functionality for link buttons
    setupTransitionButtons();
});

function setupTransitionButtons() {
    // Get the actual link buttons from your HTML
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const url = button.dataset.url;
            
            // Determine which link was clicked and use appropriate colors
            if (url.includes('clovetwilight3')) {
                const cloveColors = {
                    '--green-dark': '#0a1f0a',
                    '--green-medium': '#1a5f1a',
                    '--green-light': '#2e8a2e',
                    '--green-accent': '#5cff5c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#7aff7a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, cloveColors, 'Switching to Clove`s content...', '🍃');
                
            } else if (url.includes('themidnightcyan')) {
                const cyanColors = {
                    '--green-dark': '#051205',
                    '--green-medium': '#0f3d0f',
                    '--green-light': '#1a6b1a',
                    '--green-accent': '#3cff3c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#6aff6a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, cyanColors, 'Loading Athena`s Content...', '🌙');
                
            } else if (url.includes('alextlm')) {
                const alexColors = {
                    '--green-dark': '#0f1f0a',
                    '--green-medium': '#1f4f1a',
                    '--green-light': '#2f7f2a',
                    '--green-accent': '#6cff6c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#8aff8a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, alexColors, 'Loading AlexTLM Music...', '🎧');
                
            } else if (url.includes('doughmination')) {
                const doughColors = {
                    '--green-dark': '#1a1f0a',
                    '--green-medium': '#3a4f1a',
                    '--green-light': '#5a7f2a',
                    '--green-accent': '#7cff3c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9aff5a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, doughColors, 'Loading Doughmination System...', '🍩');
                
            } else if (url.includes('hunt-rix')) {
                const huntColors = {
                    '--green-dark': '#0a1f1a',
                    '--green-medium': '#1a4f3a',
                    '--green-light': '#2a7f5a',
                    '--green-accent': '#4cff7c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#6aff9a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, huntColors, 'Loading Huntrix Rocks...', '🎯');
                
            } else if (url.includes('mazeymoos')) {
                const mazeyColors = {
                    '--green-dark': '#1a0f1a',
                    '--green-medium': '#3a2f3a',
                    '--green-light': '#5a4f5a',
                    '--green-accent': '#7c6c7c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a8a9a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, mazeyColors, 'Loading EstrogenHRT Gaming...', '🦋');
            } else if (url.includes('lgbwitht')) {
                const lgbColors = {
                    '--green-dark': '#5a5943',
                    '--green-medium': '#7d7c5c',
                    '--green-light': '#a5a481',
                    '--green-accent': '#7c6c7c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a8a9a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, lgbColors, 'Loading LGBwithT...', '🏳️‍🌈');
                
            } else if (url.includes('myluminarasystem')) {
                const luminaraColors = {
                    '--green-dark': '#0a0f1a',
                    '--green-medium': '#1a2f3a',
                    '--green-light': '#2a4f5a',
                    '--green-accent': '#4c6c7c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#6a8a9a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, luminaraColors, 'Loading My Luminara System...', '✨');
                
            } else if (url.includes('trans4trans')) {
                const trans4transColors = {
                    '--green-dark': '#1a0a1a',
                    '--green-medium': '#3a1a3a',
                    '--green-light': '#5a2a5a',
                    '--green-accent': '#7c4c7c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a6a9a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, trans4transColors, 'Loading Trans4Trans Letters...', '✉️');
                
            } else if (url.includes('transgamers')) {
                const transgamersColors = {
                    '--green-dark': '#0a1a0a',
                    '--green-medium': '#1a3a1a',
                    '--green-light': '#2a5a2a',
                    '--green-accent': '#4c7c4c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#6a9a6a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, transgamersColors, 'Loading TransGamers...', '🎮');
                
            } else if (url.includes('unifiedgaming-systems')) {
                const unifiedColors = {
                    '--green-dark': '#1a1a0a',
                    '--green-medium': '#3a3a1a',
                    '--green-light': '#5a5a2a',
                    '--green-accent': '#7c7c4c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a9a6a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, unifiedColors, 'Loading UnifiedGaming Systems...', '🖥️');
                
            } else if (url.includes('yaoi-lover')) {
                const yaoiColors = {
                    '--green-dark': '#1a0a0f',
                    '--green-medium': '#3a1a2f',
                    '--green-light': '#5a2a4f',
                    '--green-accent': '#7c4c6c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a6a8a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, yaoiColors, 'Loading Yaoi Lover Cheat Sheets...', '📚');
                
            } else if (url.includes('yuri-lover')) {
                const yuriColors = {
                    '--green-dark': '#1a0f0a',
                    '--green-medium': '#3a2f1a',
                    '--green-light': '#5a4f2a',
                    '--green-accent': '#7c6c4c',
                    '--text-light': '#e8f5e9',
                    '--accent-glow': '#9a8a6a',
                    '--lavender-purple': '#9b7cb6'
                };
                performTransition(url, yuriColors, 'Loading Yuri Lover Files...', '📂');
            }
        });
    });
}

function performTransition(url, colorScheme, loadingText, emoji = '✦') {
    // Create transition overlay with HARDCODED starting green colors
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'transition-overlay';

    // Set initial hardcoded green colors AND transition property
    transitionOverlay.style.background = 'linear-gradient(135deg, #0d1b0d 0%, #145214 100%)';
    transitionOverlay.style.transition = 'opacity 0.6s ease, background 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    // Create loading content
    const transitionContent = document.createElement('div');
    transitionContent.className = 'transition-content';
    transitionContent.innerHTML = `
        <div class="spinning-emoji">${emoji}</div>
        <div class="transition-diamonds">
            <span class="diamond">✦</span>
            <span class="diamond">✧</span>
            <span class="diamond">⋆</span>
            <span class="diamond">✦</span>
            <span class="diamond">✧</span>
        </div>
        <p class="transition-text">${loadingText}</p>
    `;

    transitionOverlay.appendChild(transitionContent);
    document.body.appendChild(transitionOverlay);

    // Add the transition overlay styles dynamically
    if (!document.getElementById('transition-styles')) {
        const transitionStyles = document.createElement('style');
        transitionStyles.id = 'transition-styles';
        transitionStyles.textContent = `
            .transition-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                opacity: 0;
                cursor: none;
                pointer-events: none;
            }
            
            .transition-overlay.fade-in {
                opacity: 1;
                cursor: none;
                pointer-events: none;
            }
            
            .transition-content {
                text-align: center;
                color: var(--text-light);
            }
            
            .spinning-emoji {
                font-size: 4rem;
                margin-bottom: 20px;
                animation: spin-emoji 1.5s linear infinite;
                text-shadow: 0 0 25px var(--accent-glow), 0 0 50px var(--accent-glow);
                filter: drop-shadow(0 0 10px var(--accent-glow));
            }
            
            @keyframes spin-emoji {
                from { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.1); }
                to { transform: rotate(360deg) scale(1); }
            }
            
            .transition-diamonds {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .transition-diamonds .diamond {
                font-size: 1.8rem;
                color: var(--accent-glow);
                animation: transition-bounce 1.4s ease-in-out infinite both;
                text-shadow: 0 0 15px var(--accent-glow);
            }
            
            .transition-diamonds .diamond:nth-child(1) { animation-delay: -0.32s; }
            .transition-diamonds .diamond:nth-child(2) { animation-delay: -0.16s; }
            .transition-diamonds .diamond:nth-child(3) { animation-delay: 0s; }
            .transition-diamonds .diamond:nth-child(4) { animation-delay: 0.16s; }
            .transition-diamonds .diamond:nth-child(5) { animation-delay: 0.32s; }
            
            @keyframes transition-bounce {
                0%, 80%, 100% {
                    transform: scale(0.8) translateY(0);
                    opacity: 0.7;
                }
                40% {
                    transform: scale(1.2) translateY(-15px);
                    opacity: 1;
                }
            }
            
            .transition-text {
                font-size: 1.2rem;
                color: var(--text-light);
                margin-top: 20px;
                animation: transition-pulse 2s ease-in-out infinite;
            }
            
            @keyframes transition-pulse {
                0%, 100% { opacity: 0.6; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(transitionStyles);
    }

    // Start the transition sequence
    setTimeout(() => {
        // Fade in the overlay
        transitionOverlay.classList.add('fade-in');

        // Start color transition after overlay is visible
        setTimeout(() => {
            // Transition the overlay background to target colors
            const targetGradient = `linear-gradient(135deg, ${colorScheme['--green-dark']} 0%, ${colorScheme['--green-medium']} 100%)`;
            transitionOverlay.style.background = targetGradient;

            // Also change the page colors behind it
            changeColors(colorScheme);
        }, 400);

        // Navigate after everything is complete
        setTimeout(() => {
            window.location.href = url;
        }, 2800);
    }, 50);
}

function changeColors(colorScheme) {
    const root = document.documentElement;

    // Create longer, smoother color transition animations
    root.style.transition = 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    document.body.style.transition = 'background 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    // Apply new color scheme with smooth transition
    Object.entries(colorScheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    // Update the background gradient with smooth transition
    document.body.style.background = `linear-gradient(135deg, ${colorScheme['--green-dark']} 0%, ${colorScheme['--green-medium']} 100%)`;

    // Clean up transition styles after animation completes
    setTimeout(() => {
        root.style.transition = '';
        document.body.style.transition = '';
    }, 1800);
}

function resetTransitionState() {
    // Remove any existing transition overlays
    const existingOverlays = document.querySelectorAll('.transition-overlay');
    existingOverlays.forEach(overlay => overlay.remove());

    // Remove transition styles
    const transitionStyles = document.getElementById('transition-styles');
    if (transitionStyles) {
        transitionStyles.remove();
    }

    // Reset CSS custom properties to original green values
    const root = document.documentElement;
    const originalColors = {
        '--green-dark': '#0d1b0d',
        '--green-medium': '#145214',
        '--green-light': '#1e7a1e',
        '--green-accent': '#4cff4c',
        '--text-light': '#e8f5e9',
        '--accent-glow': '#6aff6a',
        '--lavender-purple': '#9b7cb6'
    };

    Object.entries(originalColors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    // Reset body background to original green gradient
    document.body.style.background = 'linear-gradient(135deg, var(--green-dark) 0%, var(--green-medium) 100%)';
}

// Also reset on page show event (handles back button better)
window.addEventListener('pageshow', (event) => {
    // If page is loaded from cache (back button), reset transition state
    if (event.persisted) {
        resetTransitionState();
    }
});