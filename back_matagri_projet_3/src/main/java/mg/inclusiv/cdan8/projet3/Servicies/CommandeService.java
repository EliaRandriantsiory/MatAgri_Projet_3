package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mg.inclusiv.cdan8.projet3.Entities.Commande;
import mg.inclusiv.cdan8.projet3.Repositories.CommandeRepository;

@Service
public class CommandeService {
    @Autowired
    private CommandeRepository commandeRepository;

    public List<Commande> getPannier() {
        return commandeRepository.findAll();
    }
}
