// Basic client-side behaviors for the demo site
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      // Demo: validate and show a thank-you message
      alert('Thanks, ' + (data.get('name')||'player') + '! This demo does not send messages.');
      form.reset();
    });
  }
});
