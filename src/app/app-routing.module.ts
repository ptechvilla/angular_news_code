import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuzzComponent } from './buzz/buzz.component';
import { SportComponent } from './sport/sport.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
  {path:'tech',component:TechComponent},
  {path:'buzz',component:BuzzComponent},
  {path:'sport',component:SportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
