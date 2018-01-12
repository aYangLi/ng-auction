import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDtailComponent } from './product-dtail/product-dtail.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:prodTitle', component: ProductDtailComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDtailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
