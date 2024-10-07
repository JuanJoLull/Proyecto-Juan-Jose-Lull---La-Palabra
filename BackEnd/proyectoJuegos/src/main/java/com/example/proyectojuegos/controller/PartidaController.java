package com.example.proyectojuegos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.proyectojuegos.models.Partida;
import com.example.proyectojuegos.servicio.PartidaServicio;

import java.util.List;

@RestController
@RequestMapping("/partida")
public class PartidaController {

    @Autowired
    private PartidaServicio partidaServicio;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping()
    public List<Partida> getPartida(){
        return partidaServicio.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/save/{jugador}/{intentos}/{winner}")
    public Partida save(@PathVariable String jugador,@PathVariable Integer intentos,@PathVariable boolean winner){
        return partidaServicio.save(jugador, intentos, winner);
    }
}
