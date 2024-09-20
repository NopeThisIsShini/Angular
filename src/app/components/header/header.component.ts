import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Room',
                icon: 'pi pi-home',
                routerLink: 'rooms',
                routerLinkActive: 'active'
            },
            {
                label: 'Employee',
                icon: 'pi pi-star',
                routerLink: 'employee',
                routerLinkActive: 'active'
            },
            {
                label: 'Booking',
                icon: 'pi pi-shopping-cart',
                routerLink: 'booking',
                routerLinkActive: 'active'
            }
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     items: [
            //         {
            //             label: 'Components',
            //             icon: 'pi pi-bolt'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server'
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil'
            //         },
            //         {
            //             label: 'Templates',
            //             icon: 'pi pi-palette',
            //             items: [
            //                 {
            //                     label: 'Apollo',
            //                     icon: 'pi pi-palette'
            //                 },
            //                 {
            //                     label: 'Ultima',
            //                     icon: 'pi pi-palette'
            //                 }
            //             ]
            //         }
            //     ]
            // },
        ]
    }

}
