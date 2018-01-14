import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-dtail',
  templateUrl: './product-dtail.component.html',
  styleUrls: ['./product-dtail.component.css']
})
export class ProductDtailComponent implements OnInit {

  private titleFilter: FormControl = new FormControl();

  product: Product;
  comments: Comment[];

  newRating: number = 5;
  newComment: string = '';

  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService,
   ) { }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
