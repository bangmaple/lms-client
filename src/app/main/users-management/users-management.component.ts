import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../domain/product";
import {ProductService} from "../services/productservice";
import {ConfirmationService, MessageService} from "primeng/api";
import {AddNewUserDialogComponent} from "./add-new-user-dialog/add-new-user-dialog.component";
import {UsersService} from "../../services/users.service";
import UserModel from "./users.model";
import {ViewDetailUserDialogComponent} from "./view-detail-user-dialog/view-detail-user-dialog.component";
import {map, tap} from "rxjs/operators";
import {UpdateSelectedUserComponent} from "./update-selected-user/update-selected-user.component";

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
  providers: [ProductService]
})
export class UsersManagementComponent implements OnInit {


  products: Product[];
  users: UserModel[];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  statuses: any[];
  Delete: any;

  @ViewChild(AddNewUserDialogComponent)
  private addNewUserDialog: AddNewUserDialogComponent;

  @ViewChild(ViewDetailUserDialogComponent)
  private viewDetailUserDialog: ViewDetailUserDialogComponent;

  @ViewChild(UpdateSelectedUserComponent)
  private updateSelectedUserDialog: UpdateSelectedUserComponent;

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private readonly usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().toPromise().then(data => this.users = data);
    this.productService.getProducts().then(data => this.products = data);

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.addNewUserDialog.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  editProduct(product: Product) {
    this.product = {...product};
    this.addNewUserDialog.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }


  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


  showMoreUserInfo(id: string): void {
    this.usersService.getUserById(parseInt(id, 10)).subscribe((user => {
      console.log(user);
      this.viewDetailUserDialog.user = user;
      this.viewDetailUserDialog._isViewDetailDialogShown = true;
    }));

  }

  editUser(id: string): void {
    this.usersService.getUserById(parseInt(id, 10)).subscribe((user => {
      this.updateSelectedUserDialog.user = user;
      this.updateSelectedUserDialog._isUpdateUserDialogShown = true;
    }));
  }
}
