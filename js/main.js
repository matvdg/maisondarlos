const $form = document.querySelector('form#mailing-list')

$form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData($form)

  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {
    // @todo
  }).catch((error) => {
    // @todo
  })
    
})

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BTN2X08VSN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BTN2X08VSN');
</script>