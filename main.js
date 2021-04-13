
const _urlApi =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";

/* HOMEPAGE */
  class Homepage {
    constructor() {
      this.photographers = [];
    }
   async getPhotogrpahers() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    /* Photographers */
    const dataPhotographers = data["photographers"];
    dataPhotographers.forEach(photographer => {
      this.photographers.push(new Photographer(
        photographer.id, 
        photographer.name, 
        photographer.portrait, 
        photographer.country,
        photographer.city,
        photographer.price,
        photographer.tagline,
        photographer.tags))
    })
    console.log(this.photographers);
  }
 async displayPhotographers(){
   await this.getPhotogrpahers();
    let allPhotographers = '';
    this.photographers.forEach(photographer => {
      allPhotographers += photographer.displayPhotographer();
    })
    console.log(allPhotographers);
  }
}
/* PHOTOGRAPHER */
class Photographer {
  constructor(id, name, portrait, country, city, price, tagline, tags) {
    this.id = id;
    this.name = name;
    this.portrait = portrait;
    this.country = country;
    this.city = city;
    this.price = price;
    this.tagline = tagline;
    this.tags = tags;
  
  }
  displayPhotographer(){

    return this.name
  }
}


const homePage = new Homepage();
homePage.displayPhotographers();

  

/*   photographers.forEach(function (photographerData) {
    const photographer = new Photographer();
    photographer.id = photographerData.id;
    photographer.name = photographerData.name;
    photographer.portrait = photographerData.portrait;
    photographer.country = photographerData.country;
    photographer.city = photographerData.city;
    photographer.price = photographerData.price;
    photographer.tagline = photographerData.tagline;
    photographer.tags = photographerData.tags;
    photographer.medias = "";

  }); */

  
const creatPhotographerItems = () => {
    /* DOM CONTAINER PHOTOGRAPHER ITEMS */
    const containerPhotographers = document.querySelector(".photographers");
    for (let i = 0; i < 6; i++) {
      /* APPEND TO CONTAINER  */
      const containerPhotographer = document.createElement("div");
      containerPhotographer.classList.add("photographer");
      containerPhotographers.append(containerPhotographer);
      /* HEADER */
      const headerPhotographer = document.createElement("div");
      headerPhotographer.classList.add("photographer__header");
      const linkPhotographer = document.createElement("a");
      headerPhotographer.append(linkPhotographer);
      linkPhotographer.innerHTML = `<img " src="data:image/jpeg;base64,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" ></img>`;
      const namePhotographer = document.createElement("h2");
      namePhotographer.innerHTML = "namephoto";
      linkPhotographer.append( namePhotographer);
      /* MAIN */
      const mainPhotographer = document.createElement("div");
      mainPhotographer.classList.add("photographer__main");
      const locationPhotographer = document.createElement("div");
      locationPhotographer.classList.add("location");
      const locationCityPhotographer = document.createElement("p");
      locationCityPhotographer.classList.add("location__city");
      locationCityPhotographer.innerHTML ='this.city'
      const locationCountryPhotographer = document.createElement("p");
      locationCountryPhotographer.classList.add("location__country");
      locationCountryPhotographer.innerHTML = "country"
      locationPhotographer.append(
        locationCityPhotographer,
        locationCountryPhotographer
      );
      const taglinePhotographer = document.createElement("div");
      taglinePhotographer.classList.add("tagline");
      taglinePhotographer.innerHTML = `<p>TAGLINE</p>`
     
      const pricePhotographer = document.createElement("div");
      pricePhotographer.classList.add("price");
      pricePhotographer.innerHTML = `<p>Price</p>`//TODO créer mon template comme ca ? 
      mainPhotographer.append(
        locationPhotographer,
        taglinePhotographer,
        pricePhotographer,  
      );
      /* FOOTER */
      const footerPhotographer = document.createElement("div");
      footerPhotographer.classList.add("photographer__footer");
      for (let u = 0; u < 4; u++) {
         /*  footerPhotographer.innerHTML = `<a class="btnLabel" href="">test</a>`; */
        const labelPhotographer = document.createElement("a");
        labelPhotographer.classList.add("btnLabel");
        labelPhotographer.innerHTML= '#test'
        
        footerPhotographer.append(labelPhotographer);
      }
      /* Append container */
      containerPhotographer.append(
        headerPhotographer,
        mainPhotographer,
        footerPhotographer
      );
    }
  };


  fetchPhotographers();
  creatPhotographerItems();
  //TODO https://codepen.io/nicolaspatschkowski/pen/poJYedM
  


class Media {
  constructor(photographerID, img, video, tags, likes, date) {
    this.photographerID = photographerID;
    this.img = img;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
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
  if (e.target.classList.contains("modalOpenForm")) {
    contentModalPicture.style.display = "none";
    contentModalForm.style.display = "block";
    console.log("openModalForm");
  } else if (e.target.classList.contains("modalOpenPicture")) {
    contentModalForm.style.display = "none";
    contentModalPicture.style.display = " block";
    console.log("openModalPicture");
  }
};
openModalPicutre.forEach((btn) => btn.addEventListener("click", lauchModal));
openModalForm.forEach((btn) => btn.addEventListener("click", lauchModal));
/* Close modal */
const closeModal = () => {
  modal.style.display = "none";
};
clossModal.forEach((btn) => btn.addEventListener("click", closeModal));

