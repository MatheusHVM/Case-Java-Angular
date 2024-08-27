package com.example.demo;

import com.example.demo.entities.Pessoa;

import java.util.List;

public record PessoaPageDTO(List<Pessoa> pessoas, long totalElements, int totalPages) {

}

