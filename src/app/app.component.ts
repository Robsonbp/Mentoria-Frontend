import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente/model/cliente';
import { ClienteService } from './cliente/service/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app-cliente-novo';
 
  ngOnInit(): void {
    console.log("Antes")
  }
}
