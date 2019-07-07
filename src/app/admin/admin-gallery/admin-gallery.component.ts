import {Component, OnInit} from '@angular/core';
import {Localservice} from '../../sysgem/localservice';

@Component({
  selector: 'bm-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
  gallery;

  constructor(private http: Localservice) {
  }

  ngOnInit() {
    this.http.getAllGallery().subscribe(
      response => {
        if (response.con) {
          this.gallery = response.gallery;
        } else {
          alert('error');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  cpCopy(image) {
    let selectedImage = 'http://localhost:3000/uploads/' + image;

    let input = document.createElement('input');
    input.value = selectedImage;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}
