package com.example.demo.controllers;

import lombok.AllArgsConstructor;
import com.example.demo.CidadeDTO;
import com.example.demo.entities.Cidade;
import com.example.demo.services.CidadeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@AllArgsConstructor
@RequestMapping("/cidades")
public class CidadeController {

    private final CidadeService cidadeService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Cidade> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(cidadeService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Void> salvar(@RequestBody CidadeDTO cidadeDTO) {
        Cidade cidade = cidadeDTO.toEntity();
        cidade = cidadeService.salvar(cidade);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cidade.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> alterar(@PathVariable Integer id, @RequestBody CidadeDTO cidadeDTO) {
        final Cidade cidade = cidadeDTO.toEntity();
        cidade.setId(id);
        cidadeService.alterar(cidade);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        cidadeService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
