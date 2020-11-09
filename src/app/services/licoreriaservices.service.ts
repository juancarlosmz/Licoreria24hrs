import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicoreriaservicesService {
  ruta: string = 'https://licoreria24hrs.com/backend/rutas/';

  constructor(private http: HttpClient) { }
  leerCategoria(): Observable<any> {
    return this.http.get<any>(this.ruta + 'categoria.php');
  }
  leerProducto(): Observable<any> {
    return this.http.get<any>(this.ruta + 'producto.php');
  }
  leerUnProducto(titulo: string): Observable<any>{
    return this.http.get<any>(this.ruta + 'unproducto.php?titulo=' + titulo);
  }
  leerUnProductoCategoria(titulo: string): Observable<any>{
    return this.http.get<any>(this.ruta + 'productocategoria.php?titulo=' + titulo);
  }
}
