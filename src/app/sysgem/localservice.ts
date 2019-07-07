import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {map} from 'rxjs/operators';

@Injectable()

export class Localservice {

  link = 'http://localhost:3000/';
  registerUrl = this.link + 'user/register';
  loginUrl = this.link + 'user/login';
  postUrl = this.link + 'admin/product/paginate';
  catUrl = this.link + 'admin/cat/all';
  imageUploadUrl = this.link + 'admin/image/upload';
  galleryUrl = this.link + 'admin/gallery/all';
  productCreateurl = this.link + 'admin/product/create';
  showNav = true;
  token;
  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  constructor(private http: HttpClient) {
  }

  changeAuth(val: boolean) {
    this.isAuth.next(val);
  }

  registerUser(data) {
    return this.http.post(this.registerUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  loginUser(data) {
    return this.http.post(this.loginUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getPost(start, count) {
    let bbc = this.postUrl + '/' + start + '/' + count;
    return this.http.get(bbc).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllCat() {
    return this.http.get(this.catUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  uploadImage(data) {
    return this.http.post(this.imageUploadUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllGallery() {
    return this.http.get(this.galleryUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  createProduct(data) {
    return this.http.post(this.productCreateurl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }
}
