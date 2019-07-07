import {Component, OnInit} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {Localservice} from '../../sysgem/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'bm-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent implements OnInit {

  constructor(private http: Localservice, private router: Router) {
  }

  ngOnInit() {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  saveImage() {
    const formData: any = new FormData();
    let file = this.dataURLtoFile(this.croppedImage, this.imageChangedEvent.target.files[0].name);
    const math = Math.floor((Math.random() * 1000000000) + 1);
    formData.append('image', file, math + '_' + file.name);
    formData.append('image', math + '_' + file.name);
    this.http.uploadImage(formData).subscribe(
      response => {
        if (response.con) {
          this.router.navigate(['admin/gallery']);
        } else {
          console.log('Image Upload Fail');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }
}
