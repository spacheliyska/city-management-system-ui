import {Component, OnInit} from '@angular/core';
import {CityListService} from "../../services/city-list.service";
import {City} from "../../models/city";

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[] = [];
  displayedColumns: string[] = ['name', 'area', 'population', 'density'];
  isLoading: boolean = false;

  constructor(private cityListService: CityListService) { }

  ngOnInit(): void {
    this.cityListService.getCities().subscribe({
      next: data => {
        this.isLoading = true;
        this.cities = data;
      }, error: err => {
        this.isLoading = false;
        console.error(err);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  isPopulationOverMillion(population: number): boolean {
    return population > 1_000_000;
  }
}
