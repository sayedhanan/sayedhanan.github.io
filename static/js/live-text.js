document.addEventListener("DOMContentLoaded", function() {
    const text = "Documenting my learning journey in AI. Join me as I explore, discover, and share insights and experiences from the world of artificial intelligence.";
    const speed = 50;
  
    function typeWriter(element, text, speed) {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          // After typing ends, ensure the cursor continues to blink at the end of the text
          element.classList.add('typing');
        }
      }
      type();
    }
  
    const typewriterElement = document.getElementById('typewriter');
    typeWriter(typewriterElement, text, speed);
  });
  