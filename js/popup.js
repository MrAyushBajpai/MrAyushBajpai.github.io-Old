document.addEventListener('DOMContentLoaded', function() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('closeBtn');
  
    closeBtn.addEventListener('click', function() {
      blur.style.display = 'none';
      popup.style.display = 'none';
    });
  
    blur.style.display = 'block';
    popup.style.display = 'block';
  });
  