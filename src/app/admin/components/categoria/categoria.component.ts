import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class CategoriaComponent implements OnInit {

  categorias: any[] = []
  display: boolean = false;
  displayModal: boolean = false;
  displayModalMostrar: boolean = false;
  categoria: any;
  submitted: boolean = true;
  errores: any;
  categoria_id: number=-1;
  categoria_con_productos: any;

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('')
  });

  constructor(private categoriaService:CategoriaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    this.categoriaService.indexCategoria().subscribe(
      (res:any) => {
        console.log(res)
        this.categorias = res
      },
      (error:any) => {
        
      }
    )
  }

  guardarCategoria(){
    if(this.categoria_id > 0){
      
      this.categoriaService.updateCategoria(this.categoria_id, this.categoriaForm.value).subscribe(
        (res: any) => {
          console.log(res)
          this.listarCategorias()
          this.initFormCategoria()
          
          this.displayModal=false
        },
        (error: any) => {
          console.log('-----: ', error.error.errors)
          this.errores = error.error.errors
        }
      )

    }else{
      this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
        (res: any) => {
          console.log(res)
          this.listarCategorias()
          this.initFormCategoria()
          
          this.displayModal=false
        },
        (error: any) => {
          console.log('-----: ', error.error.errors)
          this.errores = error.error.errors
        }
      )

    }
  }

  showDialog() {
    this.display = true;
  }
  showModalDialog() {
    this.displayModal = true;
    this.categoria_id = -1;
    this.initFormCategoria();
    this.errores = null
  }

  editarModalCategoria(cat: any){
    this.categoria_id = cat.id
    this.displayModal = true;
    this.initFormCategoria(cat)

  }
  
  mostrarModalCategoria(cat: any){
    this.displayModalMostrar = true;

    this.categoriaService.showCategoria(cat.id).subscribe(
      (res: any) => {
        this.categoria_con_productos = res
      },
      (error: any) => {
        console.log(error);
      }
    );   

  }
  deleteModalCategoria(cat: any){

  }

  initFormCategoria(cat:any = {nombre: '', detalle:''}){
    this.categoriaForm = new FormGroup({
      nombre: new FormControl(cat.nombre, [Validators.required]),
      detalle: new FormControl(cat.detalle)
    });
  }

  confirm(categoria:any) {
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar la categoria?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriaService.destroyCategoria(categoria.id).subscribe(
          (res) => {
            this.listarCategorias()
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Eliminado'});
          },
          (error: any) => {
            this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
          }
        )
      },
      reject: (type:any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
    }


}
