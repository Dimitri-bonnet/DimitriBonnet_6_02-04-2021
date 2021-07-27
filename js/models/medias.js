class Medias {
  constructor() {
    this.medias = [];
  }
 async fetchMedias() {
    const _urlApi =
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataMedias = data["media"];
    dataMedias.forEach((media) => {
      this.medias.push(
        new Media(
          media.date,
          media.id,
          media.image,
          media.likes,
          media.photographerId,
          media.price,
          media.tags,
          media.title,
          media.video
        )
      );
    });
  }

}
