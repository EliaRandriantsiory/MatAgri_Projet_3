package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import mg.inclusiv.cdan8.projet3.Entities.PanierMat;
import mg.inclusiv.cdan8.projet3.Repositories.PanierMaterielRepository;

@Service
@Transactional
public class PanierMatService {
    @Autowired
    PanierMaterielRepository panierMaterielRepository;

    public PanierMat addPanier(PanierMat panierMat){
        return panierMaterielRepository.save(panierMat);
    }

    public List<PanierMat> listPanier(){
        return panierMaterielRepository.findAll();
    }
}
