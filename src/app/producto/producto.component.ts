import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LicoreriaservicesService } from 'src/app/services/licoreriaservices.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  descripcion: any;
  imagen: any;
  precio: any;
  serviciotitulo: any;
  titulo: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private LicoreriaInyected: LicoreriaservicesService
  ) { }

  ngOnInit(): void {
    this.rtzProducto(this.rutaActiva.snapshot.params.titulo);
  }

  rtzProducto(titulo) {
    this.LicoreriaInyected.leerUnProducto(titulo).subscribe(
      (producto) => {
        this.descripcion = producto[0].descripcion;
        this.imagen = producto[0].imagen;
        this.precio = producto[0].precio;
        this.serviciotitulo = producto[0].serviciotitulo;
        this.titulo = producto[0].titulo;
      },
      error => {
        console.log('error');
      }
    );
  }

}
