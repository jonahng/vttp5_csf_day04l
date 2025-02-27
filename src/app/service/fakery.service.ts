import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'; //this is another library that does the same thing as httpclient

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient: HttpClient) { }
  private fakeryURL = 'https://jsonfakery.com/photos';

  async getFakeryPhotos(){
    console.log("TRYING TO GET FAKERY PHOTO");
    try {
      const photos = (await axios.get(this.fakeryURL)).data;
      console.log("GOT THE PHOTOS");
      return photos;

    } catch (error) {
      console.error(error);
      console.log("CANNOT GET THE PHOTOS")
      return null;
    }

  }


}
