import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';
import { ProductRequest } from '../models/product-request';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CakeRequestService } from '../services/cake-request.service';

declare var Razorpay: any;

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

  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: this.totalPrice * 100,
      name: 'Bake My Cake',
      key: 'rzp_test_pVaEM3TS2Oh7JN',
      image: 'data:image/png;base64,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',
      prefill: {
        name: '',
        email: '',
        phone: ''
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions, successCallback, failureCallback)
  }
  
}
