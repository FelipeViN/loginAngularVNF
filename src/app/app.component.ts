import { Component } from '@angular/core';
import { CardActionsExample } from 'src/componentes/card-action-example/card-action-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardActionsExample
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UnidadDos';

}
