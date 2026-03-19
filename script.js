/* ══════════════════════════════════════════════
   Sashi Kiran — Portfolio Scripts
   ══════════════════════════════════════════════ */

// ── Scroll Reveal Animation ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('vis'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


// ── Hero Chart Bars ──
const barData = [28, 42, 35, 55, 48, 62, 44, 58, 72, 65, 80, 74];
const barColors = [
  'var(--accent)', 'var(--accent)', 'var(--accent)', 'var(--accent)',
  'var(--accent)', 'var(--accent)', 'var(--violet)', 'var(--violet)',
  'var(--violet)', 'var(--violet)', 'var(--accent)', 'var(--accent)',
];

const chartContainer = document.getElementById('chartBars');

if (chartContainer) {
  barData.forEach((height, index) => {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = height + '%';
    bar.style.background = barColors[index];
    bar.style.opacity = 0.5 + height / 160;
    chartContainer.appendChild(bar);
  });
}


// ── FAQ Accordion ──
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;

    // Close other open items
    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('open');
      }
    });

    // Toggle current item
    item.classList.toggle('open');
  });
});


// ── Smooth Nav Background on Scroll ──
const nav = document.querySelector('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
    }
  });
}
