class Photographers {
  constructor() {
    this.photographers = [];
    this.tags = [];
  }
  async fetchPhotographers() {
    const _urlApi =
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";
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
  }
  async displayPhotographerHomePage() {
    const containerPhotographers = document.querySelector(".photographers");
    this.photographers.forEach((photographer) => {
      containerPhotographers.append(photographer.createPhotographerItem());
    });
  }
  async displayUniqueTagsHomePage() {
    this.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        this.tags.push(tag);
      });
    });
    const tags = [...new Set(this.tags)];
    const topBarTags = document.querySelector(".topBar__items ul");
    tags.forEach((tag) => {
      const templateTag = `<li><a class="btnLabel tagFilter"><span aria-label="${tag}">#${tag}</span></a></li>`;
      topBarTags.insertAdjacentHTML("beforeend", templateTag);
    });
  }
}
