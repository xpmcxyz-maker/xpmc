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
