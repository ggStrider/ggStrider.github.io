// Theme toggle with system preference
(function themeToggle() {
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const storageKey = 'theme-preference';

    const getPref = () => localStorage.getItem(storageKey);
    const setPref = (val) => localStorage.setItem(storageKey, val);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(pref) {
        if (pref === 'dark') {
            root.setAttribute('data-theme', 'dark');
            if (btn) btn.textContent = 'Light';
        } else if (pref === 'light') {
            root.setAttribute('data-theme', 'light');
            if (btn) btn.textContent = 'Dark';
        } else {
            root.setAttribute('data-theme', 'auto');
            if (btn) btn.textContent = systemDark.matches ? 'Light' : 'Dark';
        }
    }

    function init() {
        const saved = getPref();
        applyTheme(saved || 'auto');
        systemDark.addEventListener('change', () => {
            const current = getPref();
            if (!current || current === 'auto') applyTheme('auto');
        });
        if (btn) {
            btn.addEventListener('click', () => {
                const current = root.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
                applyTheme(next);
                setPref(next);
            });
        }
    }
    init();
})();

// Smooth scroll for same-page anchors
(function smoothScroll() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', targetId);
    });
})();

// Back-to-top button
(function backToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    const toggle = () => {
        if (window.scrollY > 300) btn.classList.add('show'); else btn.classList.remove('show');
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// Current year in footer
(function currentYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
})();