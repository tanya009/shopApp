import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
 

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopBComponent } from './Shop/shop-b/shop-b.component';
import { ShopBListComponent } from './Shop/shop-b-list/shop-b-list.component';
import {ShopBService} from './shared/shop-b.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopBComponent,
    ShopBListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ShopBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
