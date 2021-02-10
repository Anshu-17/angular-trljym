import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() :void {
    console.log("ngOnInit()");
    // get the productid from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number (routeParams.get('productId'));

    //get the product with the productId
    // === is equality checks type is equal or not 
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
