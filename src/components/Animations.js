import gsap from "gsap";


export const SidebarOpen = (sideBarRef) => {
    gsap.fromTo(
        sideBarRef?.current,
        { x: 300 },
        { x: 0, duration: 0.7, ease: 'power3.out' })

    gsap.fromTo(
        sideBarRef?.current.children,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.2, stagger: 0.2 })
}


export const SideBarClose = (sideBarRef) => {

    gsap.to(
        sideBarRef?.current,
        { x: 300, duration: 0.7, ease: 'power3.in' })
}