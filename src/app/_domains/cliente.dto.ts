import { EnderecoDTO } from './endereco.dto';

export class ClienteDTO {
  nome: string;
  cpf: string;
  email: string;
  dataAniversario: Date;
  endereco: EnderecoDTO;
  indicacao: number;
  telefone1: string;
  telefone2: string;

  constructor() {
    this.endereco = new EnderecoDTO();
  }
}
