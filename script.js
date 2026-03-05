function goToPayment(rank, price) {
    localStorage.setItem("rankName", rank);
    localStorage.setItem("rankPrice", price);
    window.location.href = "payment.html";
}

function copyIP(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("تم نسخ IP: " + ip);
    });
}

// Language button handler
function initLangBtn() {
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            if (typeof changeLanguage === 'function') {
                changeLanguage();
            } else {
                console.error('changeLanguage function not found');
            }
        });
    }
}

// Run on DOMContentLoaded or immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangBtn);
} else {
    initLangBtn();
}

// حماية الموقع
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 67) { // Ctrl+Shift+C
        return false;
    }
};