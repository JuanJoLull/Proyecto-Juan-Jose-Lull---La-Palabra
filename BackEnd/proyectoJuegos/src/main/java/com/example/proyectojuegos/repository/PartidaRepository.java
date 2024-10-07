package com.example.proyectojuegos.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.proyectojuegos.models.Partida;

import java.util.List;

public interface PartidaRepository extends CrudRepository<Partida, Long> {
    List<Partida> findAll();
}