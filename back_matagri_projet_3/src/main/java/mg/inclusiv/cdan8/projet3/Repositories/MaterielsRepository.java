package mg.inclusiv.cdan8.projet3.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.Users;

public interface MaterielsRepository extends JpaRepository<Materiels, Long>  {
    @Query("SELECT m FROM Materiels m WHERE m.id_user = :idUtilisateur")
    List<Materiels> findAllTachesByUtilisateurId(@Param("idUtilisateur") Long idUtilisateur);
}