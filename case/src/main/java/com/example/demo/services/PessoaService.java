package com.example.demo.services;

import lombok.AllArgsConstructor;
import com.example.demo.PessoaDTO;
import com.example.demo.entities.Cidade;
import com.example.demo.entities.Pessoa;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.PessoaRepository;
import com.example.demo.exceptions.DataIntegrityException;
import com.example.demo.exceptions.ObjectNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;


@Service
@AllArgsConstructor
public class PessoaService {

    private final PessoaRepository pessoaRepository;
    private final CidadeService cidadeService;

    public Pessoa buscarPorId(Integer id) {
        return pessoaRepository.findById(id).orElseThrow(
                () -> new ObjectNotFoundException(String.format("Id %s não encontrado", id))
        );
    }

    public Pessoa salvar(PessoaDTO pessoaDTO) {
        Cidade cidade = cidadeService.buscarPorId(pessoaDTO.getCidadeId());

        Pessoa pessoa = pessoaDTO.toEntity();
        pessoa.setCidade(cidade);

        return pessoaRepository.save(pessoa);
    }

    public Pessoa alterar(PessoaDTO pessoaDTO) {
        buscarPorId(pessoaDTO.getId());
        return salvar(pessoaDTO);
    }

    public void deletar(Integer id) {
        buscarPorId(id);
        try {
            pessoaRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException("Não é possível excluir uma pessoa com movimentações.");
        }
    }
}
