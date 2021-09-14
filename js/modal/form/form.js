class ContactForm {
    constructor() {
        this.form = document.getElementById("formContact")
        this.modal = new Modal()
        this.errors = document.querySelector(".errorForm")
        this.inputs = document.querySelectorAll(".needVerif")
    }
    submitForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const msgError = document.querySelectorAll(".errorForm p")
            msgError.forEach((err) => {
                err.remove()
            })
            const formData = new FormData(e.target)
            const formDataJson = Object.fromEntries(formData.entries())
            const isValid = this.verifForm()
            if (isValid) {
                this.form.reset()
                this.modal.closeModal()
            }
        })
    }
    verifForm() {
        const regexEmpty = new RegExp(/^[A-Za-z-]+$/);
        this.inputs.forEach((input) => {
            if (!input.value) {
                const errorMsg = `- Veuillez renseigner votre ${input.name}`
                this.errors.append(this.templateError(errorMsg))
            } else if (input.value.length < 3) {
                const errorMsg = `- Veuillez renseigner 3 caractères au minimumn pour le ${input.name}`
                this.errors.append(this.templateError(errorMsg))
            } else if (!regexEmpty.test(input.value)) {
                const errorMsg = `- Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les ${input.name} composés`
                this.errors.append(this.templateError(errorMsg))
            }
        })
        const msgError = document.querySelectorAll(".errorForm p")
        if (msgError.length > 0) {
            return false
        } else {
            return true
        }
    }
    templateError(error) {
        const pError = document.createElement('p')
        pError.textContent = error
        return pError
    }
}
