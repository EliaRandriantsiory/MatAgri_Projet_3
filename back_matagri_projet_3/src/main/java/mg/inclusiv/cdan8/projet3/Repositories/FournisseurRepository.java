package mg.inclusiv.cdan8.projet3.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FournisseurRepository extends JpaRepository<FournisseurRepository, Integer> {
}