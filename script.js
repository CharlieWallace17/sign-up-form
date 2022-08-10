let check = function() {
    if (document.getElementById('p_word').value ===
      document.getElementById('p_word_2').value) {
        document.getElementById('p_word').style.border = 'solid green 3px';
        document.getElementById('p_word_2').style.border = 'solid green 3px';
    } else {
      document.getElementById('p_word').style.border = 'solid red 3px';
      document.getElementById('p_word_2').style.border = 'solid red 3px';
    }
  };