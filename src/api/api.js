import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images',
});


export const imagesAPI = {

  getImages() {
    return instance.get()
  },
  getImgBig(imgId) {
    return instance.get(`/${imgId}`)
  },
  postComment(imgId, comments) {
    return instance.post(`/${imgId}/comments`, {...comments})
},



   
}