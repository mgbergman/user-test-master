import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor} from './vendor.class';

const baseurl = "http://localhost:8080/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient
  ) { }

    list(): Observable<Vendor[]> {
      return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
    }


}
