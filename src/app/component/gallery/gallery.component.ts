import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  constructor(private fakerySvc: FakeryService){ }
  photos: any[] = [];

  ngOnInit(): void {
    console.log("USING GALLERY TO OPEN FAKERYSVC");

    this.fakerySvc.getFakeryPhotos().then((photo)=>{
      console.log(photo);
      this.photos = (photo);
      console.log("first photo" + this.photos.at(1));

    }).catch((error)=>{
      console.error(error);
    });
    console.log("HERE IS THE PHOTO DATA "+ this.photos[0]);
  }

}
