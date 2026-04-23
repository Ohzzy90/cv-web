function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const icon = document.getElementById('hIcon');

  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    nav.classList.remove('open');
    icon.textContent = '☰';
  } else {
    nav.style.display = 'flex';
    nav.classList.add('open');
    icon.textContent = '✕';
  }
}

function closeMenu() {
  const nav = document.getElementById('navLinks');
  const icon = document.getElementById('hIcon');
  nav.style.display = 'none';
  nav.classList.remove('open');
  icon.textContent = '☰';
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    const nav = document.getElementById('navLinks');
    nav.style.display = '';
    nav.classList.remove('open');
    document.getElementById('hIcon').textContent = '☰';
  }
});
