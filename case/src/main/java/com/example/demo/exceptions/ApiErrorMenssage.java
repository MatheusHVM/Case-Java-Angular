package com.example.demo.exceptions;

import lombok.Data;
import lombok.AllArgsConstructor;

import java.util.Collections;
import java.util.List;

@Data
@AllArgsConstructor
public class ApiErrorMenssage {

    private List<String> errors;

    public ApiErrorMenssage(String mensagem){
        this.errors = Collections.singletonList(mensagem);
    }
}
