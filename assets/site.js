const menu = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() {
  mobileNav?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Open menu');
}
menu?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
const currentFile = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlinks a, .mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === currentFile) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    const mainImage = document.getElementById('gallery-image');
    mainImage.src = `assets/images/${button.dataset.photo}.jpg`;
    mainImage.alt = button.dataset.caption;
    document.getElementById('gallery-caption').textContent = button.dataset.caption;
    document.querySelectorAll('[data-photo]').forEach(thumb => {
      const selected = thumb === button;
      thumb.classList.toggle('active', selected);
      thumb.setAttribute('aria-pressed', String(selected));
    });
  });
});
document.querySelectorAll('form[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    message.textContent = 'Preview only: your details have not been sent or saved. Enquiries will be available once this form is connected.';
    message.style.color = '#4a5568';
  });
});
