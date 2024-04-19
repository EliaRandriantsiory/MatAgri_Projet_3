package mg.inclusiv.cdan8.projet3.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.Users;
import mg.inclusiv.cdan8.projet3.Repositories.MaterielsRepository;
import mg.inclusiv.cdan8.projet3.Repositories.UserRepository;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;
import mg.inclusiv.cdan8.projet3.Servicies.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


// insert into materiels(categorie_mat,autre_informationmat,image_path,information_mat) values('categoriecategori
// e_mat','autre_informationmat','image_path','information_mat');

@RestController
@CrossOrigin
@RequestMapping("/api/home")
public class HomeRestController {
    @Autowired
    MaterielsService materielsService;
    @Autowired
    UserService userService;

    @GetMapping("listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listmateriels =materielsService.getAllMat();
        System.out.println(listmateriels);
        
        return listmateriels;
    }

    @GetMapping("listPersonnes")
    public List<Users> listUser() {
        List<Users> listUtilisateur = userService.getAllPers();
        System.out.println(listUtilisateur);
        return listUtilisateur;
    }

    @PostMapping("add_tache")
    public ResponseEntity<String> addContact(@RequestBody Users users) {
        System.out.println(users);
        return ResponseEntity.ok("Données reçues avec succès !");
    }
    
        
    
}
