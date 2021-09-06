class ContactForm {
    constructor() {
        this.form = document.getElementById("formContact")
        this.modal = new Modal()
    }
    submitForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const formDataJson = Object.fromEntries(formData.entries())
            console.log(formDataJson);
            this.form.reset()
            this.modal.closeModal()
        })
    }
}
