package com.example.demo.services;

import com.example.demo.PessoaPageDTO;
import lombok.AllArgsConstructor;
import com.example.demo.PessoaDTO;
import com.example.demo.entities.Cidade;
import com.example.demo.entities.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.PessoaRepository;
import com.example.demo.exceptions.DataIntegrityException;
import com.example.demo.exceptions.ObjectNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class PessoaService {

    private final PessoaRepository pessoaRepository;
    private final CidadeService cidadeService;

    public PessoaPageDTO buscarTodos(int page, int pageSize) {
        Page<Pessoa> pessoas = pessoaRepository.findAll(PageRequest.of(page, pageSize));
        return new PessoaPageDTO(pessoas.get().toList(), pessoas.getTotalElements(), pessoas.getTotalPages());
    }

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
