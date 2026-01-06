// js/form.js

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Submit butonunu devre dışı bırak
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        
        try {
            // Burada normalde bir API'ye gönderilir
            // Örnek: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
            
            // Simüle edilmiş gecikme
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Form Gönderildi:', data);
            
            // Başarı mesajı göster
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.', 'success');
            
            // Formu temizle
            contactForm.reset();
            
        } catch (error) {
            console.error('Form gönderim hatası:', error);
            showNotification('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
        } finally {
            // Submit butonunu tekrar aktif et
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
    
    // Input validation (gerçek zamanlı)
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateInput(input);
            }
        });
    });
}

// ============================================
// INPUT VALIDATION
// ============================================
function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Boş alan kontrolü
    if (input.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Bu alan zorunludur';
    }
    
    // Email formatı kontrolü
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Geçerli bir email adresi giriniz';
        }
    }
    
    // Minimum karakter kontrolü
    if (input.id === 'message' && value.length < 10) {
        isValid = false;
        errorMessage = 'Mesajınız en az 10 karakter olmalıdır';
    }
    
    // Hata durumunu göster/gizle
    if (!isValid) {
        input.classList.add('error');
        showInputError(input, errorMessage);
    } else {
        input.classList.remove('error');
        removeInputError(input);
    }
    
    return isValid;
}

// ============================================
// ERROR MESSAGE FUNCTIONS
// ============================================
function showInputError(input, message) {
    removeInputError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#f5576c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.3rem';
    errorDiv.textContent = message;
    
    input.parentElement.appendChild(errorDiv);
}

function removeInputError(input) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Mevcut bildirimi kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4facfe' : '#f5576c'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
    notification.innerHTML = `${icon} <span>${message}</span>`;
    
    document.body.appendChild(notification);
    
    // 5 saniye sonra otomatik kaldır
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// AUTO-RESIZE TEXTAREA
// ============================================
const messageTextarea = document.getElementById('message');

if (messageTextarea) {
    messageTextarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}

// ============================================
// FORM ANALYTICS (Opsiyonel)
// ============================================
if (contactForm) {
    // Form başlatma zamanı
    let formStartTime = null;
    
    contactForm.addEventListener('focus', () => {
        if (!formStartTime) {
            formStartTime = Date.now();
        }
    }, true);
    
    contactForm.addEventListener('submit', () => {
        if (formStartTime) {
            const timeSpent = Math.round((Date.now() - formStartTime) / 1000);
            console.log(`📊 Form doldurma süresi: ${timeSpent} saniye`);
        }
    });
}