import { Component, OnInit, ViewChild } from '@angular/core';
import { CakeRequestService } from '../services/cake-request.service';
import { ProductRequest } from '../models/product-request';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cake-request',
  templateUrl: './cake-request.component.html',
  styleUrls: ['./cake-request.component.css']
})
export class CakeRequestComponent implements OnInit {
  constructor(private productReqService: CakeRequestService) { }

  displayedColumns: string[] = ['dateOfOrder', 'customerName', 'customerEmail', 'customerPhone', 'name', 'quantity', 'totalAmount', 'street', 'city', 'postalCode', 'state', 'country'];
  productRequest: ProductRequest[] = [];

  dataSource!: MatTableDataSource<ProductRequest>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.productReqService.getAllProduct().subscribe({
      next: data => {
        this.productRequest = data;
        this.dataSource = new MatTableDataSource(this.productRequest);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: err => {
        alert(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reload() {
    window.location.reload();
  }
}
