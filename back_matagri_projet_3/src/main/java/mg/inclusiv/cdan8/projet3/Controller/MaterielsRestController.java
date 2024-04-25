package mg.inclusiv.cdan8.projet3.Controller;

import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.Users;
import mg.inclusiv.cdan8.projet3.Repositories.MaterielsRepository;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/materiels")
public class MaterielsRestController {

    @Autowired
    private MaterielsService materielsService;

    @Autowired
    private MaterielsRepository materielsRepository;

    @GetMapping("/listMaterielUser")
    public List<Materiels> listMatUser(@RequestParam("idUser") Long idUSer ) {
      return  materielsService.getAllMatByIdUser(idUSer);
    }

    @GetMapping("/listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listMateriels = materielsService.getAllMat();
        // System.out.println(listUtilisateur);
        return listMateriels;
    }

    @PostMapping("/listMaterielByUser")
    public List<Materiels> listMatByUser(@RequestBody Users currentUser) {
        List<Materiels> listUtilisateur = materielsService.getAllMatByIdUser(currentUser.getIdUser());
        System.out.println(listUtilisateur);
        return listUtilisateur;
    }

    @PostMapping("/ajouter")
    public ResponseEntity<Materiels> ajouterMateriel(@RequestBody Materiels materiel) {
        Materiels nouveauMateriel = materielsService.addMateriel(materiel);
        return new ResponseEntity<>(nouveauMateriel, HttpStatus.CREATED);
    }


    @GetMapping("/supprimer")

    public ResponseEntity<String> supprimerMateriel(@RequestParam("idMat") Long materielId ) {
        materielsService.deleteMateriel(materielId);
        return  ResponseEntity.ok("suppression matériel réussie");
    }


    @PostMapping("/modifier")
    public ResponseEntity<String> modifierMateriel(@RequestBody Materiels materiel ) {
        Materiels currentMat = materielsService.getMatById(materiel.getMaterielId());
        currentMat.setCategorieMat(materiel.getCategorieMat());
        currentMat.setDescriptionMat(materiel.getDescriptionMat());
        currentMat.setNomMat(materiel.getNomMat());
        currentMat.setPrixMAt(materiel.getPrixMAt());
        currentMat.setStockMat(materiel.getStockMat());
        currentMat.setImagePath(materiel.getImagePath());
        materielsService.saveMat(currentMat);
        return  ResponseEntity.ok("modifier materiel réussi");
    }

    
}
