import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProductoService } from 'src/app/core/services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ProductoComponent implements OnInit {

  productDialog: boolean = false;

  products: any[] = [];
  categorias: any[] = [];

  product: any;

  selectedProducts: any[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  constructor(private productoService: ProductoService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    // obtener lista
    // this.productService.getProducts().then(data => this.products = data);
    this.listarProductos()
    this.listarCategorias()
  }

  listarProductos(){
    this.productoService.getProductos().subscribe(
      (res:any)=> {
        this.products = res.data
        
        console.log(this.products);
      }
    )
  }

  listarCategorias(){
    this.categoriaService.indexCategoria().subscribe(
      (res:any) => {
        this.categorias = res
      }
    )
  }

  openDialogProducto(){
    this.product = {};
    this.submitted = false;
    this.productDialog = true;

  }

  eliminarProducts(){

  }
  editProduct(product: any) {
    this.product = {...product};
    this.productDialog = true;
}

deleteProduct(product: any) {
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

 hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
      this.submitted = true;

      if (this.product.name.trim()) {
          if (this.product.id) {
              this.products[this.findIndexById(this.product.id)] = this.product;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          }
          else {
              this.product.id = this.createId();
              this.product.image = 'product-placeholder.svg';
              this.products.push(this.product);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      }
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


}
