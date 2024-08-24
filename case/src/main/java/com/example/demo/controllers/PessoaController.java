package com.example.demo.controllers;

import lombok.AllArgsConstructor;
import com.example.demo.PessoaDTO;
import com.example.demo.entities.Pessoa;
import com.example.demo.services.PessoaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@AllArgsConstructor
@RequestMapping("/pessoas")
public class PessoaController {

    private final PessoaService pessoaService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Pessoa> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(pessoaService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Void> salvar(@RequestBody PessoaDTO pessoaDTO) {
        Pessoa pessoa = pessoaService.salvar(pessoaDTO);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(pessoa.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> alterar(@PathVariable Integer id, @RequestBody PessoaDTO pessoaDTO) {
        pessoaDTO.setId(id);
        pessoaService.alterar(pessoaDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        pessoaService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
