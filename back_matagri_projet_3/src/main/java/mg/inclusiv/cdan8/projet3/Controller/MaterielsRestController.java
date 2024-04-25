package mg.inclusiv.cdan8.projet3.Controller;

import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.Users;
import mg.inclusiv.cdan8.projet3.Repositories.MaterielsRepository;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/materiels")
public class MaterielsRestController {

    @Autowired
    private MaterielsService materielsService;

    @Autowired
    private MaterielsRepository materielsRepository;

    @PostMapping("/listMaterielUser")
    public List<Materiels> listMatUser(Users currentUser) {
      return  materielsService.getAllMatByMail(currentUser.getIdUser());
    }

    @GetMapping("/listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listMateriels = materielsService.getAllMat();
        // System.out.println(listUtilisateur);
        return listMateriels;
    }

    @PostMapping("/listMaterielByUser")
    public List<Materiels> listMatByUser(@RequestBody Users currentUser) {
        List<Materiels> listUtilisateur = materielsService.getAllMatByMail(currentUser.getIdUser());
        System.out.println(listUtilisateur);
        return listUtilisateur;
    }

    @PostMapping("/ajouter")
    public ResponseEntity<Materiels> ajouterMateriel(@RequestBody Materiels materiel) {
        Materiels nouveauMateriel = materielsService.addMateriel(materiel);
        return new ResponseEntity<>(nouveauMateriel, HttpStatus.CREATED);
    }

    // @PostMapping
    // public ResponseEntity<String> uploadFiles(@RequestPart("files") List<FileUpload> fileUploadRequests) {
    //     for (FileUpload fileUploadRequest : fileUploadRequests) {
    //         MultipartFile file = fileUploadRequest.getFileSizeMax();fileUploadRequest
    //         // Effectuez les opérations nécessaires avec le fichier (par exemple, enregistrez-le dans un répertoire spécifique)
    //         // Utilisez les autres propriétés de l'entité FileUploadRequest selon vos besoins
    //     }

    //     // Répondez avec une réponse appropriée
    //     return new ResponseEntity<>("Fichiers téléchargés avec succès", HttpStatus.OK);
    // }

    
    
}
