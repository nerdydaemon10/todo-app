import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  imports: [
    IconFieldModule, 
    InputIconModule, 
    InputTextModule, 
    AvatarModule, 
    ButtonModule, 
    MenuModule, 
    DividerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items = [
    { 
      label: 'Profile', 
      items: [
        {
          label: 'Sign-Out', icon: 'bx bx-power-off'
        }
      ] 
    }
  ];
}
