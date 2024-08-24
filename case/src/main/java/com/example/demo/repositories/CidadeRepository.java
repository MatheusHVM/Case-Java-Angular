package com.example.demo.repositories;

import com.example.demo.entities.Cidade;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, Integer> {
}
