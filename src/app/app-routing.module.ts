import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
