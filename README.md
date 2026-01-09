# README.md

# 🌟 Modern Portfolio Website

Bilgisayar Mühendisi için geliştirilmiş modern, responsive ve kullanıcı dostu portföy web sitesi.

## ✨ Özellikler

- 🎨 Modern ve temiz tasarım
- 🌓 Karanlık/Aydınlık tema desteği
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Hızlı ve optimize edilmiş
- 🎭 Smooth animasyonlar
- 📧 İletişim formu
- 🔍 SEO uyumlu
- ♿ Accessibility (a11y) uyumlu

## 🚀 Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Tarayıcıda açın:
- `index.html` dosyasını tarayıcınızda açın
- Veya Live Server kullanın (VS Code Extension)

## 📁 Dosya Yapısı
```
portfolio-website/
├── index.html          # Ana sayfa
├── about.html          # Hakkımda sayfası
├── skills.html         # Yetenekler sayfası
├── projects.html       # Projeler sayfası
├── contact.html        # İletişim sayfası
├── css/
│   ├── style.css       # Ana stiller
│   ├── animations.css  # Animasyonlar
│   └── responsive.css  # Responsive tasarım
├── js/
│   ├── main.js         # Ana JavaScript
│   ├── theme.js        # Tema yönetimi
│   └── form.js         # Form işlemleri
├── assets/
│   └── images/         # Görseller
├── README.md
└── LICENSE
```

## 🎨 Kişiselleştirme

### 1. Kişisel Bilgileri Değiştirin

Tüm HTML dosyalarında şunları güncelleyin:
- İsim ve unvan
- E-posta adresi
- Telefon numarası
- Sosyal medya linkleri
- CV linki

### 2. Projeleri Ekleyin

`projects.html` dosyasında `.project-card` bölümünü kopyalayıp düzenleyin:
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Proje Adı</h3>
        <p>Proje açıklaması...</p>
        <div class="project-tech">
            <span class="tech-tag">Teknoloji 1</span>
            <span class="tech-tag">Teknoloji 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link github">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="demo-link" class="project-link demo">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 3. Yetenekleri Güncelleyin

`skills.html` dosyasında yetenek yüzdelerini değiştirin:
```html
<div class="skill-item">
    <div class="skill-name">
        <span>Teknoloji Adı</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

### 4. Renkleri Özelleştirin

`css/style.css` dosyasındaki `:root` bölümünde renkleri değiştirin:
```css
:root {
    --accent-primary: #3182ce;  /* Ana vurgu rengi */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Diğer renkler... */
}
```

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0

## 📱 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📧 İletişim

Ahmet Eren Yağlı - [Linkedin](https://www.linkedin.com/in/ahmet-eren-ya%C4%9Fli-730b751ba/)

Proje Linki: [https://github.com/AErenYagli/portfolio-website](https://github.com/AErenYagli/portfolio-website)

## 🙏 Teşekkürler

- [Font Awesome](https://fontawesome.com) - İkonlar için
- [Google Fonts](https://fonts.google.com) - Fontlar için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
```
```