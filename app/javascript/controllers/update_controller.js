import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="update"
export default class extends Controller {
  static targets = ["btn", "form"]

  connect() {
  }
  
  toggleForm() {
    this.formTarget.classList.toggle("d-none")
  }
  
  updateMovie(event) {
    event.preventDefault()

    const url = this.formTarget.action

    fetch(url, {
      method: "PATCH",
      headers: {"Accept": "text/plain"},
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then((data) => {
      
      this.element.outerHTML = data
    })
  }
}
