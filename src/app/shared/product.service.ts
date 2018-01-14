import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5 , '这事第1个商品，', ['电子产品', '硬件设备']),
    new Product(2, '第2个商品', 2.99, 4.0 , '这事第2个商品，', ['图书']),
    new Product(3, '第3个商品', 3.99, 5 , '这事第3个商品，', ['硬件设备']),
    new Product(4, '第4个商品', 4.99, 2.5 , '这事第4个商品，', ['电子产品']),
    new Product(5, '第5个商品', 5.99, 4 , '这事第5个商品，', ['电子产品', '硬件设备']),
    new Product(6, '第6个商品', 6.99, 2 , '这事第6个商品，', ['电子产品', '硬件设备']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-12-22 22.22.22', '李四', 3, '还行'),
    new Comment(2, 1, '2017-12-23 22.22.22', '老五', 1, '可以的，大兄弟'),
    new Comment(3, 1, '2017-12-24 22.22.22', '李六', 5, '还行'),
    new Comment(4, 2
      , '2017-12-25 22.22.22', '李七', 6, '还行'),
  ];

  constructor() { }

  getAllCategorires (): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }
  getProducts(): Product[] {
    return this.products;
  }

  getProduct (id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class Comment {
  constructor (
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ) {

  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ){}
}
