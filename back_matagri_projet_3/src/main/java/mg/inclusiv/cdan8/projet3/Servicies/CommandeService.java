package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mg.inclusiv.cdan8.projet3.Entities.Commande;

import mg.inclusiv.cdan8.projet3.Repositories.CommandeRepository;

import mg.inclusiv.cdan8.projet3.Entities.Mutualisation;
import mg.inclusiv.cdan8.projet3.Repositories.MutualisationRepository;


@Service
public class CommandeService {
    @Autowired
    private CommandeRepository commandeRepository;

    @Autowired
    private MutualisationRepository mutualisationRep;


    @Autowired
    private MutualisationRepository mutualisationRepository;



    public List<Commande> getPannier() {
        return commandeRepository.findAll();
    }

    public void saveMutualisation(Mutualisation commandeMutualisation) {
        mutualisationRep.save(commandeMutualisation);
    }



    public void mutualisation (Mutualisation mutualisation) {
        
        mutualisationRepository.save(mutualisation);

    }

}

