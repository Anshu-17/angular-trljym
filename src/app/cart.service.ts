import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  // creating an array named items
  items = [];

  constructor(private http:HttpClient) {}
  // add to cart
  addToCart(product) {
    console.log("addToCart(product) from CartService");
    console.log("before " + this.items);
    this.items.push(product);
    console.log("after " + this.items);
  }

  getItems() {
    return this.items;
  }

  //fetching all from CartService
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }
}
