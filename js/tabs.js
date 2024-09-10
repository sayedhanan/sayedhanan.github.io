
  document.addEventListener('DOMContentLoaded', function() {
    const codeBlock = document.getElementById('multilang-{{ now.Unix }}');
    const tabs = codeBlock.querySelectorAll('.lang-tab');
    const blocks = codeBlock.querySelectorAll('.code-block');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const lang = tab.dataset.lang.toLowerCase();
        tabs.forEach(t => t.classList.remove('active'));
        blocks.forEach(b => b.style.display = 'none');
        tab.classList.add('active');
        const activeBlock = codeBlock.querySelector(`.code-block[data-lang="${lang}"]`);
        if (activeBlock) {
          activeBlock.style.display = 'block';
        }
      });
    });
  
    // Activate the first tab by default
    if (tabs.length > 0) {
      tabs[0].click();
    }
  });
