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

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "*")
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

    @PostMapping("listPersonnesTest")
    public Users listUserTest(@RequestBody AuthUser authuser) {
        // List<Users> listUtilisateur = userService.getAllPers();
        // System.out.println(listUtilisateur);
        // ResponseEntity.ok("L'utilisateur est déconnecté test");
        System.out.println(authuser.getEmail()+authuser.getPassword());
         userRepository.findAll();
        
        // return ['rakoto',"naivo"];
        return new Users();
    }

    @GetMapping("session_user")
    public Users  SessionUser() {
        //Users userSession = (Users)session.getAttribute("user");
        // System.out.println(userSession.getEmail());
        Users currentUser = userRepository.findByEmail("authuser.getEmail()");
        return currentUser;
    }
    @GetMapping("session_usertest")
    public ResponseEntity<String>  SessionUsertest() {
    return ResponseEntity.ok("Données reçues avec succès !");
    }

    @PostMapping("add_agriculteur")
    public ResponseEntity<String> addContact(@RequestBody Users newUser) {
        userService.addUsersAgriculteur(newUser);
        session.invalidate();
        // Users new_User = userService.authentUser(newUser.getEmail(), newUser.getPassword());
        // System.out.println(newUser);
        session.setAttribute("user", newUser);
        
        return ResponseEntity.ok("Données reçues avec succès !");
    }
    
    @PostMapping("authentification")
    public Users authUser(@RequestBody AuthUser authUser ) {
        // System.out.println(authUser.getEmail()+", "+ authUser.getPassword());
        //Users newUser = (Users) userRepository.findByEmail(authUser.getEmail());
        Users currentUser = userService.authentUser(authUser.getEmail(), authUser.getPassword());
        
        return currentUser;
    }
    
    @PostMapping("getCurrentUser")
    public Users getCurrentUsers(@RequestBody AuthUser currentAuthUser ) {

        return userService.findByEmail(currentAuthUser.getEmail());
    }

    @GetMapping("deconnexion")
    public ResponseEntity<String>deconnexionUser() {
        session.invalidate();
        return ResponseEntity.ok("L'utilisateur est déconnecté !");
    }

}

