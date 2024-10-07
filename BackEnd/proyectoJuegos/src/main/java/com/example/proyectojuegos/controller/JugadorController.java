package com.example.proyectojuegos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.proyectojuegos.models.Jugador;
import com.example.proyectojuegos.servicio.JugadorServicio;

import java.util.List;

@RestController
@RequestMapping("/jugador")
public class JugadorController {

    @Autowired
    private JugadorServicio jugadorServicio;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{nombre}")
    public Iterable<Jugador> getJugador(@PathVariable String nombre){
        return jugadorServicio.findByNombre(nombre);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/save/{nombre}")
    public Jugador save(@PathVariable String nombre){
        return jugadorServicio.save(nombre);
    }
}
