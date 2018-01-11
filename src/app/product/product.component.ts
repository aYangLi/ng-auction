import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl: String;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第1个商品', 1.99, 3.5 , '这事第1个商品，', ['电子产品', '硬件设备']),
      new Product(2, '第2个商品', 2.99, 4.0 , '这事第2个商品，', ['图书']),
      new Product(3, '第3个商品', 3.99, 5 , '这事第3个商品，', ['硬件设备']),
      new Product(4, '第4个商品', 4.99, 2.5 , '这事第4个商品，', ['电子产品']),
      new Product(5, '第5个商品', 5.99, 4 , '这事第5个商品，', ['电子产品', '硬件设备']),
      new Product(6, '第6个商品', 6.99, 2 , '这事第6个商品，', ['电子产品', '硬件设备']),
    ];

    this.products.push(new Product(7, '第7个商品', 7.99, 3.5 , '这事第7个商品，', ['电子产品', '硬件设备']));
    this.imgUrl = 'http://placehold.it/320x150';
  }

}

export class Product {
  constructor (
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
