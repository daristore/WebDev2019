import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SignComponent } from './components/sign/sign.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:ContactComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'sign',component:SignComponent},
  {path:'reg',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
