import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulo para reutilzar formulario en otras zonas de la aplicaci'on
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';


import {
  //imports de formularios
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppService } from '../common/app.service';
import { SnackService } from '../common/snack.service';
import { ProductsService } from '../common/products.service';
import { CartService } from '../common/cart.service';
import { OrdersService } from '../common/orders.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [AppService, SnackService, ProductsService, CartService, OrdersService]
})
export class SharedModule { }
