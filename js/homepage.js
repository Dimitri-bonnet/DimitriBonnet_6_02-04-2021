class Homepage {
    constructor() {
      this.photographers = [];
      this.tags = [];
    }
    async getPhotogrpahers() {
      const _urlApi = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";
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
      console.log(dataPhotographers);
    }
    async displayPhotographers() {   
      const containerPhotographers = document.querySelector(".photographers");
      this.photographers.forEach((photographer) => {
          containerPhotographers.append(photographer.createPhotographerItem());
      });
    }
  }

  