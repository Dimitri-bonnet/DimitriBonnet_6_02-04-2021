class Homepage {
  constructor() {
    this.photographers = [];
    this.tags = [];
    this.photographersFilterBytag = [];
  }
  async getPhotographers() {
    const service = new Service();
    const dataPhotographers = await service.getPhotographers();
    this.photographers = dataPhotographers;
  }
  displayPhotographer() {
    const containerPhotographers = document.querySelector(".photographers");
    this.photographers.forEach((photographer) => {
      containerPhotographers.append(photographer.createPhotographerItem());
    });
  }

  displayUniqueTag() {
    this.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        this.tags.push(tag);
      });
    });
    const tags = [...new Set(this.tags)];
    const topBarTags = document.querySelector(".topBar__items");
    tags.forEach((tag) => {
      const span = document.createElement("span");
      span.classList.add("btnLabel", "tagFilter");
      span.setAttribute("aria-label", `${tag}`);
      span.setAttribute("role", "tabpanel")
      span.setAttribute("tabindex", "0")
      span.textContent = `#${tag}`;       
      span.addEventListener("click", () => {
        this.filterBytag(tag);
      });
      span.addEventListener("keypress", (e)=> {
        if(e.key === 'Enter'){
          this.filterBytag(tag)
        }
      })
      topBarTags.append(span);
    });
  }
  filterBytag(tag) {
    const r = this.photographers.filter((photographer) =>
      photographer.tags.includes(tag)
    );
    this.photographersFilterBytag = r;
    this.displayPhotographerFilterByTag();
  }
  displayPhotographerFilterByTag() {
    this.removePhotographer();
    this.photographersFilterBytag.forEach((p) => {
      const containerPhotographers = document.querySelector(".photographers");
      containerPhotographers.append(p.createPhotographerItem());
    });
  }
  removePhotographer() {
    const p = document.querySelectorAll(".photographer");
    p.forEach((p) => {
      p.remove();
    });
  }
  displayBtnContenu() {
    const btn = document.querySelector(".btnStickyTop");
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  }
}
(async function () {
  const homePage = new Homepage();
  await homePage.getPhotographers();
  homePage.displayPhotographer();
  homePage.displayUniqueTag();
  homePage.displayBtnContenu();
})();
