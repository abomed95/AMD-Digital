const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

const openBtn = document.getElementById('openForm');
const formWrap = document.getElementById('formWrap');
const closeBtn = document.getElementById('closeForm');
const ctaRow = document.getElementById('ctaRow');

openBtn.addEventListener('click', () => {
  formWrap.hidden = false;
  formWrap.classList.add('opening');
  openBtn.setAttribute('aria-expanded', 'true');
  ctaRow.hidden = true;
  const first = formWrap.querySelector('input[name="nom"]');
  if (first) first.focus();
  formWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

closeBtn.addEventListener('click', () => {
  formWrap.hidden = true;
  formWrap.classList.remove('opening');
  ctaRow.hidden = false;
  openBtn.setAttribute('aria-expanded', 'false');
  openBtn.focus();
});

document.querySelectorAll('a[href="#contact"]').forEach(a => {
  a.addEventListener('click', () => {
    setTimeout(() => { if (formWrap.hidden) openBtn.click(); }, 420);
  });
});
