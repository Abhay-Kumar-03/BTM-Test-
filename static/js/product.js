document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".product-container", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".product-image img", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "elastic.out(1, 0.5)"
    });

    gsap.from(".product-info h1, .product-info p, .price, .buy-btn", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out"
    });

    // Button Animation
    const btn = document.querySelector(".buy-btn");
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
    });



    
});

