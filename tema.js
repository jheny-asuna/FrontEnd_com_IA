const btn = document.getElementById('theme-toggle');
const body = document.body;
const STORAGE_KEY = 'netflix-theme';

function setTheme(mode) {
  body.classList.remove('light', 'dark');
  body.classList.add(mode);
  btn.textContent = mode === 'dark' ? '☀️' : '🌙';
  localStorage.setItem(STORAGE_KEY, mode);
}

function loadTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  } else {
    setTheme('dark');
  }
}

if (btn) {
  btn.addEventListener('click', () => {
    const current = body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

document.addEventListener('DOMContentLoaded', loadTheme);