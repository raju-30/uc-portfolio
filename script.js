/* TYPED JS */
new Typed(".typing", {
  strings: ["Web Developer", "Full Stack Learner", "Building Projects"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  showCursor: false
});

/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* COPY EMAIL */
function copyEmail() {
  navigator.clipboard.writeText("umachandra0539@gmail.com").then(() => {
    const msg = document.getElementById("copy-msg");
    msg.style.display = "inline";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}
