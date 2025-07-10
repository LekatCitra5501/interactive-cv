// src/directives/animateOnScroll.js
const animatedScrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view')
      observer.unobserve(entry.target)
    }
  })
})

export default {
  mounted(el) {
    animatedScrollObserver.observe(el)
  },
}
