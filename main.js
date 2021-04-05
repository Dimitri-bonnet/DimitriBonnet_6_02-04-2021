/* import './js/modal' */
 class Photographer {
    constructor(id, name, portrait, country, city, price, tagline, tags, medias){
        this.id = id
        this.name = name
        this.portrait = portrait
        this.country = country
        this.city = city
        this.price = price
        this.tagline = tagline
        this.tags = tags
        this.medias = medias
    }
 /*    id:number;
    name:string;
    portrait:string;
    country:string;
    city:string;
    price: number;
    tagline:string;
    tags:Array<string>;
    picures:Array<Media>; */
}
 class Media {
    constructor(photographerID, img,video, tags, likes, date){
        this.photographerID = photographerID
        this.img = img
        this.video = video
        this.tags = tags
        this.likes = likes
        this.date = date
    }
}
/* FETCH JSON FILE */
const _urlApi =  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json'
const fetchPhotographers = async () => {
    const response = await fetch(_urlApi);
    const data = await response.json()
    /* Photographers */
    const photographers = data['photographers'];
    photographers.forEach(function(photographer){
       /*  console.log(photographer) */
        const photographerId = photographer.id;
        console.log(photographerId );
        const photographerName = photographer.name;
        console.log(photographerName);
        const photographerImg = photographer.portrait;
        console.log(photographerImg);
        const photographerCountry = photographer.country;
        console.log(photographerCountry);
        const photographerCity = photographer.city
        console.log(photographerCity);
        const photographerPrice = photographer.price;
        console.log(photographerPrice);
        const photographerTagline = photographer.tagline;
        console.log(photographerTagline);
        photographer.tags.forEach(function(tag){
            const photographerTags = tag
            console.log(photographerTags)
        })   
    }) 
    /* Pictures */
    const pictures = data['media'];
    pictures.forEach(function(picture){
        const picturePhotographerId = picture.photographerId;
        console.log(picturePhotographerId);
        const picturePhotographerTag = picture.tags;
        console.log(picturePhotographerTag);
    })
}
fetchPhotographers();

/* MODAL */
/* Dom elements */
const modal = document.querySelector(".bgGround");
const clossModal = document.querySelector(".modal__close");
const contentModalForm = document.querySelector(".modal__content-form");
const contentModalPicture = document.querySelector(".modal__content-picture");
const openModalPicutre = document.querySelectorAll(".modalOpenPicture");
const openModalForm = document.querySelectorAll(".modalOpenForm");

/* Open modal with multiple button */
const lauchModal = () => {
    modal.style.display = "block"
    if( openModalForm){
        contentModalPicture.style.display = "none";
        console.log('openModalForm');
    } else if (openModalPicutre){
        contentModalForm.style.display = "none";
        console.log('openModalPicture');
    }
}
openModalPicutre.forEach((btn) => btn.addEventListener("click", lauchModal))
openModalForm.forEach((btn) => btn.addEventListener("click", lauchModal));
/* Close modal */
const closeModal = () => {
    console.log('closemodal')
    modal.style.display = "none"
}
clossModal.addEventListener("click", closeModal)

/* DROPDOWN FILTER */
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