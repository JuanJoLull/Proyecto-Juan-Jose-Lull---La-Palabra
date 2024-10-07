package com.example.proyectojuegos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.proyectojuegos.models.Jugador;

import java.util.List;

public interface JugadorRepository extends CrudRepository<Jugador, Integer> {
    List<Jugador> findByNombre(String nombre);
//    Jugador save(String nombre);
}
