import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // @Input()
  private rating: number;

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [false, true, false, true, true];
    this.rating = 5;
  }

}
