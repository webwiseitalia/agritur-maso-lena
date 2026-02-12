import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(selector = '.reveal-up', options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(els,
        { y: options.y ?? 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: options.duration ?? 1.2,
          stagger: options.stagger ?? 0.15,
          ease: options.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: options.trigger ?? els[0],
            start: options.start ?? 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export function useParallax(selector, speed = -0.3) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      els.forEach(el => {
        gsap.to(el, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export function useLineReveal(selector = '.sep-line') {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      els.forEach(el => {
        gsap.to(el, {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export function useImageReveal(selector = '.img-reveal') {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      els.forEach((el, i) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.4,
          delay: i * 0.1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export function useStaggerGrid(selector = '.stagger-grid') {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const grids = ref.current.querySelectorAll(selector)
    if (!grids.length) return
    const ctx = gsap.context(() => {
      grids.forEach(grid => {
        const children = grid.children
        gsap.fromTo(children,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.9,
            stagger: { each: 0.12, from: 'start' },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export { gsap, ScrollTrigger }
