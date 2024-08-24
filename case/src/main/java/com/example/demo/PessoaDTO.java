package com.example.demo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.example.demo.entities.Pessoa;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PessoaDTO {

    private Integer id;
    private String nome;
    private String cpfCnpj;
    private String endereco;
    private String numeroEndereco;
    private String bairro;
    private String cep;
    private String telefone;
    private String email;
    private Integer cidadeId;

    public Pessoa toEntity() {
        return new Pessoa(id, nome, cpfCnpj, endereco, numeroEndereco, bairro, cep, telefone, email, null);
    }

}
