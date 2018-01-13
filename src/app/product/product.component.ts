import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgUrl: String;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.products.push(new Product(7, '第7个商品', 7.99, 3.5 , '这事第7个商品，', ['电子产品', '硬件设备']));
    this.imgUrl = 'http://placehold.it/320x150';
  }

}

