package mg.inclusiv.cdan8.projet3.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import mg.inclusiv.cdan8.projet3.Entities.Commande;

public interface CommandeRepository extends JpaRepository<Commande,Long>{
   List<Commande> findAll();

}


