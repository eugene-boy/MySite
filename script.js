const titles = ["Pogi", "UI/UX Designer", "Web Developer"];
  const element = document.querySelector(".animated-text");

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 1500;

  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      element.textContent = currentTitle.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, erasingSpeed);
      }
    } else {
      element.textContent = currentTitle.substring(0, charIndex++);
      if (charIndex > currentTitle.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
  });