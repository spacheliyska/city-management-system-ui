import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8080/cities');
  }
}
