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
  homePage.displayPhotographers();
})();

/* document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  const btnLabel = document.querySelectorAll(".btnLabel");
  console.log(btnLabel);

  btn1.forEach((btn) => {
    console.log(btn);
  })
  console.log("DOM entièrement chargé et analysé");
  const t = document.querySelectorAll(".location__city")
console.log(t);
  const btn1 = document.getElementsByClassName("tagFilter");
console.log(btn1);
btn1.forEach((btn)=> {
  console.log(btn);
})
console.log(btn1.length);
btn1.addEventListener('click', console.log('hello'))
for( var i = 0; i < btn1.length; i++) {
  console.log('ici');
  btn1[i].addEventListener("click", console.log('hello'))
}
}); */
