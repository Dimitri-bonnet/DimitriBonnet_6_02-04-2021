/* import './js/modal' */


const _urlApi =  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json'

/* const fetchPhotographers = () => {
    const response = await fetch(_urlApi);
    const data = await response.json()
    data.forEach(function(photographers){
        console.log(photographers)
    })
}
fetchPhotographers(); */

/* MODAL */
const modal = document.querySelector(".bgGround");
const clossModal = document.querySelector(".modal__close")
const openModal = document.querySelector(".modalOpen")
const lauchModal = () => {
    console.log('openmodal')
    modal.style.display = "block"
}
const closeModal = () => {
    console.log('closemodal')
    modal.style.display = "none"
}
openModal.addEventListener("click", lauchModal)
clossModal.addEventListener("click", closeModal)

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}