(async function () {
  const homePage = new Homepage();
  await homePage.getPhotogrpahers();
  await homePage.displayPhotographers();
  await homePage.displayUniqueTag();
 })()
