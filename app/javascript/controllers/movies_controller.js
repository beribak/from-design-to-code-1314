import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    
  }

  moviesAutocomplete() {
    console.log(this.inputTarget.value)

    fetch(`/movies?query=${this.inputTarget.value}`, { headers: { "Accept": "text/plain" }})
    .then(response => response.text())
    .then((data) => {
      this.listTarget.outerHTML = data 
    })
  }
}
