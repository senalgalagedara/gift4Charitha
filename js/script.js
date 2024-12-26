gsap.registerPlugin(ScrollTrigger);

    // Timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".h12098",
        start: "top center",
        end: "bottom top",
        scrub: 1, // Smoothens the animation
        pin: true, // Keeps the element pinned while scrolling
      }
    });

    // Fade out the span first
    tl.to(".sp123141", {
      opacity: 0,
      duration: 1
    });

    // Fade out h1 and p together
    tl.to([".tsle12098", ".p12809"], {
      opacity: 0,
      duration: 1
    }, "-=0.5"); // Overlapping animation with the previous

    // Finally fade out the entire section
    tl.to(".h12098", {
      opacity: 0,
      duration: 1
    });