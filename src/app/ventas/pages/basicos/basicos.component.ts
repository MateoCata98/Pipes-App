import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {
  
  nombreLower: string= 'Fernando';
  nombreUpper: string= 'FERNANDO';
  nombreCompleto: string= 'fErNando herRera';

  fecha: Date = new Date();
  
}
