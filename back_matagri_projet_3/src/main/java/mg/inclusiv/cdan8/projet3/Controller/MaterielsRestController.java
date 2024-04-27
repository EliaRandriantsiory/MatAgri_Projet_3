package mg.inclusiv.cdan8.projet3.Controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
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
import org.springframework.web.bind.annotation.RequestParam;
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
        return  ResponseEntity.ok("suppression materiel réussi");
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

    @PostMapping("/file/upload")
    public ResponseEntity<String> handleFileUpload(@RequestPart("file") MultipartFile file) {
        String currentDirectory = System.getProperty("user.dir");
        String CURRENT_UPLOAD_DIR = currentDirectory+"/front_matagri_projet_3/public/assets/images/materiels";
        
        try {
            // Créez le répertoire d'upload s'il n'existe pas4
            // Path filePath =  Path.of(currentDirectory,CURRENT_UPLOAD_DIR, File_Folder);
            Files.createDirectories(Path.of(CURRENT_UPLOAD_DIR));

            // Générez un nom de fichier unique
            String fileName = generateUniqueFileName(file.getOriginalFilename());

            // Chemin complet du fichier sur le serveur
            Path filePath =  Path.of(CURRENT_UPLOAD_DIR, fileName);
            
            // Enregistrez le fichier sur le serveur
            Files.copy(file.getInputStream(), filePath,StandardCopyOption.REPLACE_EXISTING);//, StandardCopyOption.REPLACE_EXISTING

            return ResponseEntity.ok("Le fichier a été téléchargé avec succès.");
        } catch (IOException e) {
            // Gestion des erreurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Une erreur s'est produite lors de l'enregistrement du fichier sur le serveur.");
        }
    }
    
    // Tsy fafana fa ilaina au cas où
    // @PostMapping("/file/upload")
    // public ResponseEntity<String> handleFileUpload(@RequestPart("file") MultipartFile file,@RequestParam("folder") String folder) {
    //     String currentDirectory = System.getProperty("user.dir");
    //     String CURRENT_UPLOAD_DIR = currentDirectory+"/front_matagri_projet_3/public/assets/images/materiels/"+folder; 
    //     try {
    //         // Créez le répertoire d'upload s'il n'existe pas4
    //         // Path filePath =  Path.of(currentDirectory,CURRENT_UPLOAD_DIR, File_Folder);
    //         Files.createDirectories(Path.of(CURRENT_UPLOAD_DIR));
    //         // Générez un nom de fichier unique
    //         String fileName = generateUniqueFileName(file.getOriginalFilename());
    //         // Chemin complet du fichier sur le serveur
    //         Path filePath =  Path.of(CURRENT_UPLOAD_DIR, fileName);            
    //         // Enregistrez le fichier sur le serveur
    //         Files.copy(file.getInputStream(), filePath);//, StandardCopyOption.REPLACE_EXISTING
    //         return ResponseEntity.ok("Le fichier a été téléchargé avec succès.");
    //     } catch (IOException e) {
    //         // Gestion des erreurs
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    //                              .body("Une erreur s'est produite lors de l'enregistrement du fichier sur le serveur.");
    //     }
    // }

    private String generateUniqueFileName(String originalFileName) {
        // Implémentez votre logique pour générer un nom de fichier unique
        // Par exemple, vous pouvez ajouter un timestamp ou utiliser un UUID

        return originalFileName ;
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
