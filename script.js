function goToPayment(rank, price) {
    localStorage.setItem("rankName", rank);
    localStorage.setItem("rankPrice", price);
    window.location.href = "payment.html";
}

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

function copyIP(ip, element) {
    navigator.clipboard.writeText(ip).then(() => {
        // Add visual feedback to the clicked box
        const ipBox = element || event.currentTarget;
        ipBox.classList.add('copied');
        
        const originalLabel = ipBox.querySelector('.ip-label');
        const originalText = originalLabel.textContent;
        
        // Get translated text
        const copiedText = translations[currentLang]?.copiedLabel || '✓ تم النسخ!';
        originalLabel.textContent = copiedText;
        
        setTimeout(() => {
            ipBox.classList.remove('copied');
            originalLabel.textContent = originalText;
        }, 2000);
        
        // Get translated success message
        const successMsg = translations[currentLang]?.copiedSuccess || '✅ تم نسخ IP السيرفر بنجاح!';
        showToast(successMsg, ip);
    }).catch(() => {
        // Get translated fail message
        const failMsg = translations[currentLang]?.copiedFail || '❌ فشل نسخ IP السيرفر';
        showToast(failMsg, ip);
    });
}

function showToast(message, ip) {
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.innerHTML = `
        <div class="toast-icon">📋</div>
        <div class="toast-content">
            <span class="toast-message">${message}</span>
            <span class="toast-ip">${ip}</span>
        </div>
        <div class="toast-check">✓</div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Particle Animation
function createParticles() {
    const particleCount = 50;
    
    // Falling particles (top to bottom)
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.3;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        particle.style.opacity = opacity;
        
        document.body.appendChild(particle);
    }
    
    // Rising particles (bottom to top)
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-rise';
        
        // Random properties
        const size = Math.random() * 10 + 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 12 + 15;
        const opacity = Math.random() * 0.4 + 0.2;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        particle.style.opacity = opacity;
        
        document.body.appendChild(particle);
    }
}

// Initialize particles when page loads
window.addEventListener('load', function() {
    createParticles();
    // Initialize user UI
    if (typeof updateUserUI === 'function') {
        updateUserUI();
    }
    // Enable touch scroll for navbar
    initNavbarScroll();
});

// Enable smooth horizontal scroll for navbar on mobile
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    nav.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - nav.offsetLeft;
        scrollLeft = nav.scrollLeft;
    });
    
    nav.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    nav.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    nav.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - nav.offsetLeft;
        const walk = (x - startX) * 2;
        nav.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    nav.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - nav.offsetLeft;
        scrollLeft = nav.scrollLeft;
    }, { passive: true });
    
    nav.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - nav.offsetLeft;
        const walk = (x - startX) * 2;
        nav.scrollLeft = scrollLeft - walk;
    }, { passive: true });
}

// Toggle Mobile Menu (Animation only - Nav scrolls horizontally)
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuToggle) {
        menuToggle.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navLinks && navLinks.classList.contains('show')) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    }
});
