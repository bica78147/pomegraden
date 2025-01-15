// 소셜 미디어 토글
function toggleLinks() {
  const section = document.querySelector('.toggle-section');
  section.style.display =
    section.style.display === 'none' || section.style.display === ''
      ? 'block'
      : 'none';
}

// 모바일 메뉴 토글
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}