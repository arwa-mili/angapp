import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [
  {path: 'about',component : AboutComponent},
  {path: 'contacts',component : ContactComponent},
 
  {path: 'meteo',component : MeteoComponent},
  {path:'',redirectTo: '/about',pathMatch : 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
