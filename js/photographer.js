console.log('photographer');

class PagePhotographer{
    constructor(){
        this.pagePhotographer = {}
    }
    async getPhotogrpahers() {
        const _urlApi =
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";  
        const response = await fetch(_urlApi);
        const data = await response.json();
        console.log(data);
    }
}
const pagePhotographer = new PagePhotographer();
pagePhotographer.getPhotogrpahers()



/* class Media {
    constructor(photographerID, img, video, tags, likes, date) {
      this.photographerID = photographerID;
      this.img = img;
      this.video = video;
      this.tags = tags;
      this.likes = likes;
      this.date = date;
    }
  } 
  
*/
const divResult = document.getElementById('result');
console.log(divResult);
divResult.append('Ici mon photographe selectionné')