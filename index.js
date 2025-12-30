// ============================================
// COLOR CONSTANTS
// ============================================
const PRIMARY_COLOR = '#2563EB'; // Royal Blue
const SECONDARY_COLOR = '#10B981'; // Emerald Green

// ============================================
// THEME CONFIGURATION
// ============================================
const themes = {
    light: {
        name: 'light',
        body: {
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            color: '#2d3748'
        },
        nav: {
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#333',
            border: 'rgba(102, 126, 234, 0.3)'
        },
        card: {
            background: 'white',
            color: '#2d3748',
            shadow: '0 20px 60px rgba(0,0,0,0.15)'
        },
        footer: {
            background: 'linear-gradient(to right, #141e30, #243b55)',
            color: 'white'
        },
        accent: {
            primary: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
            secondary: 'linear-gradient(135deg, #10B981, #059669)',
            purple: '#2563EB',
            pink: '#10B981'
        },
        text: {
            primary: '#2d3748',
            secondary: '#4a5568',
            muted: '#718096',
            light: '#a0aec0'
        }
    },
    dark: {
        name: 'dark',
        body: {
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#f1f5f9'
        },
        nav: {
            background: 'rgba(30, 41, 59, 0.95)',
            color: '#f1f5f9',
            border: 'rgba(6, 182, 212, 0.3)'
        },
        card: {
            background: 'rgba(30, 41, 59, 0.8)',
            color: '#f1f5f9',
            shadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(6, 182, 212, 0.1)'
        },
        footer: {
            background: 'linear-gradient(to right, #0f172a, #1e293b)',
            color: '#f1f5f9'
        },
        accent: {
            primary: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
            secondary: 'linear-gradient(135deg, #34D399, #10B981)',
            purple: '#60A5FA',
            pink: '#34D399',
            cyan: '#3B82F6'
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#cbd5e1',
            muted: '#94a3b8',
            light: '#64748b'
        }
    }
};

// Current theme state
let currentTheme = 'light';

// Load saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && themes[savedTheme]) {
        currentTheme = savedTheme;
    }
    applyTheme(currentTheme);
}

// Save theme to localStorage
function saveTheme(themeName) {
    localStorage.setItem('portfolioTheme', themeName);
}

// Apply theme to all elements
function applyTheme(themeName) {
    currentTheme = themeName;
    const theme = themes[themeName];

    // Update body
    document.body.style.background = theme.body.background;
    document.body.style.color = theme.body.color;
    document.body.style.transition = 'background 0.5s ease, color 0.3s ease';

    // Update navigation if it exists
    if (window.nav) {
        nav.style.background = theme.nav.background;
        nav.style.borderBottom = `2px solid ${theme.nav.border}`;
    }

    // Update mobile nav if it exists
    if (window.mobileNav) {
        mobileNav.style.background = theme.card.background;
        mobileNav.style.color = theme.text.primary;
    }

    // Update theme toggle icon
    if (window.themeToggle) {
        themeToggle.innerHTML = themeName === 'light' ? '🌙' : '☀️';
    }

    // Save theme preference
    saveTheme(themeName);
}

// Toggle between themes
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);

    // Refresh current page to apply theme to all elements
    const currentPage = window.currentPage || 'home';
    showPage(currentPage);
}

document.body.innerHTML = '';
document.body.style.cssText = 'margin: 0; padding: 0; font-family: "Poppins", sans-serif; min-height: 100vh; display: flex; flex-direction: column;';

// Modern Navigation Bar
const nav = document.createElement('nav');
nav.style.cssText = 'background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); padding: 15px 0; position: fixed; width: 100%; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.05);';

const navContainer = document.createElement('div');
navContainer.style.cssText = 'max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 30px; position: relative;';

// Logo with gradient
const logo = document.createElement('div');
logo.innerHTML = '<span style="color: #2563EB; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Mohamed Xasan Muuse</span>';
logo.style.cssText = 'cursor: pointer; display: flex; align-items: center;';
logo.onclick = function () {
    showPage('home');
};

const navLinks = document.createElement('ul');
navLinks.id = 'navLinks';
navLinks.style.cssText = 'display: flex; list-style: none; margin: 0; padding: 0; gap: 5px; align-items: center;';

const pages = ['Home', 'Assignments', 'Contact', 'About'];

pages.forEach(page => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: #333; text-decoration: none; font-size: 15px; font-weight: 600; padding: 12px 20px; border-radius: 25px; transition: all 0.3s ease; cursor: pointer; position: relative;';

    a.onmouseover = function () {
        this.style.background = '#2563EB';
        this.style.color = 'white';
        this.style.transform = 'translateY(-1px)';
        this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
    };

    a.onmouseout = function () {
        this.style.background = 'transparent';
        this.style.color = '#333';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    };

    a.onclick = function () {
        showPage(page.toLowerCase());
    };

    li.appendChild(a);
    navLinks.appendChild(li);
});

const hamburger = document.createElement('button');
hamburger.innerHTML = '☰';
hamburger.id = 'hamburgerBtn';
hamburger.style.cssText = 'display: block; background: #2563EB; color: white; border: none; font-size: 20px; cursor: pointer; padding: 10px 16px; border-radius: 8px; transition: all 0.3s; box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);';

hamburger.onmouseover = function () {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
};

hamburger.onmouseout = function () {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
};

const mobileNav = document.createElement('div');
mobileNav.id = 'mobileNav';
mobileNav.style.cssText = 'display: none; position: absolute; top: 70px; right: 30px; background: white; padding: 25px; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); z-index: 1001; min-width: 220px; border: 1px solid rgba(102, 126, 234, 0.2);';

const mobileNavList = document.createElement('ul');
mobileNavList.style.cssText = 'list-style: none; margin: 0; padding: 0;';

pages.forEach(page => {
    const li = document.createElement('li');
    li.style.cssText = 'margin-bottom: 8px;';

    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: #333; text-decoration: none; font-size: 16px; font-weight: 600; padding: 12px 18px; border-radius: 8px; display: block; cursor: pointer; transition: all 0.3s;';

    a.onmouseover = function () {
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        this.style.color = 'white';
    };

    a.onmouseout = function () {
        this.style.background = 'transparent';
        this.style.color = '#333';
    };

    a.onclick = function () {
        showPage(page.toLowerCase());
    };

    li.appendChild(a);
    mobileNavList.appendChild(li);
});

mobileNav.appendChild(mobileNavList);

hamburger.onclick = function () {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
};

// Theme Toggle Button
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.id = 'themeToggle';
themeToggle.title = 'Toggle Dark/Light Mode';
themeToggle.style.cssText = 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; font-size: 24px; cursor: pointer; padding: 12px 18px; border-radius: 10px; transition: all 0.3s; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3); margin-right: 10px;';

themeToggle.onmouseover = function () {
    this.style.transform = 'scale(1.1) rotate(20deg)';
    this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
};

themeToggle.onmouseout = function () {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
};

themeToggle.onclick = function () {
    toggleTheme();
};

// Make nav and mobileNav globally accessible
window.nav = nav;
window.mobileNav = mobileNav;
window.themeToggle = themeToggle;

navContainer.appendChild(logo);
navContainer.appendChild(navLinks);
navContainer.appendChild(themeToggle);
navContainer.appendChild(hamburger);
navContainer.appendChild(mobileNav);
nav.appendChild(navContainer);
document.body.appendChild(nav);

// Global Styles & Animations
const globalStyle = document.createElement('style');
globalStyle.textContent = `
    @media (max-width: 768px) {
        #navLinks { display: none !important; }
        nav { padding: 15px 0 !important; }
        navContainer { padding: 0 15px !important; }
    }
    /* Hamburger is now always visible via inline style, and mobileNav visibility is handled by JS toggle */
    
    @keyframes gradientMove {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        50% { transform: translate(-25%, -25%) rotate(180deg); }
        100% { transform: translate(0%, 0%) rotate(360deg); }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .float-animation {
        animation: float 6s ease-in-out infinite;
    }
    .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Scrollbar Styling */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #555; }
`;
document.head.appendChild(globalStyle);


const messageDisplay = document.createElement('div');
messageDisplay.id = 'messageDisplay';
messageDisplay.style.cssText = 'position: fixed; top: 0; right: 0; bottom: 0; width: 400px; background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(20px); color: #333; padding: 0; font-family: "Courier New", monospace; font-size: 13px; z-index: 2000; box-shadow: -10px 0 30px rgba(0,0,0,0.1); transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; border-left: 1px solid rgba(0,0,0,0.05);';

// Header for the sidebar
const messageHeader = document.createElement('div');
messageHeader.style.cssText = 'padding: 20px; background: linear-gradient(135deg, #1a202c, #2d3748); color: white; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); flex-shrink: 0;';

const messageTitle = document.createElement('div');
messageTitle.innerHTML = '🖥️ Console Output';
messageTitle.style.cssText = 'font-weight: 700; font-size: 16px; letter-spacing: 0.5px;';

const closeBtn = document.createElement('button');
closeBtn.innerHTML = '✕';
closeBtn.style.cssText = 'background: rgba(255,255,255,0.2); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; transition: 0.2s;';
closeBtn.onmouseover = function () { this.style.background = 'rgba(255,255,255,0.3)'; };
closeBtn.onmouseout = function () { this.style.background = 'rgba(255,255,255,0.2)'; };
closeBtn.onclick = function () {
    messageDisplay.style.transform = 'translateX(100%)';
};

const clearMessageBtn = document.createElement('button');
clearMessageBtn.textContent = 'Clear Logs';
clearMessageBtn.style.cssText = 'background: #f56565; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; margin-right: 10px; transition: all 0.3s;';
clearMessageBtn.onclick = function () {
    messageContent.innerHTML = '';
    const emptyState = document.createElement('div');
    emptyState.textContent = 'Docs cleared...';
    emptyState.style.color = '#a0aec0';
    emptyState.style.fontStyle = 'italic';
    emptyState.style.padding = '20px';
    emptyState.style.textAlign = 'center';
    messageContent.appendChild(emptyState);
};

const controls = document.createElement('div');
controls.style.display = 'flex';
controls.alignItems = 'center';
controls.appendChild(clearMessageBtn);
controls.appendChild(closeBtn);

messageHeader.appendChild(messageTitle);
messageHeader.appendChild(controls);

const messageContent = document.createElement('div');
messageContent.id = 'messageContent';
messageContent.style.cssText = 'flex: 1; overflow-y: auto; padding: 20px; background: #f7fafc;';

messageDisplay.appendChild(messageHeader);
messageDisplay.appendChild(messageContent);
document.body.appendChild(messageDisplay);

// Overlay for mobile or focus
const sidebarOverlay = document.createElement('div');
sidebarOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.3); z-index: 1999; opacity: 0; visibility: hidden; transition: 0.3s; backdrop-filter: blur(2px);';
sidebarOverlay.onclick = function () {
    messageDisplay.style.transform = 'translateX(100%)';
    this.style.opacity = '0';
    this.style.visibility = 'hidden';
};
document.body.appendChild(sidebarOverlay);

// Function to add messages to display (only shows when called)
function addMessage(message) {
    // Show Sidebar
    messageDisplay.style.transform = 'translateX(0)';
    sidebarOverlay.style.visibility = 'visible';
    sidebarOverlay.style.opacity = '1';

    const newMessage = document.createElement('div');
    newMessage.innerHTML = '<span style="color: #667eea; font-weight: bold;">➜</span> ' + message;
    newMessage.style.cssText = 'margin-bottom: 12px; padding: 12px 15px; background: white; border-radius: 8px; border-left: 3px solid #667eea; font-size: 13px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); animation: fadeInUp 0.3s ease; color: #2d3748; line-height: 1.5; font-family: "Consolas", "Monaco", monospace;';

    messageContent.appendChild(newMessage);
    messageContent.scrollTop = messageContent.scrollHeight;
}


const main = document.createElement('main');
main.style.cssText = 'margin-top: 90px; padding: 40px 30px; max-width: 1400px; margin-left: auto; margin-right: auto; flex: 1; width: 100%; box-sizing: border-box;';
document.body.appendChild(main);

// ============================================
// FOOTER COMPONENT
// ============================================
const footer = document.createElement('footer');
footer.style.cssText = 'background: #111827; color: white; padding-top: 60px; margin-top: auto; width: 100%; position: relative; z-index: 100; box-shadow: 0 -10px 30px rgba(0,0,0,0.05);';

const footerContent = document.createElement('div');
footerContent.style.cssText = 'max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; padding: 0 30px 50px;';

// Column 1: Brand Info
const col1 = document.createElement('div');
const footerTitle = document.createElement('h3');
footerTitle.innerHTML = 'Mohamed Xasan Muuse';
footerTitle.style.cssText = 'font-size: 28px; font-weight: 800; color: white; margin-bottom: 20px; display: inline-block;';

const footerText = document.createElement('p');
footerText.textContent = 'Empowering developers with clean, efficient, and framework-free JavaScript solutions. Built for performance and simplicity.';
footerText.style.cssText = 'color: #a0aec0; font-size: 15px; line-height: 1.8; margin-bottom: 25px;';

// Socials (Moved to Col 1)
const socialLinks = document.createElement('div');
socialLinks.style.cssText = 'display: flex; gap: 15px;';

const socials = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ibraahimdaahir12' },
    { name: 'Email', icon: '✉️', url: 'mailto:mohamedxasan810@gmail.com' },
    { name: 'LinkedIn', icon: '👔', url: '#' }
];

socials.forEach(social => {
    const link = document.createElement('a');
    link.textContent = social.icon;
    link.href = social.url || '#';
    link.title = social.name;
    link.style.cssText = 'color: white; text-decoration: none; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 50%; transition: all 0.3s; font-size: 18px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;';

    link.onmouseover = function () {
        this.style.background = '#2563EB';
        this.style.transform = 'translateY(-3px)';
        this.style.borderColor = '#2563EB';
    };
    link.onmouseout = function () {
        this.style.background = 'rgba(255,255,255,0.05)';
        this.style.transform = 'translateY(0)';
        this.style.borderColor = 'rgba(255,255,255,0.1)';
    };
    socialLinks.appendChild(link);
});

col1.appendChild(footerTitle);
col1.appendChild(footerText);
col1.appendChild(socialLinks);


// Column 2: Quick Links
const col2 = document.createElement('div');
const col2Title = document.createElement('h4');
col2Title.textContent = 'Quick Links';
col2Title.style.cssText = 'font-size: 18px; font-weight: 700; margin-bottom: 25px; color: white; position: relative; padding-bottom: 10px; border-bottom: 2px solid #667eea; display: inline-block;';

const linksList = document.createElement('ul');
linksList.style.cssText = 'list-style: none; padding: 0; margin: 0;';

const links = ['Home', 'Assignments', 'Create Account', 'About Us'];
links.forEach(linkText => {
    const li = document.createElement('li');
    li.style.cssText = 'margin-bottom: 12px;';

    const a = document.createElement('a');
    a.textContent = linkText;
    a.style.cssText = 'color: #a0aec0; text-decoration: none; transition: 0.3s; font-size: 15px; cursor: pointer; display: inline-block;';
    a.onmouseover = function () { this.style.color = '#667eea'; this.style.transform = 'translateX(5px)'; };
    a.onmouseout = function () { this.style.color = '#a0aec0'; this.style.transform = 'translateX(0)'; };

    // Simple navigation logic
    a.onclick = function () {
        if (linkText === 'Create Account') showPage('contact');
        else if (linkText === 'About Us') showPage('about');
        else showPage(linkText.toLowerCase());
    };

    li.appendChild(a);
    linksList.appendChild(li);
});

col2.appendChild(col2Title);
col2.appendChild(linksList);


// Column 3: Newsletter
const col3 = document.createElement('div');
const col3Title = document.createElement('h4');
col3Title.textContent = 'Stay Updated';
col3Title.style.cssText = 'font-size: 18px; font-weight: 700; margin-bottom: 25px; color: white; position: relative; padding-bottom: 10px; border-bottom: 2px solid #f5576c; display: inline-block;';

const newsText = document.createElement('p');
newsText.textContent = 'Subscribe to our newsletter for the latest JavaScript tips and portfolio updates.';
newsText.style.cssText = 'color: #a0aec0; font-size: 15px; line-height: 1.6; margin-bottom: 20px;';

const newsForm = document.createElement('div');
newsForm.style.cssText = 'display: flex; gap: 10px;';

const newsInput = document.createElement('input');
newsInput.placeholder = 'Enter email address';
newsInput.style.cssText = 'flex: 1; padding: 12px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: white; outline: none; font-size: 14px;';
newsInput.onfocus = function () { this.style.borderColor = '#667eea'; };
newsInput.onblur = function () { this.style.borderColor = 'rgba(255,255,255,0.1)'; };

const newsBtn = document.createElement('button');
newsBtn.textContent = '🚀';
newsBtn.style.cssText = 'background: #667eea; border: none; padding: 12px 18px; border-radius: 8px; cursor: pointer; transition: 0.3s; font-size: 16px;';
newsBtn.onmouseover = function () { this.style.background = '#764ba2'; };
newsBtn.onmouseout = function () { this.style.background = '#667eea'; };
newsBtn.onclick = function () { alert('Subscribed successfully!'); newsInput.value = ''; };

newsForm.appendChild(newsInput);
newsForm.appendChild(newsBtn);

col3.appendChild(col3Title);
col3.appendChild(newsText);
col3.appendChild(newsForm);


footerContent.appendChild(col1);
footerContent.appendChild(col2);
footerContent.appendChild(col3);

const copyrightContainer = document.createElement('div');
copyrightContainer.style.cssText = 'background: rgba(0,0,0,0.2); text-align: center; padding: 20px; border-top: 1px solid rgba(255,255,255,0.05);';

const copyright = document.createElement('p');
copyright.innerHTML = '&copy; 2025 <strong>Mohamed Xasan Muuse</strong>. All Rights Reserved.';
copyright.style.cssText = 'color: #718096; font-size: 14px; margin: 0;';

copyrightContainer.appendChild(copyright);

footer.appendChild(footerContent);
footer.appendChild(copyrightContainer);
document.body.appendChild(footer);


function showPage(pageName) {
    // Track current page for theme refresh
    window.currentPage = pageName;

    // Clear main content
    main.innerHTML = '';

    // Show selected page
    if (pageName === 'home') showHome();
    else if (pageName === 'assignments') showAssignments();
    else if (pageName === 'contact') showContact();
    else if (pageName === 'about') showAbout();

    // DON'T add message when switching pages
}


function showHome() {
    const theme = themes[currentTheme];
    const page = document.createElement('div');
    page.style.cssText = 'position: relative; min-height: calc(100vh - 150px); width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px 20px;';

    // Hero Section with animated gradient background
    const heroSection = document.createElement('div');
    heroSection.style.cssText = `width: 100%; max-width: 1200px; text-align: center; padding: 60px 40px; background: ${theme.card.background}; border-radius: 25px; box-shadow: ${theme.card.shadow}; position: relative; overflow: hidden; transition: all 0.3s ease;`;

    // Animated gradient overlay
    const gradientOverlay = document.createElement('div');
    gradientOverlay.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.05), transparent 70%); z-index: 0;';

    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = 'position: relative; z-index: 1;';

    const h1 = document.createElement('h1');
    h1.innerHTML = `Welcome to <span style="color: #2563EB;">Mohamed Xasan Muuse's</span> Digital Space`;
    h1.style.cssText = `font-size: 48px; margin-bottom: 20px; font-weight: 800; letter-spacing: -1px; color: ${theme.text.primary}; line-height: 1.2;`;
    // Removed float-animation

    const subtitle = document.createElement('p');
    subtitle.innerHTML = `Crafting elegant solutions with pure JavaScript. No frameworks, just logic and creativity.<br><span style="color: ${theme.accent.purple}; font-size: 20px; font-weight: 600; display: block; margin-top: 15px;">Built with 100% Experience & Passion</span>`;
    subtitle.style.cssText = `color: ${theme.text.secondary}; font-size: 18px; margin-bottom: 50px; line-height: 1.7; max-width: 800px; margin-left: auto; margin-right: auto;`;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = 'display: flex; gap: 20px; justify-content: center; max-width: 600px; margin: 0 auto;';

    const startBtn1 = document.createElement('button');
    startBtn1.innerHTML = 'About Me';
    startBtn1.style.cssText = `background: #2563EB; color: white; border: none; padding: 15px 40px; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);`;

    startBtn1.onmouseover = function () {
        this.style.background = '#1D4ED8';
        this.style.transform = 'translateY(-2px)';
    };

    startBtn1.onmouseout = function () {
        this.style.background = '#2563EB';
        this.style.transform = 'translateY(0)';
    };

    startBtn1.onclick = function () {
        showPage('about');
    };

    const startBtn2 = document.createElement('button');
    startBtn2.innerHTML = 'Live Demos';
    startBtn2.style.cssText = 'background: white; color: #333; border: 1px solid #e5e7eb; padding: 15px 40px; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(0,0,0,0.05);';

    startBtn2.onmouseover = function () {
        this.style.background = '#f9fafb';
        this.style.borderColor = '#d1d5db';
        this.style.transform = 'translateY(-2px)';
    };

    startBtn2.onmouseout = function () {
        this.style.background = 'white';
        this.style.borderColor = '#e5e7eb';
        this.style.transform = 'translateY(0)';
    };

    startBtn2.onclick = function () {
        showPage('assignments');
        setTimeout(() => {
            const part2Section = document.querySelector('[style*="Part 2: Object Manipulation Examples"]');
            if (part2Section) {
                part2Section.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    runPart2Examples();
                }, 500);
            }
        }, 100);
    };

    buttonsContainer.appendChild(startBtn1);
    buttonsContainer.appendChild(startBtn2);

    const instruction = document.createElement('div');
    instruction.style.cssText = 'margin-top: 50px; padding: 25px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 15px; border: 1px solid rgba(102, 126, 234, 0.2);';

    const instructionTitle = document.createElement('div');
    instructionTitle.textContent = '� Explore My Work';
    instructionTitle.style.cssText = 'color: #667eea; font-size: 22px; font-weight: 700; margin-bottom: 12px;';

    const instructionText = document.createElement('div');
    instructionText.textContent = 'Select a path above to see my latest projects and code experiments. Built for performance and designed for users.';
    instructionText.style.cssText = 'color: #4a5568; font-size: 16px; line-height: 1.6;';

    instruction.appendChild(instructionTitle);
    instruction.appendChild(instructionText);

    contentWrapper.appendChild(h1);
    contentWrapper.appendChild(subtitle);
    contentWrapper.appendChild(buttonsContainer);
    contentWrapper.appendChild(instruction);

    heroSection.appendChild(gradientOverlay);
    heroSection.appendChild(contentWrapper);
    page.appendChild(heroSection);

    main.innerHTML = '';
    main.appendChild(page);
}
// ============================================
// ASSIGNMENTS PAGE - TWO PARTS
// ============================================
function showAssignments() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';

    // PART 1: Chapter Examples Header
    const part1Header = document.createElement('div');
    part1Header.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 35px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid rgba(255, 255, 255, 0.5);';

    const part1Title = document.createElement('h2');
    part1Title.innerHTML = '📖 <span style="background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Chapter Examples</span> <span style="color: #667eea; font-size: 18px; font-weight: normal;">(9 per Chapter)</span>';
    part1Title.style.cssText = 'color: #2d3748; margin-bottom: 25px; font-size: 28px; font-weight: 700;';

    const chapterTabs = document.createElement('div');
    chapterTabs.style.cssText = 'display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;';

    const chapters = [
        { id: 'ch7', name: 'Chapter 7: Objects', color: '#667eea' },
        { id: 'ch8', name: 'Chapter 8: DOM', color: '#764ba2' },
        { id: 'ch9', name: 'Chapter 9: Events', color: '#f093fb' }
    ];

    const contentArea = document.createElement('div');
    contentArea.id = 'chapterContentArea';

    chapters.forEach(chapter => {
        const tabBtn = document.createElement('button');
        tabBtn.textContent = chapter.name;
        tabBtn.style.cssText = `background: ${chapter.color}; color: white; border: none; padding: 14px 28px; border-radius: 10px; cursor: pointer; font-size: 15px; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.1);`;

        tabBtn.onmouseover = function () {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
        };

        tabBtn.onmouseout = function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        };

        tabBtn.onclick = function () {
            document.querySelectorAll('.chapter-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(chapter.id + 'Content').style.display = 'block';

            chapterTabs.querySelectorAll('button').forEach(btn => {
                btn.style.opacity = '0.7';
            });
            this.style.opacity = '1';
            this.style.transform = 'scale(1.05)';
        };

        chapterTabs.appendChild(tabBtn);
    });

    part1Header.appendChild(part1Title);
    part1Header.appendChild(chapterTabs);
    page.appendChild(part1Header);

    // Create chapter contents (9 examples each)
    createChapter7Examples(contentArea);
    createChapter8Examples(contentArea);
    createChapter9Examples(contentArea);

    page.appendChild(contentArea);




    main.appendChild(page);

    // Activate first chapter by default
    setTimeout(() => {
        chapterTabs.querySelector('button').click();
    }, 100);
}

// ============================================
// CHAPTER 7 EXAMPLES (9 Examples)
// ============================================
function createChapter7Examples(container) {
    const chapter7 = document.createElement('div');
    chapter7.id = 'ch7Content';
    chapter7.className = 'chapter-content';
    chapter7.style.cssText = 'display: block;';

    // Example 1
    chapter7.appendChild(createExample(
        '1. Creating an Object',
        `const car = {type:"Fiat", model:"500", color:"white"};
return JSON.stringify(car);`,
        'Run Example 1',
        function () {
            const car = { type: "Fiat", model: "500", color: "white" };
            addMessage(JSON.stringify(car));
        }
    ));

    // Example 2
    chapter7.appendChild(createExample(
        '2. Accessing Property (Dot)',
        `const person = {firstName:"Mohamed", lastName:"Xasan"};
return person.firstName;`,
        'Run Example 2',
        function () {
            const person = { firstName: "Mohamed", lastName: "Xasan" };
            addMessage(person.firstName);
        }
    ));

    // Example 3
    chapter7.appendChild(createExample(
        '3. Accessing Property (Bracket)',
        `const person = {firstName:"Mohamed", lastName:"Xasan"};
return person["lastName"];`,
        'Run Example 3',
        function () {
            const person = { firstName: "Mohamed", lastName: "Xasan" };
            addMessage(person["lastName"]);
        }
    ));

    // Example 4
    chapter7.appendChild(createExample(
        '4. Adding Property',
        `const person = {firstName:"Mohamed"};
person.age = 20;
return JSON.stringify(person);`,
        'Run Example 4',
        function () {
            const person = { firstName: "Mohamed" };
            person.age = 20;
            addMessage(JSON.stringify(person));
        }
    ));

    // Example 5
    chapter7.appendChild(createExample(
        '5. Deleting Property',
        `const person = {firstName:"Mohamed", age:20};
delete person.age;
return JSON.stringify(person);`,
        'Run Example 5',
        function () {
            const person = { firstName: "Mohamed", age: 20 };
            delete person.age;
            addMessage(JSON.stringify(person));
        }
    ));

    // Example 6
    chapter7.appendChild(createExample(
        '6. Object Method',
        `const person = {
  firstName:"Mohamed",
  lastName:"Xasan",
  fullName: function() {
    return this.firstName + " " + this.lastName + " Muuse";
  }
};
return person.fullName();`,
        'Run Example 6',
        function () {
            const person = {
                firstName: "Mohamed",
                lastName: "Xasan",
                fullName: function () {
                    return this.firstName + " " + this.lastName + " Muuse";
                }
            };
            addMessage(person.fullName());
        }
    ));

    // Example 7
    chapter7.appendChild(createExample(
        '7. Nested Objects',
        `const myObj = {
  name: "Mohamed",
  cars: {car1:"Ford", car2:"BMW"}
};
return myObj.cars.car2;`,
        'Run Example 7',
        function () {
            const myObj = {
                name: "Mohamed",
                cars: { car1: "Ford", car2: "BMW" }
            };
            addMessage(myObj.cars.car2);
        }
    ));

    // Example 8
    chapter7.appendChild(createExample(
        '8. JSON.parse()',
        `const txt = '{"name":"Mohamed Xasan Muuse","age":20,"city":"Mogadishu"}';
const obj = JSON.parse(txt);
return obj.name;`,
        'Run Example 8',
        function () {
            const txt = '{"name":"Mohamed Xasan Muuse","age":20,"city":"Mogadishu"}';
            const obj = JSON.parse(txt);
            addMessage(obj.name);
        }
    ));

    container.appendChild(chapter7);
}

// ============================================
// CHAPTER 8 EXAMPLES (Document Object Model)
// ============================================
function createChapter8Examples(container) {
    const chapter8 = document.createElement('div');
    chapter8.id = 'ch8Content';
    chapter8.className = 'chapter-content';
    chapter8.style.cssText = 'display: none;';

    const domExamples = [
        { title: "getElementById", html: "<div id='d1'>Hello</div>", code: `document.getElementById('d1').innerHTML = "Hello Mohamed Xasan Muuse";` },
        { title: "Get Content", html: "<div id='d2'>Some text</div>", code: `alert(document.getElementById('d2').innerHTML + " - Mohamed");` },
        { title: "Change Color", html: "<div id='d3'>I am Pink</div>", code: `document.getElementById('d3').style.color = "${PRIMARY_COLOR}";` },
        { title: "Change Font Size", html: "<div id='d4'>Small Text</div>", code: `document.getElementById('d4').style.fontSize = "24px";` },
        { title: "Hide Element", html: "<div id='d5'>Now you see me</div>", code: `document.getElementById('d5').style.display = "none";` },
        { title: "Show Element", html: "<div id='d6' style='display:none'>Peekaboo!</div>", code: `document.getElementById('d6').style.display = "block";` },
        { title: "Change Background", html: "<div id='d7'>Background</div>", code: `document.getElementById('d7').style.background = "${SECONDARY_COLOR}";` },
        { title: "Set Attribute", html: "<img id='img1' alt='image' style='width:50px;height:50px;border:1px solid #ccc;'>", code: `document.getElementById('img1').setAttribute('src', 'pro.jpg');` },
        { title: "Get Attribute", html: "<div id='d9' class='myClass'></div>", code: `alert(document.getElementById('d9').getAttribute('class') + " Mohamed");` },
        { title: "Create Element", html: "<div id='d10' style='border:1px dashed #ccc; padding:5px;'></div>", code: `const p = document.createElement("p"); p.innerText="New P by Mohamed"; document.getElementById('d10').appendChild(p);` },
        { title: "Remove Element", html: "<div id='d11' style='border:1px solid #ccc; padding:5px;'><p id='p1'>Remove Me</p></div>", code: `const elm = document.getElementById('p1'); elm.remove();` },
        { title: "Query Selector", html: "<div class='example_dom'>Class Item</div>", code: `document.querySelector('.example_dom').style.color = '${PRIMARY_COLOR}';` },
        { title: "Query Selector All", html: "<span class='test_dom'>1</span> <span class='test_dom'>2</span>", code: `const list = document.querySelectorAll('.test_dom'); list[0].style.color='${PRIMARY_COLOR}'; list[1].style.color='${PRIMARY_COLOR}';` },
        { title: "ClassList Add", html: "<div id='d14' style='padding:5px;border:1px solid #ccc;'>Box</div>", code: `document.getElementById('d14').classList.add('mohamedClass'); alert(document.getElementById('d14').className);` },
        { title: "ClassList Remove", html: "<div id='d15' class='foo' style='padding:5px;border:1px solid #ccc;'>Box</div>", code: `document.getElementById('d15').classList.remove('foo'); alert(document.getElementById('d15').className);` },
        { title: "ClassList Toggle", html: "<div id='d16' class='foo_toggle' style='padding:5px;border:1px solid #ccc;'>Toggle</div>", code: `document.getElementById('d16').classList.toggle('foo_toggle');` },
        { title: "Inner Text vs HTML", html: "<div id='d17'></div>", code: `document.getElementById('d17').innerText = "<b>Mohamed Xasan Muuse</b>";` },
        { title: "Parent Node", html: "<div id='parent_node' style='padding:10px;border:1px solid #ccc;'><div id='child_node'>Child</div></div>", code: `alert(document.getElementById('child_node').parentNode.id + " - Mohamed");` },
        { title: "Child Nodes", html: "<div id='list_nodes'><p>1</p><p>2</p></div>", code: `alert(document.getElementById('list_nodes').children.length);` },
        { title: "Document Title", html: "<i>(No specialized HTML needed)</i>", code: `const oldTitle = document.title; document.title = "Mohamed Xasan Muuse"; alert('Title changed to: ' + document.title); document.title = oldTitle;` }
    ];

    domExamples.forEach((ex, index) => {
        chapter8.appendChild(createExample(
            `${index + 1}. ${ex.title}`,
            ex.code,
            'Run Example',
            function () {
                addMessage('Setting up HTML: ' + ex.html);

                const tempDiv = document.createElement('div');
                tempDiv.style.cssText = 'margin-top: 10px; padding: 15px; background: white; border-radius: 8px; border: 1px dashed #ccc;';
                tempDiv.innerHTML = ex.html;
                main.appendChild(tempDiv);

                setTimeout(() => {
                    try {
                        eval(ex.code);
                        addMessage('Code executed.');
                    } catch (e) {
                        addMessage('Error: ' + e.message);
                    }
                }, 100);
            }
        ));
    });

    container.appendChild(chapter8);
}

// ============================================
// ============================================
// CHAPTER 9 EXAMPLES (Events)
// ============================================
function createChapter9Examples(container) {
    const chapter9 = document.createElement('div');
    chapter9.id = 'ch9Content';
    chapter9.className = 'chapter-content';
    chapter9.style.cssText = 'display: none;';

    const eventExamples = [
        { title: "OnClick Alert", html: "<button id='btn1' style='padding:8px 15px;background:#667eea;color:white;border:none;border-radius:4px;cursor:pointer;'>Click Me</button>", init: () => { document.getElementById('btn1').onclick = () => alert('Clicked by Mohamed!'); } },
        { title: "OnMouseOver", html: "<div id='div2' style='background:#ccc;width:100px;height:50px;display:flex;align-items:center;justify-content:center;color:white;cursor:pointer;border-radius:4px;'>Hover Me</div>", init: () => { document.getElementById('div2').onmouseover = function () { this.style.background = PRIMARY_COLOR; alert('Hovered by Mohamed'); }; } },
        { title: "OnMouseOut", html: "<div id='div3' style='background:#667eea;width:100px;height:50px;display:flex;align-items:center;justify-content:center;color:white;cursor:pointer;border-radius:4px;'>Hover Out</div>", init: () => { document.getElementById('div3').onmouseout = function () { this.style.background = '#ccc'; }; } },
        { title: "OnDarkMode", html: "<button id='btn4' style='padding:8px 15px;background:#2d3748;color:white;border:none;border-radius:4px;cursor:pointer;'>Toggle Dark Mode</button>", init: () => { document.getElementById('btn4').onclick = () => { document.body.style.background = document.body.style.background === 'black' ? '#FFF0F6' : 'black'; alert('Dark Mode toggled by Mohamed'); }; } },
        { title: "OnInput", html: "<input id='in5' placeholder='Type...' style='padding:5px;border:1px solid #ccc;border-radius:4px;'> <span id='out5' style='margin-left:10px;font-weight:bold;'></span>", init: () => { document.getElementById('in5').oninput = function () { document.getElementById('out5').innerText = "Mohamed says: " + this.value; }; } },
        { title: "OnChange", html: "<select id='sel6' style='padding:5px;border:1px solid #ccc;border-radius:4px;'><option>A</option><option>B</option></select>", init: () => { document.getElementById('sel6').onchange = function () { alert('Changed to ' + this.value + " by Mohamed"); }; } },
        { title: "OnSubmit", html: "<form id='f19'><input type='text' placeholder='Search...' style='padding:5px;border:1px solid #ccc;border-radius:4px;'> <button style='padding:5px 10px;background:#667eea;color:white;border:none;border-radius:4px;cursor:pointer;'>Submit</button></form>", init: () => { document.getElementById('f19').onsubmit = (e) => { e.preventDefault(); alert('Form Submitted by Mohamed'); }; } },
    ];

    eventExamples.forEach((ex, index) => {
        chapter9.appendChild(createExample(
            `${index + 1}. ${ex.title}`,
            `// HTML Content: ${ex.html}\n// Event listener setup is automated.`,
            'Setup Example',
            function () {
                addMessage('Setting up Event Demo: ' + ex.title);

                const demoContainer = document.createElement('div');
                demoContainer.style.cssText = 'margin-top: 10px; padding: 15px; background: white; border-radius: 8px; border: 1px dashed #ccc;';
                demoContainer.innerHTML = ex.html;
                main.appendChild(demoContainer);

                try {
                    ex.init();
                    addMessage('Success: Interaction enabled above.');
                } catch (err) {
                    addMessage('Error: ' + err.message);
                }
            }
        ));
    });

    container.appendChild(chapter9);
}

// Helper function to create example cards
function createExample(title, code, buttonText, clickHandler) {
    const example = document.createElement('div');
    example.style.cssText = 'background: white; border-radius: 12px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(102, 126, 234, 0.2); box-shadow: 0 3px 15px rgba(0,0,0,0.08); transition: all 0.3s;';

    example.onmouseover = function () {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
        this.style.borderColor = 'rgba(102, 126, 234, 0.4)';
    };

    example.onmouseout = function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 15px rgba(0,0,0,0.08)';
        this.style.borderColor = 'rgba(102, 126, 234, 0.2)';
    };

    const exampleTitle = document.createElement('h3');
    exampleTitle.textContent = title;
    exampleTitle.style.cssText = 'color: #2d3748; margin-bottom: 15px; font-size: 20px; font-weight: 700;';

    const codeBlock = document.createElement('div');
    codeBlock.textContent = code;
    codeBlock.style.cssText = 'background: #1a202c; color: #68d391; padding: 20px; border-radius: 8px; font-family: "Courier New", monospace; font-size: 13px; margin-bottom: 15px; white-space: pre-wrap; overflow-x: auto; border: 1px solid rgba(102, 126, 234, 0.3); line-height: 1.6;';

    const runBtn = document.createElement('button');
    runBtn.textContent = '▶ ' + buttonText;
    runBtn.style.cssText = 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s; box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);';

    runBtn.onmouseover = function () {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
    };

    runBtn.onmouseout = function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(102, 126, 234, 0.3)';
    };

    // Create output display area (hidden by default)
    const outputArea = document.createElement('div');
    outputArea.style.cssText = 'display: none; margin-top: 15px; padding: 20px; background: #2d3748; border-radius: 8px; border-left: 5px solid #fbbf24; font-family: "Courier New", monospace; font-size: 15px; color: #f7fafc; line-height: 1.8; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';

    runBtn.onclick = function () {
        // Clear previous output
        outputArea.innerHTML = '';
        outputArea.style.display = 'block';

        // Capture output from clickHandler
        const originalAddMessage = window.addMessage;
        let capturedOutput = '';

        // Temporarily override addMessage to capture output
        window.addMessage = function (msg) {
            capturedOutput += msg + '\n';
        };

        // Run the example
        clickHandler();

        // Restore original addMessage
        window.addMessage = originalAddMessage;

        // Display captured output
        if (capturedOutput) {
            outputArea.textContent = capturedOutput.trim();
        } else {
            outputArea.textContent = 'No output';
        }
    };

    example.appendChild(exampleTitle);
    example.appendChild(codeBlock);
    example.appendChild(runBtn);
    example.appendChild(outputArea);

    return example;
}

// ============================================
// PART 2 EXAMPLES the past assinments
// ============================================
function runPart2Examples() {
    addMessage('=== PART 2: OBJECT MANIPULATION EXAMPLES ===');

    // 1: House object
    addMessage('1. HOUSE OBJECT:');
    let house = {
        owner: "Mr. Muaawiya",
        location: "Hodan, Mogadishu",
        rooms: 5
    };
    addMessage("   Owner: " + house.owner);
    addMessage("   Location: " + house.location);
    addMessage("   Rooms: " + house.rooms);

    // 2: Employee object
    addMessage('2. EMPLOYEE OBJECT:');
    let employee = {
        fullName: "Auub yuusuf alasow",
        position: "Software Developer",
        salary: 1600
    };
    addMessage("   Full Name: " + employee.fullName);
    addMessage("   Position: " + employee.position);
    addMessage("   Salary: $" + employee.salary);

    // 3: Constructor Function
    addMessage('3. CAR OBJECT (Constructor):');
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    let car3 = new Car("hoomey", "buruuj V16", 2024);
    addMessage("   Brand: " + car3.brand);
    addMessage("   Model: " + car3.model);
    addMessage("   Year: " + car3.year);

    // 4: Laptop object
    addMessage('4. LAPTOP OBJECT:');
    let laptop = {
        name: "HP elitebook",
        processor: "Core i7",
        year: 2026
    };
    addMessage("   Name: " + laptop.name);
    addMessage("   Processor: " + laptop.processor);
    addMessage("   Year: " + laptop.year);

    // 5: Countries array
    addMessage('5. COUNTRIES LIST:');
    let countries = [
        { name: "Somalia", capital: "Mogadishu", population: 17000000 },
        { name: "kenya", capital: "Nairobi", population: 54000000 },
        { name: "Turkey", capital: "Ankara", population: 85000000 },
        { name: "Qatar", capital: "Doha", population: 2900000 }
    ];
    for (let i = 0; i < countries.length; i++) {
        addMessage("   Country: " + countries[i].name);
        addMessage("   Capital: " + countries[i].capital);
        addMessage("   Population: " + countries[i].population.toLocaleString());
    }

    // Object Manipulation
    addMessage('=== OBJECT MANIPULATION EXAMPLES ===');

    // 1. Change object property
    addMessage('1. House Object (modified):');
    let houseE = { owner: "Mr. Muaawiya", location: "Hodan", rooms: 5 };
    houseE.rooms = 6;
    addMessage("   Rooms (changed from 5 to 6): " + houseE.rooms);

    // 2. Add new property
    addMessage('2. Employee Object (with new property):');
    let employeeE = { fullName: "Ayuub yuusuf", position: "Developer", salary: 1600 };
    employeeE.department = "IT";
    addMessage("   Department (added): " + employeeE.department);

    // 3. Method in object
    addMessage('3. Person Object with Method:');
    let person = {
        name: "AYUUB",
        greet: function () {
            return "Hello " + this.name;
        }
    };
    addMessage("   Method result: " + person.greet());

    // 4. Loop examples
    addMessage('4.1 for...in Loop (House):');
    for (let key in house) {
        addMessage("   " + key + ": " + house[key]);
    }

    // 5. JSON creation
    addMessage('5. JSON String (Student):');
    let student = { name: "JAMIILA", age: 22, major: "ICT" };
    let studentJSON = JSON.stringify(student);
    addMessage("   " + studentJSON);

    // 6. JSON to object
    addMessage('6. Object from JSON:');
    let studentObj = JSON.parse(studentJSON);
    addMessage("   Name: " + studentObj.name);
    addMessage("   Age: " + studentObj.age);
    addMessage("   Major: " + studentObj.major);

    addMessage('=== END OF PART 2 EXAMPLES ===');
}
// ============================================
//COLUMNS LAYOUT
// ============================================
// ============================================
// COLUMNS LAYOUT
// ============================================
// ============================================
// COLUMNS LAYOUT
// ============================================
function showAbout() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';
    page.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 25px; padding: 50px; margin-bottom: 30px; border: 1px solid rgba(255, 255, 255, 0.2); max-width: 1000px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center;';

    // 1. CENTERED PROFILE SECTION
    const profileSection = document.createElement('div');
    profileSection.style.cssText = 'text-align: center; margin-bottom: 50px; width: 100%;';

    // Profile Image Container (Centered & Large)
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = 'width: 250px; height: 250px; margin: 0 auto 30px; position: relative; overflow: hidden; border-radius: 50%; border: 6px solid #2c3e50; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: transform 5s ease-in-out;';

    imageContainer.onmouseover = function () {
        this.style.transform = 'scale(1.15) rotate(360deg)';
    };
    imageContainer.onmouseout = function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    };

    const profileImg = document.createElement('img');
    profileImg.src = 'mo.jpg';
    profileImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';

    imageContainer.appendChild(profileImg);
    profileSection.appendChild(imageContainer);

    // Name and Main Title (Large Text)
    const name = document.createElement('h1');
    name.textContent = 'Mohamed Xasan Muuse';
    name.style.cssText = 'color: #2c3e50; margin-bottom: 15px; font-size: 42px; font-weight: 800; letter-spacing: -1px; text-shadow: 2px 2px 0px rgba(0,0,0,0.05);';

    const role = document.createElement('p');
    role.textContent = 'Networking and Security Student';
    role.style.cssText = 'color: #667eea; font-size: 24px; font-weight: 600; margin-bottom: 25px;';

    // Quick Details
    const quickDetails = document.createElement('div');
    quickDetails.style.cssText = 'display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;';

    const detailsData = [
        { label: 'ID', value: 'C6240407' },
        { label: 'Uni', value: 'Jamhriya University' },
        { label: 'Class', value: 'CN242' }
    ];

    detailsData.forEach(item => {
        const span = document.createElement('span');
        span.innerHTML = `<span style="color: #888; font-size: 18px;">${item.label}:</span> <span style="color: #333; font-weight: bold; font-size: 20px;">${item.value}</span>`;
        span.style.cssText = 'padding: 10px 20px; background: rgba(0,0,0,0.03); border-radius: 50px;';
        quickDetails.appendChild(span);
    });

    profileSection.appendChild(name);
    profileSection.appendChild(role);
    profileSection.appendChild(quickDetails);


    // 2. WIDE INFO GRID (Contact & Skills)
    const infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; width: 100%;';

    // --- Contact Card ---
    const contactCard = document.createElement('div');
    contactCard.style.cssText = 'background: white; padding: 40px; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;';
    contactCard.onmouseover = function () { this.style.transform = 'translateY(-5px)'; };
    contactCard.onmouseout = function () { this.style.transform = 'translateY(0)'; };

    const contactTitle = document.createElement('h3');
    contactTitle.innerHTML = '📞 Contact Info';
    contactTitle.style.cssText = 'color: #2c3e50; margin-bottom: 30px; font-size: 28px; font-weight: 700; border-bottom: 3px solid #2563EB; padding-bottom: 15px; display: inline-block;';

    contactCard.appendChild(contactTitle);

    const contactList = [
        { icon: '✉️', label: 'Email', value: 'mohamedxasan810@gmail.com' },
        { icon: '📱', label: 'Phone', value: '0613173792' },
        { icon: '💻', label: 'GitHub', value: 'Mohamed' },
        { icon: '🎓', label: 'Major', value: 'Networking & Security' },
        { icon: '🚀', label: 'Project', value: 'E-Learning Platform' }
    ];

    contactList.forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed #eee;';

        row.innerHTML = `
            <div style="font-size: 32px; margin-right: 20px;">${item.icon}</div>
            <div>
                <div style="color: #888; font-size: 16px; margin-bottom: 5px;">${item.label}</div>
                ${item.label === 'GitHub'
                ? `<a href="https://github.com/ibraahimdaahir12" target="_blank" style="color: #667eea; font-size: 22px; font-weight: 600; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#764ba2'" onmouseout="this.style.color='#667eea'">${item.value}</a>`
                : `<div style="color: #2c3e50; font-size: 22px; font-weight: 600;">${item.value}</div>`
            }
            </div>
        `;
        contactCard.appendChild(row);
    });

    // --- Skills Card ---
    const skillsCard = document.createElement('div');
    skillsCard.style.cssText = 'background: white; padding: 40px; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;';
    skillsCard.onmouseover = function () { this.style.transform = 'translateY(-5px)'; };
    skillsCard.onmouseout = function () { this.style.transform = 'translateY(0)'; };

    const skillsTitle = document.createElement('h3');
    skillsTitle.innerHTML = '⚡ Technical Skills';
    skillsTitle.style.cssText = 'color: #2c3e50; margin-bottom: 30px; font-size: 28px; font-weight: 700; border-bottom: 3px solid #f5576c; padding-bottom: 15px; display: inline-block;';

    skillsCard.appendChild(skillsTitle);

    const skills = [
        { name: 'Python Programming', level: 95, color: '#3776AB' },
        { name: 'Networking (CCNA)', level: 98, color: '#1BA0D7' },
        { name: 'JavaScript / ES6+', level: 98, color: '#F7DF1E' },
        { name: 'HTML5 & SEO', level: 100, color: '#E34F26' },
        { name: 'CSS3 & Animations', level: 95, color: '#1572B6' }
    ];

    skills.forEach(skill => {
        const skillRow = document.createElement('div');
        skillRow.style.cssText = 'margin-bottom: 25px;';

        const header = document.createElement('div');
        header.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 18px; font-weight: 600; color: #333;';
        header.innerHTML = `<span>${skill.name}</span><span>${skill.level}%</span>`;

        const barBg = document.createElement('div');
        barBg.style.cssText = 'height: 12px; background: #eee; border-radius: 6px; overflow: hidden;';

        const barFill = document.createElement('div');
        barFill.style.cssText = `height: 100%; width: 0%; background: ${skill.color}; border-radius: 6px; transition: width 6s ease-in-out;box-shadow: 0 0 10px ${skill.color}50;`;

        barBg.appendChild(barFill);
        skillRow.appendChild(header);
        skillRow.appendChild(barBg);
        skillsCard.appendChild(skillRow);

        // Animate bars after render
        setTimeout(() => {
            barFill.style.width = skill.level + '%';
        }, 300);
    });

    infoGrid.appendChild(contactCard);
    infoGrid.appendChild(skillsCard);

    page.appendChild(profileSection);
    page.appendChild(infoGrid);

    main.innerHTML = '';
    main.appendChild(page);
}

// ============================================
// CONTACT / REGISTRATION PAGE
// ============================================
function showContact() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';
    page.style.cssText = 'display: flex; justify-content: center; align-items: center; padding: 40px 20px; min-height: 60vh;';

    // Form Container (Glassmorphism)
    const container = document.createElement('div');
    container.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); width: 100%; max-width: 500px; padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.5); position: relative; overflow: hidden;';

    // Decorative Circle
    const circle = document.createElement('div');
    circle.style.cssText = 'position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: #2563EB; border-radius: 50%; opacity: 0.1; filter: blur(20px);';
    container.appendChild(circle);

    const title = document.createElement('h2');
    title.innerHTML = '🚀 Create Account';
    title.style.cssText = 'text-align: center; color: #2d3748; font-size: 32px; font-weight: 800; margin-bottom: 10px; position: relative; z-index: 1;';

    const subtitle = document.createElement('p');
    subtitle.textContent = "Join us today! It's free and easy.";
    subtitle.style.cssText = 'text-align: center; color: #718096; margin-bottom: 30px; font-size: 16px;';

    const form = document.createElement('form');
    form.style.cssText = 'display: flex; flex-direction: column; gap: 20px; position: relative; z-index: 1;';
    form.id = 'regForm';

    // Error Message Container
    const errorMsg = document.createElement('div');
    errorMsg.style.cssText = 'color: #e53e3e; background: #fff5f5; border: 1px solid #fed7d7; padding: 10px; border-radius: 8px; font-size: 14px; display: none; text-align: center;';
    form.appendChild(errorMsg);

    // Input Fields
    const inputsConfig = [
        { id: 'fullName', type: 'text', placeholder: 'Full Name', icon: '👤' },
        { id: 'email', type: 'email', placeholder: 'Email Address', icon: '✉️' },
        { id: 'password', type: 'password', placeholder: 'Password (min 6 chars)', icon: '🔒' },
        { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: '🔐' }
    ];

    const formInputs = {}; // To store references

    inputsConfig.forEach(inputData => {
        const inputGroup = document.createElement('div');
        inputGroup.style.cssText = 'position: relative;';

        const icon = document.createElement('span');
        icon.textContent = inputData.icon;
        icon.style.cssText = 'position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 16px; opacity: 0.7;';

        const input = document.createElement('input');
        input.type = inputData.type;
        input.id = inputData.id;
        input.placeholder = inputData.placeholder;
        input.style.cssText = 'width: 100%; padding: 15px 15px 15px 45px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 15px; outline: none; transition: 0.3s; background: #f8fafc; color: #2d3748; box-sizing: border-box;';

        input.onfocus = function () {
            this.style.borderColor = '#2563EB';
            this.style.background = 'white';
            this.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
        };
        input.onblur = function () {
            this.style.borderColor = '#e2e8f0';
            this.style.background = '#f8fafc';
            this.style.boxShadow = 'none';
        };

        formInputs[inputData.id] = input;

        inputGroup.appendChild(icon);
        inputGroup.appendChild(input);
        form.appendChild(inputGroup);
    });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Register Now';
    submitBtn.style.cssText = 'background: #2563EB; color: white; border: none; padding: 16px; border-radius: 12px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; margin-top: 10px; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);';

    submitBtn.onmouseover = function () {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
    };
    submitBtn.onmouseout = function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
    };

    submitBtn.onclick = function (e) {
        e.preventDefault();

        // Validation Logic
        const fullName = formInputs.fullName.value.trim();
        const email = formInputs.email.value.trim();
        const password = formInputs.password.value;
        const confirmPassword = formInputs.confirmPassword.value;

        // Reset error
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';

        if (!fullName || !email || !password || !confirmPassword) {
            showError('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            showError('Please enter a valid email address.');
            return;
        }

        // Success & Mailto Link
        const subject = `Registration Request: ${fullName}`;
        const body = `New Student Registration:%0D%0A%0D%0AName: ${fullName}%0D%0AEmail: ${email}%0D%0A%0D%0APlease process my registration.`;

        // Show success state
        errorMsg.style.display = 'block';
        errorMsg.style.background = '#f0fff4';
        errorMsg.style.borderColor = '#c6f6d5';
        errorMsg.style.color = '#2f855a';
        errorMsg.innerHTML = '✨ Opening your email app to send...';

        // Redirect
        setTimeout(() => {
            window.location.href = `mailto:mohamedxasan810@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            // Clear inputs
            Object.values(formInputs).forEach(input => input.value = '');
            errorMsg.style.display = 'none';
        }, 1500);
    };

    function showError(msg) {
        errorMsg.textContent = '⚠️ ' + msg;
        errorMsg.style.display = 'block';
        // Shake animation
        form.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 300
        });
    }

    form.appendChild(submitBtn);
    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(form);

    page.appendChild(container);
    main.appendChild(page);
}

// ============================================
// INITIALIZE APPLICATION
// ============================================
// Load saved theme and show home page
loadTheme();
showPage('home');
