import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-dtail',
  templateUrl: './product-dtail.component.html',
  styleUrls: ['./product-dtail.component.css']
})
export class ProductDtailComponent implements OnInit {

  productTitle: string;

  constructor(private routeInfo: ActivatedRoute ) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
  }

}
