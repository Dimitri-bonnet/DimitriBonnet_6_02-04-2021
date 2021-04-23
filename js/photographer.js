
  const _urlApi = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";  
class PagePhotographer{
    constructor(){
        this.photographers = []
        /* this.selectedPhotographer = [] */
    }
    
    async getPhotogrpahers() {
      
        const response = await fetch(_urlApi);
        const data = await response.json();
        const dataPhotographers = data["photographers"];
        dataPhotographers.forEach((photographer) => {
          this.photographers.push(
            new Photographer(
              photographer.id,
              photographer.name,
              photographer.portrait,
              photographer.country,
              photographer.city,
              photographer.price,
              photographer.tagline,
              photographer.tags
            )
          );  
        });
        this.filterSelectedPhotographer()  
    }
    async getMedias(){
      const response = await fetch(_urlApi);
      const data = await response.json();
      const dataMedia = data["media"];
      const result = dataMedia.filter((media) => media.photographerId === 82)
      console.log(result);
      result.forEach(media => {
        const mediaLikes = media.likes;
        /* mediaLikes.reduce((a, b)=> a + b,0) */
        console.log(mediaLikes)
        const mediaImg = media.image
        console.log(mediaImg);
      })  
    }
    filterSelectedPhotographer(){
      const queryString = window.location.search;
      const photographerId = queryString.split('?').join('')
      const integerPhotographerId = parseInt(photographerId)
      const result = this.photographers.filter((photographer) => photographer.id === integerPhotographerId)
      console.log(result);
      result.forEach(photographer => {
        /* DOM */
        /* BANNER */
        const bannerName = document.querySelector(".photographerBanner__info-name h1");
        bannerName.append(photographer.name)
        const bannerLocation = document.querySelector(".photographerBanner__info-country");
        bannerLocation.append(`${photographer.country}, ${photographer.city}`)
        const bannerTagline = document.querySelector(".photographerBanner__info-tagline");
        bannerTagline.append(photographer.tagline);
        const bannerImg = document.querySelector(".photographerBanner__img img");
        bannerImg.src = `../assets/Photographers ID Photos/${photographer.portrait}`;
        const bannerLabels = document.querySelector(".photographerBanner__info-labels");
        const tags = photographer.tags;
        console.log(photographer.tags);
        photographer.tags.forEach((tag) => {
          const labelPhotographer = document.createElement("a");
          const spanLabel = document.createElement("span");
          labelPhotographer.append(spanLabel);
          spanLabel.append("#" + tag);
          labelPhotographer.classList.add("btnLabel");
          bannerLabels.append(labelPhotographer)
        })
        /* Sticky Banner */
        const stickyBannerPrice = document.querySelector('.stickyBanner__price p');
        stickyBannerPrice.append(photographer.price +'€' + '/jour')
        /* Modal contact */
        const modalContactName = document.querySelector('.modal__name');
        modalContactName.append(photographer.name)
      })
    }
}

const pagePhotographer = new PagePhotographer();
pagePhotographer.getPhotogrpahers();
pagePhotographer.getMedias();
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
    this.media = [];
  }
  
}
class Media {
    constructor(id, img, video, tags, likes, date) {
      this.id = id
      this.img = img;
      this.video = video;
      this.tags = tags;
      this.likes = likes;
      this.date = date;
    }
  } 


