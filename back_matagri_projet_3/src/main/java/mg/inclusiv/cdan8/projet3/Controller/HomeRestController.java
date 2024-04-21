package mg.inclusiv.cdan8.projet3.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import mg.inclusiv.cdan8.projet3.Entities.AuthUser;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

// insert into materiels(categorie_mat,autre_informationmat,image_path,information_mat) values('categoriecategorie_mat','autre_informationmat','image_path','information_mat');
// 

@RestController
@CrossOrigin
@RequestMapping("/api/home")
public class HomeRestController {
    @Autowired
    MaterielsService materielsService;
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private HttpSession session;
    
    @GetMapping("listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listmateriels =materielsService.getAllMat();
        System.out.println(listmateriels);
        
        return listmateriels;
    }
    // insert into users(address,email,password,phone,region) values('analakely','rakoto@gmail.com','rakoto','03254215521','boeny');

    @GetMapping("listPersonnes")
    public List<Users> listUser() {
        List<Users> listUtilisateur = userService.getAllPers();
        System.out.println(listUtilisateur);
        return listUtilisateur;
    }

    @GetMapping("session_user")
    public Users  SessionUser() {
        return (Users)session.getAttribute("user");
    }
    

    @PostMapping("add_agriculteur")
    public ResponseEntity<String> addContact(@RequestBody Users users) {
        userService.addUsersAgriculteur(users);
        return ResponseEntity.ok("Données reçues avec succès !");
    }
    
    @PostMapping("authentification")
    public ResponseEntity<String> authUser(@RequestBody AuthUser authUser ) {
        Users currentUser = userService.authentUser(authUser.getEmail(), authUser.getPassword());
        session.setAttribute("user", currentUser);
        return ResponseEntity.ok("Données reçues avec succès !");
    }
    
    @GetMapping("deconnexion")
    public ResponseEntity<String>deconnexionUser() {
        session.invalidate();
        return ResponseEntity.ok("L'utilisateur est déconnecté !");
    }
    
}
