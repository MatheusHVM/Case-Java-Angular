package com.example.demo.services;

import lombok.AllArgsConstructor;
import com.example.demo.entities.Cidade;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.CidadeRepository;
import com.example.demo.exceptions.DataIntegrityException;
import com.example.demo.exceptions.ObjectNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;


@Service
@AllArgsConstructor
public class CidadeService {

    private final CidadeRepository cidadeRepository;

    public Cidade buscarPorId(Integer id) {
        return cidadeRepository.findById(id).orElseThrow(
                () -> new ObjectNotFoundException(String.format("Id %s não encontrado", id))
        );
    }

    public Cidade salvar(Cidade cidade) {
        return cidadeRepository.save(cidade);
    }

    public Cidade alterar(Cidade cidade) {
        buscarPorId(cidade.getId());
        return cidadeRepository.save(cidade);
    }

    public void deletar(Integer id) {
        buscarPorId(id);
        try {
            cidadeRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException("Não é possível excluir uma cidade com pessoas cadastradas nela.");
        }
    }
}
