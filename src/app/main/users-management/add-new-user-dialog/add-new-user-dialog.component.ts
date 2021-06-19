import { Component, OnInit } from '@angular/core';
import {Product} from "../../domain/product";

@Component({
  selector: 'app-add-new-user-dialog',
  templateUrl: './add-new-user-dialog.component.html',
  styleUrls: ['./add-new-user-dialog.component.css']
})
export class AddNewUserDialogComponent implements OnInit {

  productDialog: boolean;

  product: Product = {

  };

  submitted: boolean;

  statuses: any[];
  Delete: any;


  constructor() { }

  ngOnInit(): void {
  }


  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {

  }

}
