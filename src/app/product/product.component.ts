import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgUrl: String;
  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.products.push(new Product(7, '第7个商品', 7.99, 3.5 , '这事第7个商品，', ['电子产品', '硬件设备']));
    this.imgUrl = 'http://placehold.it/320x150';
  }

}

