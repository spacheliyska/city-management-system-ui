import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CityListService} from "../../services/city-list.service";
import {City} from "../../models/city";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit, AfterViewInit {

  cities: MatTableDataSource<City> = new MatTableDataSource<City>([]);
  displayedColumns: string[] = ['name', 'area', 'population', 'density'];
  isLoading: boolean = false;

  constructor(private cityListService: CityListService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.cityListService.getCities().subscribe({
      next: data => {
        this.isLoading = true;
        this.cities.data = data;
      }, error: err => {
        this.isLoading = false;
        console.error(err);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  ngAfterViewInit() {
    this.cities.paginator = this.paginator;
  }

  isPopulationOverMillion(population: number): boolean {
    return population > 1_000_000;
  }
}
