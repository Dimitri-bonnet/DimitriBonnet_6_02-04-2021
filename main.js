/* import './js/modal' */

const _urlApi =  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json'

const fetchPhotographers = async () => {
    const response = await fetch(_urlApi);
    const data = await response.json()
    /* Photographers */
    const photographers = data['photographers'];
    console.log(photographers.length)
    photographers.forEach(function(photographerData){
        const photographer = new Photographer;
        photographer.id = photographerData.id;
        photographer.name = photographerData.name;
        photographer.portrait = photographerData.portrait;
        photographer.country = photographerData.country;
        photographer.city = photographerData.city;
        photographer.price = photographerData.price;
        photographer.tagline = photographerData.tagline;
        photographer.tags = photographerData.tags;
        photographer.medias = ''; 
    }) 
    const photgraphersList = []
  
    photgraphersList.push(photographers)
    console.log(photgraphersList)
    for(let i=0; i < photographers.length; i++){
        console.log('test');   
    }
    /* Pictures */
        //TODO récuperer les medias des photgraphes en fonction de l'id 
    const pictures = data['media'];
    pictures.forEach(function(pictureData){
        const media = new Media
       /*  console.log(media)
        console.log(pictureData.photographerId) */
        const picturePhotographerId = pictureData.photographerId;
        /* console.log(picturePhotographerId); */
        const picturePhotographerTag = pictureData.tags;
        /* console.log(picturePhotographerTag); */
    })
}
fetchPhotographers();
//TODO Faire une boucle pour intégrer les photgraphes avec photographers.lenght


class Homepage {
    constructor(photographers){
    photographers = [] 
    console.log(photographers)
    }  
}
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
/* MODAL */
/* Dom elements */
const modal = document.querySelector(".bgGround");
const clossModal = document.querySelectorAll(".modal__close");
const contentModalForm = document.querySelector(".modal__content-form");
const contentModalPicture = document.querySelector(".modal__content-picture");
const openModalPicutre = document.querySelectorAll(".modalOpenPicture");
const openModalForm = document.querySelectorAll(".modalOpenForm");
/* OpenModal */
const lauchModal = (e) => {
    modal.style.display = "block";
      if(e.target.classList.contains('modalOpenForm')){
        contentModalPicture.style.display = "none";
        contentModalForm.style.display = "block";
        console.log('openModalForm');
    } else if (e.target.classList.contains('modalOpenPicture')) {
        contentModalForm.style.display = "none";
        contentModalPicture.style.display =" block";
        console.log('openModalPicture');
    }
}
openModalPicutre.forEach((btn) => btn.addEventListener("click", lauchModal));
openModalForm.forEach((btn) => btn.addEventListener("click", lauchModal));
/* Close modal */
const closeModal = () => {
    modal.style.display = "none";
}
clossModal.forEach((btn) =>btn.addEventListener("click", closeModal));
