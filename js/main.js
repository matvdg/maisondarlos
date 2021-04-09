const $form = document.querySelector("form#mailing-list")

$form.addEventListener("submit", (event) => {
  event.preventDefault()

  const formData = new FormData($form)

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // @todo
    })
    .catch((error) => {
      // @todo
    })
})
