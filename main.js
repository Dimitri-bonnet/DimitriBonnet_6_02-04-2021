/* HOMEPAGE */
class Homepage {
  constructor() {
    this.photographers = [];
    this.selectedPhotographer = {};
  }
  async getPhotogrpahers() {
    const _urlApi =
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";
    const response = await fetch(_urlApi);
    const data = await response.json();
    /* Photographers */
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
  }
  async displayPhotographers() {
    await this.getPhotogrpahers();
    /* FOREACH ON PHOTOGRAPHERS*/
    this.photographers.forEach((photographer) => {
      photographer.createPhotographerItems();
    });
  }
}
const homePage = new Homepage();
homePage.displayPhotographers();
/* homePage.displayTopBarTags(); */

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
  createPhotographerItems = () => {
    /* DOM CONTAINER PHOTOGRAPHER ITEMS */
    const containerPhotographers = document.querySelector(".photographers");
    /* APPEND TO CONTAINER  */
    const containerPhotographer = document.createElement("div");
    containerPhotographer.classList.add("photographer");
    containerPhotographers.append(containerPhotographer);
    /* HEADER */
    const headerPhotographer = document.createElement("div");
    headerPhotographer.classList.add("photographer__header");
    headerPhotographer.setAttribute("aria-label", `${this.name}`);
    const linkPhotographer = document.createElement("a");
    linkPhotographer.addEventListener("click", homePage.selectedPhtotographer);
    linkPhotographer.href = `./photographer.html/?${this.id}`
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
  };
}
