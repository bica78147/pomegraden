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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });
    });
  });

  // 기본적으로 첫 번째 섹션 활성화
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }
});