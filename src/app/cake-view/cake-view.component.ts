import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';
import { ProductRequest } from '../models/product-request';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CakeRequestService } from '../services/cake-request.service';

@Component({
  selector: 'app-cake-view',
  templateUrl: './cake-view.component.html',
  styleUrls: ['./cake-view.component.css']
})
export class CakeViewComponent implements OnInit {

  submitStatus: boolean = false;
  product? : products;
  productRequest: ProductRequest = {};

  totalPrice: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private productReqService : CakeRequestService,
    private snackBar: MatSnackBar,
    private router: Router){ }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
      let id = param.get("id") ?? 0;
      this.productService.getProduct(+id).subscribe(data =>{
        this.product = data;
        this.submitStatus = false;
      })
    })
  }
  makeRequest(){
    if (this.productRequest.customerName && this.productRequest.customerEmail && this.productRequest.customerPhone) {
      this.productRequest.name = this.product?.productName;
      this.productRequest.totalAmount = this.totalPrice;
      this.productReqService.getSaveProduct(this.productRequest).subscribe({
        next: data => {
          this.snackBar.open("Thankyou For Order", "Success", {
            duration: 5000
          });
          this.router.navigate([""]);
        },
        error: err => {
          alert(err);
        }
      })
    }
  }

  canExit() {
    if (this.productRequest.customerName !== "" || this.productRequest.customerEmail !== "" || this.productRequest.customerPhone !== "") {
      return confirm("Do You Want To Exit Without Ordering The Product ??");
    }
    else {
      return true;
    }
  }

  calculateTotal() {
    if (this.productRequest.quantity && this.product?.price) {
      this.totalPrice = this.productRequest.quantity * this.product.price;
    } else {
      this.totalPrice = 0;
    }
  }
}
