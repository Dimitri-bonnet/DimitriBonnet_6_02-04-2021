const _urlApi =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";

class Service {
  constructor() {}
  async getPhotographers() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataPhotographers = data["photographers"];
    const photographers = [];
    dataPhotographers.forEach((photographer) => {
      photographers.push(
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
    return photographers;
  }
  async getMedias() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataMedias = data["media"];
    const medias = [];
    dataMedias.forEach((media) => {
      let _media = null;
      if (media.image != undefined) {
        _media = new FactoryMedia("image", media);
      } else {
        _media = new FactoryMedia("video", media);
      }
      medias.push(_media);
    });
    return medias;
  }
}
