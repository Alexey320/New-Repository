import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      ListComponent,
      ViewComponent,
      ProductEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
