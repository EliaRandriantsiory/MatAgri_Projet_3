package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

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

    // public List<Materiels> getAllMatByMail(Long idUtilisateur){
        // return materielsRepository.findAllTachesByUtilisateurId(idUtilisateur);
    // }

    public List<Materiels> getAllMatByfiltrNom(String nameMat){
        return materielsRepository.findByNomMat(nameMat);
    }

    public List<Materiels> getAllMatByIdUser(Long idUtilisateur){
        return materielsRepository.findAllTachesByUtilisateurId(2);
    }
    
    public List<Materiels> getAllMat(){
        return materielsRepository.findAll();
    }

    public Materiels addMateriel(Materiels materiel) {
        return materielsRepository.save(materiel);
    }
   
    
}
