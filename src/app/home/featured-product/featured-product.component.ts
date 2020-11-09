import { Component, OnInit } from '@angular/core';
import { LicoreriaservicesService } from 'src/app/services/licoreriaservices.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  allProductos: any;
  constructor(
    private LicoreriaInyected: LicoreriaservicesService
  ) { }

  ngOnInit(): void {
    this.rtzProductos();
  }

  rtzProductos() {
    this.LicoreriaInyected.leerProducto().subscribe(
      (productos) => {
        this.allProductos = productos;
      },
      error => {
        console.log('error');
      }
    );
  }

}
