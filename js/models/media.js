
class Media {
  constructor(date, id, image, likes, photographId, price, tags, title, video) {
    this.date = date;
    this.id = id;
    this.img = image;
    this.likes = likes;
    this.photographId = photographId;
    this.price = price;
    this.tags = tags;
    this.title = title;
    this.video = video;
    this.photographerName = {}
  }
  getPhotographeName = (e) => {
   console.log(e);
   console.log('ici');
  /*  photographer.forEach(photographer=> {
      this.photographerName = photographer.name;    
   });
   console.log(this.photographerName);*/
  } 
  createPictureItem = () => {
    const containerImgs = document.querySelector(
      ".containerPhotographerSelected__imgs"
    ); /* <img src="/assets//Ellie-Rose Wilkens/Architecture_Connected_Curves.jpg" alt=""></img> */
    const templateMedia = `
        <div class="picture">
          <div class="picture__img">
            <img class="modalOpenPicture" alt="${this.title}, closeup view" src="../assets/Ellie-Rose Wilkens/${this.img}">
          </div>
          <div class="picture__info">
           <span class="picture__info-name">${this.title}</span>
           <div class="picture__info-info">
            <div class="mr-2">
              <p>${this.price}</p>
            </div>
            <div>
                <p aria-label="">
                ${this.likes}
                <i class="fas fa-heart ml-2"></i>
                </p>
            </div>
           </div>
          </div>
        </div>
      `;
    containerImgs.insertAdjacentHTML("beforeend", templateMedia);
  };
  createPictureItemSlider = () => {
    const containerSliderPicture = document.querySelector(
      ".carouselPictures__pictures"
    );
    const templateItemPictureSlider = `
      <div class="carouselPictures__item">
        <img src="../assets/Ellie-Rose Wilkens/${this.img}"alt="">
        <p class="carouselPictures__name">${this.title}</p>
      </div>
      `;
    containerSliderPicture.insertAdjacentHTML(
      "beforeend",
      templateItemPictureSlider
    );
  };

}



