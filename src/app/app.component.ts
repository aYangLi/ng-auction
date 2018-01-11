import { Component } from '@angular/core';
// 组件元数据装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 控制器
export class AppComponent {
  title = 'angular 入门实战';
}
