import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"]
})
export class ProductAlertComponent implements OnInit {
  @Input() productInner;
  constructor() {}

  ngOnInit() {}
}
