class Video {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.video = data.video;
    this.likes = data.likes;
    this.photographId = data.photographerId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
    this.photographerName = "";
  }
  displayItemMedias() {
    const containerMedia = document.querySelector(
      ".containerPhotographerSelected__medias"
    );
    const itemMedia = document.createElement("div")
    itemMedia.classList.add("media")
    const videoMedia = document.createElement("video")
    videoMedia.classList.add("modalOpenMedia", "ignoreTab")
    videoMedia.setAttribute("aria-label", `${this.title}, closeup view`)
    videoMedia.setAttribute("tabindex", "0")
    const sourceVideo = document.createElement("source");
    sourceVideo.src = `/assets/${this.photographerName}/${this.video}`
    videoMedia.addEventListener("click",(e) => {
      const modal = new Modal()
      modal.lauchModal(e)
    })
    videoMedia.addEventListener("keypress", (e) => {    
      if(e.key === "Enter"){
        const modal = new Modal()
        modal.lauchModal(e)
      }

    })
    const mediaInfo = document.createElement("div")
    mediaInfo.classList.add("media__info")
    const titleMedia = document.createElement("p")
    titleMedia.classList.add("mr-2")
    titleMedia.append(this.title)
    const mediaInfoInfo = document.createElement("div")
    mediaInfoInfo.classList.add("media__info-info", "ignoreTab")
    mediaInfoInfo.setAttribute("aria-label", "likes")
    mediaInfoInfo.setAttribute("tabindex","0")
    const likes = document.createElement("p")
    likes.append(this.likes)
    const iconLikes = document.createElement("i")
    iconLikes.classList.add("fas","fa-heart","ml-2")
    videoMedia.append(sourceVideo)
    mediaInfoInfo.append(likes, iconLikes)
    mediaInfo.append(titleMedia, mediaInfoInfo)
    itemMedia.append(videoMedia, mediaInfo)
    containerMedia.appendChild(itemMedia)
  }
  displayItemMediasSlider() {
    const containerSlider = document.querySelector(".carouselMedias__medias");
    const templateVideoSlider = `
    <div class="carouselMedias__item">
      <video controls class="modalOpenMedia" >
        <source src="/assets/${this.photographerName}/${this.video}"
          type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
        </video>
      <p>${this.title}</p>
    </div>
    `;
    containerSlider.insertAdjacentHTML("beforeend", templateVideoSlider);
  }
}
class Image {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.img = data.image;
    this.likes = data.likes;
    this.photographId = data.photographerId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
    this.photographerName = "";
  }
  displayItemMedias() {
    const containerMedia = document.querySelector(
      ".containerPhotographerSelected__medias"
    );
    const itemMedia = document.createElement("div");
    itemMedia.classList.add("media");
    const imgMedia = document.createElement("img");
    imgMedia.classList.add("modalOpenMedia","ignoreTab");
    imgMedia.setAttribute("aria-label", `${this.title}, closeup view`);
    imgMedia.setAttribute("tabindex", "0");
    imgMedia.src = `/assets/${this.photographerName}/${this.img}`;
    imgMedia.alt =`${this.title}`;
    imgMedia.addEventListener('click', (e) => {
      const modal = new Modal()
      modal.lauchModal(e)
    })
    imgMedia.addEventListener("keypress", (e) => {    
      if(e.key === "Enter"){
        const modal = new Modal()
        modal.lauchModal(e)
      }

    })
    const mediaInfo = document.createElement("div");
    mediaInfo.classList.add("media__info");
    const mediaTitle = document.createElement("p");
    mediaTitle.classList.add("mr-2");
    mediaTitle.append(this.title)
    const mediaInfo2 = document.createElement("div")
    mediaInfo2.classList.add("media__info-info", "ignoreTab")
    mediaInfo2.setAttribute("aria-label", "likes")
    mediaInfo2.setAttribute("tabindex", "0")
    const mediaLike = document.createElement("p")
    mediaLike.append(this.likes)
    const mediaLikeIcon = document.createElement("i")
    mediaLikeIcon.classList.add("fas", "fa-heart", "ml-2")
    mediaInfo.append(mediaTitle, mediaInfo2)
    mediaInfo2.append(mediaLike, mediaLikeIcon)
    itemMedia.append(imgMedia, mediaInfo)
    containerMedia.appendChild(itemMedia)
   
  }
  displayItemMediasSlider() {
    const containerSlider = document.querySelector(".carouselMedias__medias");
    const templateImageSlider = `
      <div class="carouselMedias__item" >
        <img src="/assets/${this.photographerName}/${this.img}" tabindex="0" aria-label="${this.title}" alt="${this.title}">
        <p>${this.title}</p>
      </div>
    `;
    containerSlider.insertAdjacentHTML("beforeend", templateImageSlider);
  }
}
class FactoryMedia {
  constructor(media, data) {
    if (media === "image") {
      return new Image(data);
    } else {
      return new Video(data);
    }
  }
}
