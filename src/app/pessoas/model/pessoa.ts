import { Lesson } from "./lesson";

export interface Pessoa {
  _id: string;
  name: string;
  cpfCnpj: string;
  endereco: string;
  numeroEndereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  cidade: string;
  uf: string;
  lessons?: Lesson[];
}
