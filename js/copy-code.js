document.addEventListener('DOMContentLoaded', function() {
  var clipboard = new ClipboardJS('.copy-button');
  
  clipboard.on('success', function(e) {
    e.trigger.textContent = 'Copied!';
    setTimeout(function() {
      e.trigger.textContent = 'Copy';
    }, 2000);
    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
});