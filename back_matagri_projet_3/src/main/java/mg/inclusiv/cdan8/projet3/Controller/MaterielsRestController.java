package mg.inclusiv.cdan8.projet3.Controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.jpa.domain.JpaSort.Path;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/materiels")
public class MaterielsRestController {

    @Autowired
    private MaterielsService materielsService;


    @GetMapping("/listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listMateriels = materielsService.getAllMat();
        // System.out.println(listUtilisateur);
        return listMateriels;
    }

    @GetMapping("/listMaterielfilterBynameMat")
    public List<Materiels> filtrlistMat(@RequestParam("paramFiltr") String paramFiltr) {
        System.out.println(paramFiltr);
        List<Materiels> listMatfilter = materielsService.getAllMatByfiltrNom(paramFiltr);

        // System.out.println(materielsService.getAllMatByIdUser(param));
        // List<> newList = new List<Materiels>;
        return listMatfilter;
    }

    @GetMapping("/listMaterielByUser")
    public List<Materiels> listMatByUser(@RequestParam("param") Long param) {
        List<Materiels> listUtilisateur = materielsService.getAllMatByIdUser(param);

        // System.out.println(materielsService.getAllMatByIdUser(param));
        // List<> newList = new List<Materiels>;
        return listUtilisateur;
    }

    @PostMapping("/listMaterielByUser")
    public List<Materiels> postlistMatByUser(@RequestBody Users user) {

        List<Materiels> listUtilisateur = materielsService.getAllMatByIdUser(user.getIdUser());

        // System.out.println(materielsService.getAllMatByIdUser(param));
        // List<> newList = new List<Materiels>;
        return listUtilisateur;
    }


    @PostMapping("/ajouter")
    public ResponseEntity<Materiels> ajouterMateriel(@RequestBody Materiels materiel) {
        Materiels nouveauMateriel = materielsService.addMateriel(materiel);
        return new ResponseEntity<>(nouveauMateriel, HttpStatus.CREATED);
    }
    @GetMapping("filter")
    public List<Materiels> getAllmat() {

        return materielsService.getAllMat();
    }

    // @PostMapping
    // public ResponseEntity<String> uploadFiles(@RequestPart("files") List<FileUpload> fileUploadRequests) {
    //     for (FileUpload fileUploadRequest : fileUploadRequests) {
    //         // MultipartFile file = fileUploadRequest.getFileSizeMax();
    //         // Effectuez les opérations nécessaires avec le fichier (par exemple, enregistrez-le dans un répertoire spécifique)
    //         // Utilisez les autres propriétés de l'entité FileUploadRequest selon vos besoins
    //     }

    //     // Répondez avec une réponse appropriée
    //     return new ResponseEntity<>("Fichiers téléchargés avec succès", HttpStatus.OK);
    // }

    // C:\Users\inclu\Documents\Nouveau dossier\MatAgri_Projet_3\front_matagri_projet_3\public\assets\images\materiels
    @PostMapping("/file/upload")
    public ResponseEntity<String> handleFileUpload(@RequestPart("file") MultipartFile file) {
        try {
            String currentDirectory = System.getProperty("user.dir");
            String UPLOAD_DIR = "/front_matagri_projet_3/public/assets/images/materiels";
            String fileName = file.getOriginalFilename();
            Path filePath = Path.of(currentDirectory,UPLOAD_DIR, fileName);
            System.out.println(filePath);
            Files.copy(file.getInputStream(),filePath,StandardCopyOption.REPLACE_EXISTING);
            
            return ResponseEntity.ok("Le fichier a été téléchargé avec succès.");        
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return ResponseEntity.ok("Le fichier n'a pas été téléchargé.");
        }
        

        
    }

    private String generateUniqueFileName(String originalFileName) {
        // Implémentez votre logique pour générer un nom de fichier unique
        // Par exemple, vous pouvez ajouter un timestamp ou utiliser un UUID
        return "uniqueFileName";
    }
    
}
