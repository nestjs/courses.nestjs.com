window.addEventListener('load', function() {
  const newsletterAddButton = document.querySelector('.newsletter-add');
  const newsletterEmailInput = document.querySelector('#newsletter-email');
  const formRef = document.querySelector('form');
  if (newsletterAddButton && newsletterEmailInput) {
    formRef.addEventListener('submit', function(e) {
      e.preventDefault();

      // styles
      newsletterAddButton.setAttribute('disabled', 'disabled');
      newsletterAddButton.classList.add('btn-disabled');
      newsletterEmailInput.setAttribute('disabled', 'disabled');

      const value = newsletterEmailInput.value;
      const xhr = new XMLHttpRequest();
      const url =
        'https://z93f42xq2l.execute-api.us-east-2.amazonaws.com/Stage/newsletter?token=44168372b763b4b1d32093f6acfba88a';
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        newsletterAddButton.classList.remove('btn-disabled');
        newsletterAddButton.classList.add('btn-success');
        newsletterAddButton.textContent = 'Thank you';
      };
      const data = JSON.stringify({ email: value });
      xhr.send(data);
    });
  }
});
