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
  async displayPhotographer() {
    const containerPhotographers = document.querySelector(".photographers");
    this.photographers.forEach((photographer) => {
      containerPhotographers.append(photographer.createPhotographerItem());
    });
  }

  async displayUniqueTag() {
    this.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        this.tags.push(tag);
      });
    });
    const tags = [...new Set(this.tags)];
    const topBarTags = document.querySelector(".topBar__items ul");
    tags.forEach((tag) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const span = document.createElement("span");
      span.classList.add("btnLabel", "tagFilter");
      span.setAttribute("aria-label", `${tag}`);
      a.textContent = `#${tag}`;
      span.addEventListener("click", () => {
        this.filterBytag(tag);
      });
      li.append(span);
      span.appendChild(a);
      topBarTags.appendChild(li);
    });
  }
  filterBytag(tag) {
    const r = this.photographers.filter((photographer) =>
      photographer.tags.includes(tag)
    );
    console.log(r);
    this.photographersFilterBytag = r;
    this.displayPhotographerFilterByTag();
  }
  displayPhotographerFilterByTag() {
    const photographers = document.querySelectorAll(".photographer");
    photographers.forEach((p) => {
      p.classList.add("hiddenPhotographer");
    });
    this.photographersFilterBytag.forEach((p) => {
      const containerPhotographers = document.querySelector(".photographers");
      containerPhotographers.append(p.createPhotographerItem());
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
  await homePage.displayPhotographer();
  await homePage.displayUniqueTag();
  await homePage.displayBtnContenu();
})();
