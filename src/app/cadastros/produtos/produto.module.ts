import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';



@NgModule({
  declarations: [
    FormProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
