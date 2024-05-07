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
        System.out.println(idUtilisateur.toString());
        // System.out.println(parseInt(idUtilisateur.toString(),10));
        return materielsRepository.findAllTachesByUtilisateurId(idUtilisateur);
    }
    
    public List<Materiels> getAllMat(){
        return materielsRepository.findAll();
    }

    public Materiels addMateriel(Materiels materiel) {
        return materielsRepository.save(materiel);
    }
   
    public Materiels updateMateriel(Materiels materiel) {
         Materiels updated_User = materielsRepository.findById(materiel.getMaterielId()).orElse(null);
         updated_User.setCategorieMat(materiel.getCategorieMat());
         updated_User.setDescriptionMat(materiel.getDescriptionMat());
        //  updated_User.setImagePath(materiel.getImagePath());
         updated_User.setPrixMAt(materiel.getPrixMAt());
         updated_User.setNomMat(materiel.getNomMat());
         updated_User.setStockMat(materiel.getStockMat());
         updated_User.setTechniqueMat(materiel.getTechniqueMat());

        return materielsRepository.save(updated_User);
    }
    

    public void deleteMateriel(Long idMateriel){
        materielsRepository.deleteById(idMateriel);
    }
}
