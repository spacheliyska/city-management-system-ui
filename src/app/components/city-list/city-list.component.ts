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
  constructor(private cityListService: CityListService) { }

  ngOnInit(): void {
    this.cityListService.getCities().subscribe(res => {
      this.cities = res;
    });
  }

  isPopulationOverMillion(population: number): boolean {
    return population > 1_000_000;
  }
}
