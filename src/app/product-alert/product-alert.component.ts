import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"]
})
export class ProductAlertComponent implements OnInit {
  //input property
  @Input() productInner;

  // output is passed from child to Parent
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
