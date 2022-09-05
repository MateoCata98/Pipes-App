import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
              {
                  label: 'Textos y fechas', 
                  icon: 'pi  pi-align-left',
                  routerLink: '/'
              },
              {
                label: 'Numeros', 
                icon: 'pi pi-dollar',
                routerLink: 'numeros'
            },
            {
              label: 'No Comunes', 
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
          }]       
        },
          {
            label: 'Personalizados',
            icon: 'pi pi-cog',
            routerLink: 'ordenar'
          }

  ];
}
  }


