import { ProductEditComponent } from './product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
