import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

type Product = {
  title: string,
  desc: string,
  price: string
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  product = {}


  ngOnInit() {this.productService.loadById(1).subscribe((item) =>{
    this.product=item
  })

  }
}
