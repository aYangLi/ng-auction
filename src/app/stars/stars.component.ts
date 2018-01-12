import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating: number;

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [false, true, false, true, true];
    // this.rating = 5;
  }

}
