import { Component, OnInit } from '@angular/core';
import { PessoaService } from './services/pessoa.service';
import { Pessoa } from './models/pessoa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mentoria-frontend';

  pessoa = {} as Pessoa;
  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) {}
  
  ngOnInit() {
    this.getPessoas();
  }

  // Chama o serviço para obtém todos os carros
  getPessoas() {
    this.pessoaService.getPessoas().subscribe((pessoas: Pessoa[]) => {
      this.pessoas = pessoas;
    });
  }
}
