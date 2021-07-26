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
  createPhotographerItem = () => {
    const url = new URL(`http://127.0.0.1:5501/photographer.html?=${this.id}`);
    /* DOM CONTAINER PHOTOGRAPHER ITEMS */
    const containerPhotographer = document.createElement("div");
    containerPhotographer.classList.add("photographer");
    /* HEADER */
    const headerPhotographer = document.createElement("div");
    headerPhotographer.classList.add("photographer__header");
    headerPhotographer.setAttribute("aria-label", `${this.name}`);
    const linkPhotographer = document.createElement("a");
    linkPhotographer.href = `${url}`;
    headerPhotographer.append(linkPhotographer);
    const imgPhotographer = document.createElement("img");
    imgPhotographer.src = `./assets/Photographers ID Photos/${this.portrait}`;
    imgPhotographer.alt = "profile picture";
    const namePhotographer = document.createElement("h2");
    namePhotographer.append(this.name);
    namePhotographer.role = "this.name";
    linkPhotographer.append(imgPhotographer, namePhotographer);
    /* MAIN */
    const mainPhotographer = document.createElement("div");
    mainPhotographer.classList.add("photographer__main");
    const locationPhotographer = document.createElement("div");
    locationPhotographer.classList.add("location");
    const locationCityPhotographer = document.createElement("p");
    locationCityPhotographer.classList.add("location__city");
    locationCityPhotographer.append(this.city + ", ");
    const locationCountryPhotographer = document.createElement("p");
    locationCountryPhotographer.classList.add("location__country");
    locationCityPhotographer.append(this.country);
    locationPhotographer.append(
      locationCityPhotographer,
      locationCountryPhotographer
    );
    const taglinePhotographer = document.createElement("div");
    taglinePhotographer.classList.add("tagline");
    taglinePhotographer.append(this.tagline);
    const pricePhotographer = document.createElement("div");
    pricePhotographer.classList.add("price");
    pricePhotographer.append(this.price + " €/Jour");
    mainPhotographer.append(
      locationPhotographer,
      taglinePhotographer,
      pricePhotographer
    );
    /* FOOTER */
    const footerPhotographer = document.createElement("div");
    footerPhotographer.classList.add("photographer__footer");
    this.tags.forEach((tag) => {
      const labelPhotographer = document.createElement("a");
      const spanLabel = document.createElement("span");
      labelPhotographer.append(spanLabel);
      spanLabel.setAttribute("aria-label", `${tag}`);
      spanLabel.append("#" + tag);
      labelPhotographer.classList.add("btnLabel");
      footerPhotographer.append(labelPhotographer);
    });
    /* Append container */
    containerPhotographer.append(
      headerPhotographer,
      mainPhotographer,
      footerPhotographer
    );
    return containerPhotographer;
  };
 
  createphotographerBanner = () => {
    const bannerName = document.querySelector(
      ".photographerBanner__info-name h1"
    );
    bannerName.append(this.name);
    const bannerLocation = document.querySelector(
      ".photographerBanner__info-country"
    );
    bannerLocation.append(`${this.country}, ${this.city}`);
    const bannerTagline = document.querySelector(
      ".photographerBanner__info-tagline"
    );
    bannerTagline.append(this.tagline);
    const bannerImg = document.querySelector(".photographerBanner__img img");
    bannerImg.src = `../assets/Photographers ID Photos/${this.portrait}`;
    bannerImg.alt = `${this.name}`;
    const bannerLabels = document.querySelector(
      ".photographerBanner__info-labels"
    );
    this.tags.forEach((tag) => {
      const labelPhotographer = document.createElement("a");
      const spanLabel = document.createElement("span");
      labelPhotographer.append(spanLabel);
      spanLabel.append("#" + tag);
      labelPhotographer.classList.add("btnLabel");
      bannerLabels.append(labelPhotographer);
    });
    /* Sticky Banner */
    const stickyBannerPrice = document.querySelector(".stickyBanner__price p");
    stickyBannerPrice.append(this.price + "€" + "/jour");
    /* Modal contact */
    const modalContactName = document.querySelector(".modal__name");
    modalContactName.append(this.name);
    modalContactName.ariaLabel = `contact me ${this.name}`;
    const modalContactContent = document.querySelector(".modal__content-form");
    modalContactContent.ariaLabel = `contact me ${this.name}`;
  };
  async getName() {
    console.log("ici");
    console.log(this.name);
    return this.name
  }
}
