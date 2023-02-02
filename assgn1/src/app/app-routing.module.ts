import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './services/product.service';
import { ViewComponent } from './view/view.component';

const routes: Routes = [ {path:'',component:HomeComponent},
  {path:'add_product',component:AddComponent},
  {path:'edit_product',component:EditComponent},
  {path:'product-details',component:ViewComponent},
  {path:'home',component:HomeComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:ViewComponent},

  // { path: 'reload',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
