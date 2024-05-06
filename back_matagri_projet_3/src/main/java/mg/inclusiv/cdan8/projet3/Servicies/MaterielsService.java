package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Repositories.MaterielsRepository;

@Service
@Transactional
public class MaterielsService {
    @Autowired
    MaterielsRepository materielsRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Materiels> getAllMatByfiltrNom(String nameMat){
        return materielsRepository.findByNomMat(nameMat);
    }

    public List<Materiels> getAllMatByIdUser(Long idUtilisateur){
        System.out.println(idUtilisateur.toString());
        return materielsRepository.findAllTachesByUtilisateurId(idUtilisateur);
    }
    
    public List<Materiels> getAllMat(){
        return materielsRepository.findAll();
    }

    public Materiels addMateriel(Materiels materiel) {
        return materielsRepository.save(materiel);
    }

    public String getMaterielDetails(Long materielId) {
        // Utilisez EntityManager pour exécuter la requête SQL
        Query query = entityManager.createNativeQuery(
                "SELECT users.address " +
                        "FROM materiels " +
                        "LEFT JOIN users ON materiels.id_user = users.id_user " +
                        "WHERE materiels.materiel_id = :materielId"
        );
        query.setParameter("materielId", materielId);

        try {
            Object result = query.getSingleResult();
            return (String) result;
        } catch (NoResultException e) {
            return null;
        }
    }
   
    
}
