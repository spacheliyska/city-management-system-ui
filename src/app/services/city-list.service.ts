import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/city";

const cityManagementCoreUrl: string = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${cityManagementCoreUrl}/cities`);
  }

  sortCities(field: string, direction: string): Observable<City[]> {
    return this.http.get<City[]>(`${cityManagementCoreUrl}/cities?sortBy=${field}&orderDir=${direction}`);
  }

  filterCitiesByName(cityName: string): Observable<City[]> {
    return this.http.get<City[]>(`${cityManagementCoreUrl}/cities?filter=${cityName}`);
  }
}
