function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    // smooth: true,
    // lerp: 0.06,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector(".body"),
  //   smooth: true,
  //   lerp: 0.06,
  // });
}
locomotiveScroll();

function cursor() {
  let body = document.querySelector("body");
  let cursor = document.querySelector(".cursor");
  let li1 = document.querySelector("#list1");
  let li2 = document.querySelector("#list2");
  let li3 = document.querySelector("#list3");
  let li4 = document.querySelector("#list4");
  let li5 = document.querySelector("#list5");
  let li6 = document.querySelector("#list6");
  let btn = document.querySelector("#btn1");
  let content = document.querySelector(".description");
  let content2 = document.querySelector(".description2");
  let content3 = document.querySelector(".description3");
  let content4 = document.querySelector(".description4");
  let content5 = document.querySelector(".description5");
  let dot1 = document.querySelector(".dot1");
  let dot2 = document.querySelector(".dot2");
  let dot3 = document.querySelector(".dot3");
  let dot4 = document.querySelector(".dot4");

  body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 1,
    });
  });
  li1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li1, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  li2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li2, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  li3.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li3, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  li4.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li4.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li4, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  li5.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li5.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li5, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  li6.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  li6.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(li6, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  btn.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  btn.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  dot1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  dot1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(dot1, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  dot2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  dot2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(dot2, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  dot3.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  dot3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(dot3, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
  dot4.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      border: " 1px solid rgb(255, 255, 255)",
      height: "60px",
      width: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  dot4.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      backgroundColor: "rgba(255, 255, 255, 1)",
    });
    gsap.to(dot4, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });

  content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "250px",
      width: "250px",
      background: "radial-gradient(circle, white,transparent,transparent)",
      zIndex: -1,
    });
  });
  content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      background: "rgba(255,255,255,1)",
      zIndex: 1,
    });
  });
  content2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "250px",
      width: "250px",
      background: "radial-gradient(circle, white,transparent,transparent)",
      zIndex: -1,
    });
  });
  content2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      background: "rgba(255,255,255,1)",
      zIndex: 1,
    });
  });
  content3.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "250px",
      width: "250px",
      background: "radial-gradient(circle, white,transparent,transparent)",
      zIndex: -1,
    });
  });
  content3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      background: "rgba(255,255,255,1)",
      zIndex: 1,
    });
  });
  content4.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "250px",
      width: "250px",
      background: "radial-gradient(circle, white,transparent,transparent)",
      zIndex: -1,
    });
  });
  content4.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      background: "rgba(255,255,255,1)",
      zIndex: 1,
    });
  });
  content5.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "250px",
      width: "250px",
      background: "radial-gradient(circle, white,transparent,transparent)",
      zIndex: -1,
    });
  });
  content5.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      border: " none",
      height: "15px",
      width: "15px",
      background: "rgba(255,255,255,1)",
      zIndex: 1,
    });
  });
}
cursor();

function scroll() {
  gsap.to(".head1", {
    translateX: "30%",
    duration: 3,
    scrollTrigger: {
      trigger: ".head1",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".head2", {
    translateX: "30%",
    duration: 3,
    scrollTrigger: {
      trigger: ".head2",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".head3", {
    translateX: "30%",
    duration: 3,
    scrollTrigger: {
      trigger: ".head3",
      scroller: "#main",
      start: "top -30%",
      end: "bottom -100%",
      scrub: 2,
    },
  });
  gsap.to(".head4", {
    translateX: "30%",
    duration: 3,
    scrollTrigger: {
      trigger: ".head4",
      scroller: "#main",
      start: "top -30%",
      end: "bottom -100%",
      scrub: 2,
    },
  });
  gsap.from("#first", {
    x: -50,
    scrollTrigger: {
      trigger: "#first",
      scroller: "#main",
      start: "top 80%",
      end: "bottom 10%",
      scrub: 2,
    },
  });
  gsap.from("#last", {
    x: 50,
    scrollTrigger: {
      trigger: "#last",
      scroller: "#main",
      start: "top 80%",
      end: "bottom 10%",
      scrub: 2,
    },
  });
  gsap.from("#message", {
    y: 50,
    scrollTrigger: {
      trigger: "#last",
      scroller: "#main",
      start: "top 80%",
      end: "bottom 10%",
      scrub: 2,
    },
  });
  gsap.to(".cards", {
    transform: "translateY(-80%)",
    scrollTrigger: {
      trigger: ".experience",
      scroller: "#main",
      start: "top 0%",
      end: "bottom -80%",
      pin: true,
      scrub: 2,
    },
  });

  gsap.to("#skill1:nth-child(1) svg circle:nth-child(2)", {
    strokeDashoffset: " calc(440 - (440 * 93) / 100)",
    duration: 2,
    scrollTrigger: {
      trigger: "#skill1:nth-child(1) svg circle:nth-child(2)",
      scroller: "#main",
      start: "top 85%",
      end: "bottom",
    },
  });
  gsap.to("#skill2:nth-child(1) svg circle:nth-child(2)", {
    strokeDashoffset: " calc(440 - (440 * 79) / 100)",
    duration: 2,
    scrollTrigger: {
      trigger: "#skill2:nth-child(1) svg circle:nth-child(2)",
      scroller: "#main",
      start: "top 85%",
      end: "bottom",
    },
  });
  gsap.to("#skill3:nth-child(1) svg circle:nth-child(2)", {
    strokeDashoffset: " calc(440 - (440 * 95) / 100)",
    duration: 2,
    scrollTrigger: {
      trigger: "#skill3:nth-child(1) svg circle:nth-child(2)",
      scroller: "#main",
      start: "top 85%",
      end: "bottom",
    },
  });

  gsap.from("#head", {
    y: 80,
    duration: 2,
    scrollTrigger: {
      trigger: "#head",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.from("#btn1", {
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#btn1",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.from(".box1", {
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".box1",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.from(".box2", {
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".box2",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.from(".box3", {
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".box3",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.from(".box4", {
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".box4",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".box1", {
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
    duration: 1,
    scrollTrigger: {
      trigger: ".box1",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".box2", {
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
    duration: 1,
    scrollTrigger: {
      trigger: ".box2",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".box3", {
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
    duration: 1,
    scrollTrigger: {
      trigger: ".box3",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
  gsap.to(".box4", {
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
    duration: 1,
    scrollTrigger: {
      trigger: ".box4",
      scroller: "#main",
      start: "top 85%",
      end: "bottom ",
      scrub: 2,
    },
  });
}
scroll();

function movingEffect() {
  let btn = document.querySelector("#btn1");

  btn.addEventListener("mousemove", function (dets) {
    let dims = btn.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(btn, {
      x: lerp(-30, 30, zeroone),
      y: lerp(-30, 30, onetwo),
      duration: 1,
    });
  });

  let dot1 = document.querySelector(".dot1");

  dot1.addEventListener("mousemove", function (dets) {
    let dims = dot1.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(dot1, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let dot2 = document.querySelector(".dot2");

  dot2.addEventListener("mousemove", function (dets) {
    let dims = dot2.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(dot2, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let dot3 = document.querySelector(".dot3");

  dot3.addEventListener("mousemove", function (dets) {
    let dims = dot3.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(dot3, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let dot4 = document.querySelector(".dot4");

  dot4.addEventListener("mousemove", function (dets) {
    let dims = dot4.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(dot4, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });

  let li1 = document.querySelector("#list1");

  li1.addEventListener("mousemove", function (dets) {
    let dims = li1.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li1, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let li2 = document.querySelector("#list2");

  li2.addEventListener("mousemove", function (dets) {
    let dims = li2.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li2, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let li3 = document.querySelector("#list3");

  li3.addEventListener("mousemove", function (dets) {
    let dims = li3.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li3, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let li4 = document.querySelector("#list4");

  li4.addEventListener("mousemove", function (dets) {
    let dims = li4.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li4, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let li5 = document.querySelector("#list5");

  li5.addEventListener("mousemove", function (dets) {
    let dims = li5.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li5, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
  let li6 = document.querySelector("#list6");

  li6.addEventListener("mousemove", function (dets) {
    let dims = li6.getBoundingClientRect();
    let xstart = dims.x;
    let ystart = dims.y;
    let xend = dims.x + dims.width;
    let yend = dims.y + dims.height;
    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    let onetwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    function lerp(start, end, amount) {
      return start + (end - start) * amount;
    }

    gsap.to(li6, {
      x: lerp(-10, 10, zeroone),
      y: lerp(-10, 10, onetwo),
      duration: 1,
    });
  });
}
movingEffect();

function cardGrid() {
  let container = document.getElementById("container");
  for (var i = 0; i < 35; i++) {
    let box = document.createElement("span");
    container.appendChild(box);
  }
  let container2 = document.getElementById("container2");
  for (var i = 0; i < 42; i++) {
    let box = document.createElement("span");
    container2.appendChild(box);
  }
  let container3 = document.getElementById("container3");
  for (var i = 0; i < 49; i++) {
    let box = document.createElement("span");
    container3.appendChild(box);
  }
  let container4 = document.getElementById("container4");
  for (var i = 0; i < 42; i++) {
    let box = document.createElement("span");
    container4.appendChild(box);
  }
  let container5 = document.getElementById("container5");
  for (var i = 0; i < 35; i++) {
    let box = document.createElement("span");
    container5.appendChild(box);
  }

  let card = document.getElementById("card");
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = (mouseX / cardWidth - 0.5) * 30; //
    const rotateX = -(mouseY / cardHeight - 0.5) * 30; //

    card.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(20px)
            `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    card.style.transition = "all 0.1s ease";
  });
}
cardGrid();

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main");

    // Add fade-out animation to loader
    loader.classList.add("fade-out");

    // When fade-out animation ends, hide loader and show content
    loader.addEventListener("animationend", function () {
      loader.style.display = "none";
      // content.classList.add("show");
      content.style.display = "block";
      document.body.style.overflow = "auto";
    });
  }, 2000);
});
