// Fades elements in once as they enter the viewport. Elements: [data-reveal], optional style="--d:120ms".
export function initReveal(root = document) {
  const els = [...root.querySelectorAll('[data-reveal]:not(.is-in)')];
  if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('is-in'));
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  els.forEach((e) => io.observe(e));
}
