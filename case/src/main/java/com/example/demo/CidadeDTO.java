package com.example.demo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.example.demo.entities.Cidade;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CidadeDTO {

    private String nome;
    private String uf;

    public Cidade toEntity() {
        return new Cidade(null, nome, uf);
    }

}
