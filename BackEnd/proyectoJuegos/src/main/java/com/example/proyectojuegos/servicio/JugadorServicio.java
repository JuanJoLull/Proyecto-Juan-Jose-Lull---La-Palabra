package com.example.proyectojuegos.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.proyectojuegos.models.Jugador;
import com.example.proyectojuegos.repository.JugadorRepository;

import java.util.List;
import java.util.UUID;


@Service
public class JugadorServicio {

    @Autowired
    private JugadorRepository jugadorRepository;

    public Iterable<Jugador> findByNombre(String nombre) {

        return jugadorRepository.findAll();
    }

    public Jugador save(String nombre) {
        UUID uuid = UUID.randomUUID();
        Jugador jugador = new Jugador();
        jugador.setId(uuid.getMostSignificantBits());
        jugador.setNombre(nombre);
        jugadorRepository.save(jugador);
        return null;
    }
}
