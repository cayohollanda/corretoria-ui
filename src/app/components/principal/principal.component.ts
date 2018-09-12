import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../_domains/cliente.dto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  clientes: ClienteDTO[];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  /**
   * Método responsável por pegar todos os clientes
   * cadastrados e colocar na lista de clientes
   */
  findAll() {
    this.clienteService.findAll()
      .subscribe(data => {
        this.clientes = data;
        console.log(this.clientes);
      });
  }

  /**
   * Método responsável por salvar um novo cliente (a ser implementado)
   */
  save() {

  }

}
