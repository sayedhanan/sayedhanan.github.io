document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Prism.js
    Prism.highlightAll();
  
    // Initialize clipboard.js for copy functionality
    new ClipboardJS('.copy-button');
  
    // Optional: Add feedback for copy action
    document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', () => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      });
    });
  });