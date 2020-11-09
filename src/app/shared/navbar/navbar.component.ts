import { Component, OnInit } from '@angular/core';
import { LicoreriaservicesService } from 'src/app/services/licoreriaservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allCategorias: any;
  constructor(
    private LicoreriaInyected: LicoreriaservicesService
  ) { }

  ngOnInit(): void {
    this.rtzCategorias();
  }

  rtzCategorias() {
    this.LicoreriaInyected.leerCategoria().subscribe(
      (categorias) => {
        this.allCategorias = categorias;
      },
      error => {
        console.log('error');
      }
    );
  }
  onClickCategoria(){
    setTimeout( function(){
      location.reload();
    }, 1000);
  }

}
