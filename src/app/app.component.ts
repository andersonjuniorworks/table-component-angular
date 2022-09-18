import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [
    {
      name: 'Amanda Alves Cavalcante',
      phoneNumber: '(81) 9 4567-8899',
      email: 'amandaalves@gmail.com',
    },
    {
      name: 'Lucia Soares Costa',
      phoneNumber: '(85) 9 8176-7681',
      email: 'luciasoares@gmail.com',
    },
    {
      name: 'Luciana Alves de Macedo',
      phoneNumber: '(75) 9 7671-4599',
      email: 'lucianaalves@gmail.com',
    },
    {
      name: 'Rafael Matos de Macedo',
      phoneNumber: '(81) 9 4567-8899',
      email: 'rafaelmatos@gmail.com',
    },
  ];

  onDelete() {
    alert('Deseja deletar?');
  }
}
