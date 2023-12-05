import { Component, Input, OnInit } from '@angular/core';
import { products } from '../models/products';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {
  @Input()
  product!: products;
  constructor() { }

  ngOnInit(): void {
  }
}
