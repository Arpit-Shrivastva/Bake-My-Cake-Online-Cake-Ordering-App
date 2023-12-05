import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { products } from '../models/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  textVal: string = "";
  product: products[] = [];

  constructor(){ }

  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

  }
  searchNote() {
    this.searchText.emit(this.textVal);
  }
}