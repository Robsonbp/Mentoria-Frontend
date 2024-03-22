import { Component } from '@angular/core';
import { ClienteService } from './service/cliente.service';
import { Cliente } from './model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  public clientes: Cliente[] = [];

  constructor(private service: ClienteService){
    this.service.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

}
}
