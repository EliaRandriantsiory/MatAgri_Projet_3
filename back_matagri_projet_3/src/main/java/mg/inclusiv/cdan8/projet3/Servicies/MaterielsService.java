package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;
import java.util.Optional;

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

    public Materiels getMatById(Long matId){
        Optional<Materiels> optionalMateriel = materielsRepository.findById(matId);
        return optionalMateriel.orElse(null);
    }

    public void saveMat(Materiels materiels){
        materielsRepository.save(materiels);
    }

    public List<Materiels> getAllMatByIdUser(Long idUtilisateur){
        return materielsRepository.findAllTachesByUtilisateurId(idUtilisateur);
    }
    
    public List<Materiels> getAllMat(){
        return materielsRepository.findAll();
    }

    public void deleteMateriel(Long Idmaterie){
        materielsRepository.deleteById(Idmaterie);
    }
    public Materiels addMateriel(Materiels materiel) {
        return materielsRepository.save(materiel);
    }
   
    public void deleteMateriel(Long Idmaterie){
        materielsRepository.deleteById(Idmaterie);
    }
    
}
