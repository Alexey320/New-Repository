import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products = [];

 ngOnInit() {
   this.productService.loadAll().subscribe((items: any[]) => {
     this.products = items;
   } );
   }
  }
