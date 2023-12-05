import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { products } from '../models/products';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
   product: products[] = [];

   constructor(private productServices: ProductService){ }

   ngOnInit(): void {
       this.productServices.getAllProducts().subscribe({
        next: data => {
          this.product = data;
        },
        error: err =>{
          alert('Failed to Fetch Notes Due to Server Error!!!');
        }
       })
   }
  // onSearchText(searchVal: string) {
  //   if (searchVal === '' || !searchVal) {
  //     this.pdoductServices.getAllProducts();
  //   }
  //   else {
  //     this.pdoductServices.getAllProducts().subscribe(
  //       (product) => {
  //         this.product = this.product.filter(item => item.categories?.startsWith(searchVal));
  //         // this.product = this.product.filter(item => item.productName?.startsWith(searchVal));
  //       },
  //       (error) => {
  //         alert('Failed to Fetch Notes Due to Server Error!!')
  //       }
  //     )
  //   };
  // }
  onSearchText(searchVal: string) {
    if (searchVal === '' || !searchVal) {
      this.productServices.getAllProducts().subscribe(
        (products) => {
          this.product = products;
        },
        (error) => {
          alert('Failed to Fetch Products Due to Server Error!!');
        }
      );
    } else {
      this.productServices.getAllProducts().subscribe(
        (products) => {
          this.product = products.filter(item =>
            item.categories?.toLowerCase().includes(searchVal.toLowerCase()) ||
            item.productName?.toLowerCase().includes(searchVal.toLowerCase())
          );
        },
        (error) => {
          alert('Failed to Fetch Products Due to Server Error!!');
        }
      );
    }
  }

  search(selectedValue: string) {
    this.productServices.getAllProducts().subscribe(data => {
      if (selectedValue === 'all') {
        this.product = data;
      } else {
        this.product = data.filter(product => product.categories?.includes(selectedValue));
      }
    });
  }
}
