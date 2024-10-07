package com.example.proyectojuegos.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.proyectojuegos.models.Partida;
import com.example.proyectojuegos.repository.PartidaRepository;

import java.util.List;
import java.util.UUID;

@Service
public class PartidaServicio {
    @Autowired
    private PartidaRepository partidaRepository;
    public List<Partida> findAll(){
        return partidaRepository.findAll();
    }

    public Partida save(String jugador, Integer intentos, boolean winner){
        UUID uuid = UUID.randomUUID();
        Partida partida = new Partida();
        partida.setId(uuid.getMostSignificantBits());
        partida.setJugador(jugador);
        partida.setIntentos(intentos);
        partida.setWinner(winner);

        return
                partidaRepository.save(partida);

    }
}
