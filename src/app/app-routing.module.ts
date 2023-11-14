import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CityListComponent} from "./components/city-list/city-list.component";

const routes: Routes = [
  {
    path: '',
    component: CityListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
