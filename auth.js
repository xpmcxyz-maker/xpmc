// ============================================
// نظام تسجيل الدخول - Authentication System
// ============================================

const AUTH_KEY = 'xpmc_user_session';
const USERS_KEY = 'xpmc_registered_users';

// دالة للتسجيل
function register(email, password, username) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    // التحقق من وجود المستخدم
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return { success: false, message: 'البريد الإلكتروني مسجل بالفعل' };
    }
    
    // إنشاء مستخدم جديد
    const newUser = {
        id: Date.now(),
        email: email,
        password: password, // في مشروع حقيقي، يجب تشفير كلمة المرور
        username: username,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    return { success: true, message: 'تم التسجيل بنجاح!' };
}

// دالة لتسجيل الدخول
function login(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const session = {
            id: user.id,
            email: user.email,
            username: user.username,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem(AUTH_KEY, JSON.stringify(session));
        return { success: true, message: 'تم تسجيل الدخول بنجاح!', user: session };
    }
    
    return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
}

// دالة لتسجيل الخروج
function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'login.html';
}

// التحقق من حالة تسجيل الدخول
function isLoggedIn() {
    const session = localStorage.getItem(AUTH_KEY);
    return session !== null;
}

// الحصول على بيانات المستخدم الحالي
function getCurrentUser() {
    const session = localStorage.getItem(AUTH_KEY);
    return session ? JSON.parse(session) : null;
}

// إضافة مستخدمين تجريبيين للاختبار
function addDemoUsers() {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    if (users.length === 0) {
        // إضافة مستخدمين تجريبيين
        const demoUsers = [
            { id: 1, email: 'admin@xpmc.xyz', password: 'admin123', username: 'Admin', createdAt: new Date().toISOString() },
            { id: 2, email: 'user@test.com', password: 'user123', username: 'مستخدم تجريبي', createdAt: new Date().toISOString() }
        ];
        
        localStorage.setItem(USERS_KEY, JSON.stringify(demoUsers));
        console.log('تم إضافة المستخدمين التجريبيين');
    }
}

// تهيئة النظام
addDemoUsers();

// دالة لعرض معلومات المستخدم في الصفحة الرئيسية
function updateUserUI() {
    const userMenuContainer = document.getElementById('userMenuContainer');
    if (!userMenuContainer) return;
    
    const user = getCurrentUser();
    
    if (user) {
        userMenuContainer.innerHTML = `
            <div class="user-dropdown">
                <button class="user-menu-btn" onclick="toggleUserMenu()">
                    <span class="user-icon">👤</span>
                    <span class="user-name-display">${user.username || user.email}</span>
                    <span class="dropdown-arrow">▼</span>
                </button>
                <div class="user-dropdown-menu" id="userDropdownMenu">
                    <div class="user-dropdown-header">
                        <div class="user-info-section">
                            <span class="user-avatar">👤</span>
                            <div class="user-details">
                                <span class="user-display-name">${user.username || 'مستخدم'}</span>
                                <span class="user-email">${user.email}</span>
                            </div>
                        </div>
                    </div>
                    <div class="menu-section-title">الإعدادات</div>
                    <button class="dropdown-item" onclick="openSettingsModal('password')">
                        <span>🔐</span> تغيير كلمة المرور
                    </button>
                    <button class="dropdown-item" onclick="openSettingsModal('email')">
                        <span>📧</span> تغيير البريد الإلكتروني
                    </button>
                    <button class="dropdown-item" onclick="openSettingsModal('profile')">
                        <span>⚙️</span> إعدادات الحساب
                    </button>
                    <div class="menu-divider"></div>
                    <button class="dropdown-item logout-btn-item" onclick="logout()">
                        <span>🚪</span> تسجيل خروج
                    </button>
                </div>
            </div>
        `;
        
        // Add click outside listener
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    } else {
        userMenuContainer.innerHTML = `
            <a href="login.html" class="login-link">
                <span>🔐</span> تسجيل دخول
            </a>
        `;
    }
}

// Handle click outside dropdown
function handleClickOutside(e) {
    const dropdown = document.querySelector('.user-dropdown');
    const menu = document.getElementById('userDropdownMenu');
    
    if (dropdown && !dropdown.contains(e.target)) {
        if (menu) {
            menu.classList.remove('show');
        }
    }
}

// إظهار/إخفاء قائمة المستخدم
function toggleUserMenu() {
    const menu = document.getElementById('userDropdownMenu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// فتح نافذة الإعدادات
function openSettingsModal(type) {
    const user = getCurrentUser();
    if (!user) return;
    
    let title = '';
    let content = '';
    
    switch(type) {
        case 'password':
            title = '🔐 تغيير كلمة المرور';
            content = `
                <div class="settings-form">
                    <div class="form-group">
                        <label>كلمة المرور الحالية</label>
                        <input type="password" id="currentPassword" placeholder="أدخل كلمة المرور الحالية">
                    </div>
                    <div class="form-group">
                        <label>كلمة المرور الجديدة</label>
                        <input type="password" id="newPassword" placeholder="أدخل كلمة المرور الجديدة">
                    </div>
                    <div class="form-group">
                        <label>تأكيد كلمة المرور</label>
                        <input type="password" id="confirmNewPassword" placeholder="أعد إدخال كلمة المرور">
                    </div>
                    <button class="settings-submit-btn" onclick="changePassword()">حفظ التغييرات</button>
                </div>
            `;
            break;
        case 'email':
            title = '📧 تغيير البريد الإلكتروني';
            content = `
                <div class="settings-form">
                    <div class="form-group">
                        <label>البريد الإلكتروني الحالي</label>
                        <input type="email" value="${user.email}" disabled>
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني الجديد</label>
                        <input type="email" id="newEmail" placeholder="أدخل البريد الإلكتروني الجديد">
                    </div>
                    <div class="form-group">
                        <label>كلمة المرور للتأكيد</label>
                        <input type="password" id="confirmEmailPassword" placeholder="أدخل كلمة المرور">
                    </div>
                    <button class="settings-submit-btn" onclick="changeEmail()">حفظ التغييرات</button>
                </div>
            `;
            break;
        case 'profile':
            title = '⚙️ إعدادات الحساب';
            content = `
                <div class="settings-form">
                    <div class="form-group">
                        <label>اسم المستخدم</label>
                        <input type="text" id="editUsername" value="${user.username || ''}" placeholder="أدخل اسم المستخدم">
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" value="${user.email}" disabled>
                    </div>
                    <button class="settings-submit-btn" onclick="updateProfile()">حفظ التغييرات</button>
                </div>
            `;
            break;
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'settings-modal-overlay';
    modal.id = 'settingsModal';
    modal.onclick = function(e) {
        if (e.target === modal) closeSettingsModal();
    };
    
    modal.innerHTML = `
        <div class="settings-modal">
            <div class="settings-modal-header">
                <h3>${title}</h3>
                <button class="close-modal-btn" onclick="closeSettingsModal()">✕</button>
            </div>
            <div class="settings-modal-body">
                ${content}
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('settingsModal');
    if (existingModal) existingModal.remove();
    
    document.body.appendChild(modal);
    
    // Close dropdown
    const dropdownMenu = document.getElementById('userDropdownMenu');
    if (dropdownMenu) dropdownMenu.classList.remove('show');
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 10);
}

// إغلاق نافذة الإعدادات
function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// تغيير كلمة المرور
function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmNewPassword').value;
    
    const user = getCurrentUser();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex === -1) {
        showSettingsMessage('❌ حدث خطأ', 'error');
        return;
    }
    
    if (users[userIndex].password !== currentPassword) {
        showSettingsMessage('❌ كلمة المرور الحالية غير صحيحة', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showSettingsMessage('❌ يجب أن تكون كلمة المرور 6 أحرف على الأقل', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showSettingsMessage('❌ كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    users[userIndex].password = newPassword;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    showSettingsMessage('✅ تم تغيير كلمة المرور بنجاح', 'success');
    setTimeout(closeSettingsModal, 1500);
}

// تغيير البريد الإلكتروني
function changeEmail() {
    const newEmail = document.getElementById('newEmail').value;
    const confirmPassword = document.getElementById('confirmEmailPassword').value;
    
    const user = getCurrentUser();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex === -1) {
        showSettingsMessage('❌ حدث خطأ', 'error');
        return;
    }
    
    if (users[userIndex].password !== confirmPassword) {
        showSettingsMessage('❌ كلمة المرور غير صحيحة', 'error');
        return;
    }
    
    // Check if email already exists
    const emailExists = users.find(u => u.email === newEmail && u.id !== user.id);
    if (emailExists) {
        showSettingsMessage('❌ البريد الإلكتروني مستخدم بالفعل', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
        showSettingsMessage('❌ البريد الإلكتروني غير صالح', 'error');
        return;
    }
    
    users[userIndex].email = newEmail;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Update session
    const session = JSON.parse(localStorage.getItem(AUTH_KEY));
    session.email = newEmail;
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    
    showSettingsMessage('✅ تم تغيير البريد الإلكتروني بنجاح', 'success');
    setTimeout(() => {
        closeSettingsModal();
        updateUserUI();
    }, 1500);
}

// تحديث الملف الشخصي
function updateProfile() {
    const newUsername = document.getElementById('editUsername').value;
    
    const user = getCurrentUser();
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex === -1) {
        showSettingsMessage('❌ حدث خطأ', 'error');
        return;
    }
    
    if (newUsername.trim().length < 2) {
        showSettingsMessage('❌ يجب أن يكون الاسم 2 أحرف على الأقل', 'error');
        return;
    }
    
    users[userIndex].username = newUsername;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Update session
    const session = JSON.parse(localStorage.getItem(AUTH_KEY));
    session.username = newUsername;
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    
    showSettingsMessage('✅ تم تحديث الملف الشخصي بنجاح', 'success');
    setTimeout(() => {
        closeSettingsModal();
        updateUserUI();
    }, 1500);
}

// عرض رسالة في نافذة الإعدادات
function showSettingsMessage(message, type) {
    const body = document.querySelector('.settings-modal-body');
    if (!body) return;
    
    const existingMsg = body.querySelector('.settings-message');
    if (existingMsg) existingMsg.remove();
    
    const msg = document.createElement('div');
    msg.className = `settings-message ${type}`;
    msg.textContent = message;
    
    const form = body.querySelector('.settings-form');
    if (form) {
        form.insertBefore(msg, form.firstChild);
    }
}

// إغلاق القائمة عند النقر خارجها - improved version
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.user-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        const menu = document.getElementById('userDropdownMenu');
        if (menu) {
            menu.classList.remove('show');
        }
    }
});
