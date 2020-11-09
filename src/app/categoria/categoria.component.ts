import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LicoreriaservicesService } from 'src/app/services/licoreriaservices.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  allCategoriaProductos: any;
  lacategoria: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private LicoreriaInyected: LicoreriaservicesService
  ) { }

  ngOnInit(): void {
    this.lacategoria = this.rutaActiva.snapshot.params.titulo;
    this.rtzCategoriaProductos(this.rutaActiva.snapshot.params.titulo);
    console.log(this.lacategoria);
    console.log(this.rutaActiva.snapshot.params.titulo);
  }

  rtzCategoriaProductos(titulo) {
    this.LicoreriaInyected.leerUnProductoCategoria(titulo).subscribe(
      (categoriaproductos) => {
        this.allCategoriaProductos = categoriaproductos;
        console.log(categoriaproductos);
      },
      error => {
        console.log('error');
      }
    );
  }

}
