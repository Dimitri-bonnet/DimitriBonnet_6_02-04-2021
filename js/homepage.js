class Homepage {
  constructor() {}
  async displayPhotographers() {
    const photographers = new Photographers();
    await photographers.fetchPhotographers();
    await photographers.displayPhotographerHomePage();
    await photographers.displayUniqueTagsHomePage();
  }
}
(async function () {
  const homePage = new Homepage();
  await homePage.displayPhotographers();
})();

const photographe = document.querySelectorAll(".photographer");
console.log(photographe);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  console.log("DOM entièrement chargé et analysé");
  console.log(photographe);
});
