import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { EventComponent } from './event/event.component';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: '', redirectTo: 'weather', pathMatch: 'full' },
    { path: 'events', component: EventComponent},
    { path: 'pagination', component: PaginationComponent}

]
@NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{

}