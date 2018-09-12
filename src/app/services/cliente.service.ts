import { ClienteDTO } from './../_domains/cliente.dto';
import { API_CONFIG } from './../_mocks/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor(
    public http: HttpClient
  ) { }

  /**
   * Busca todos os clientes da base de dados
   */
  findAll(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`${API_CONFIG.api}/clientes`);
  }

}
