package com.example.demo.entities;

import lombok.*;
import jakarta.persistence.*;

import java.util.Objects;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "pessoas")
public class Pessoa {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "cpf_cnpj", nullable = false, length = 14, unique = true)
    private String cpf_cnpj;

    @Column(name = "endereco", nullable = false, length = 100)
    private String endereco;

    @Column(name = "numero_End", nullable = false, length = 10)
    private String numero_end;

    @Column(name = "bairro", nullable = false, length = 45)
    private String bairro;

    @Column(name = "cep", nullable = false, length = 8)
    private String cep;

    @Column(name = "telefone", nullable = false, length = 11)
    private String telefone;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pessoa pessoa = (Pessoa) o;
        return Objects.equals(id, pessoa.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @ManyToOne
    @JoinColumn(name = "cidade_Id")
    private Cidade cidade;

}
