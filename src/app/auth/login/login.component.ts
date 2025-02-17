import { Component } from '@angular/core'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { DividerComponent } from '../../shared/components/divider/divider.component'

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule, DividerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
