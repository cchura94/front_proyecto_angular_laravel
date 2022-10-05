import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: any[] = []
  display: boolean = false;
  displayModal: boolean = false;
  categoria: any;
  submitted: boolean = false;

  constructor(private categoriaService:CategoriaService) { }

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

  showDialog() {
    this.display = true;
  }
  showModalDialog() {
    this.displayModal = true;
  }


}
