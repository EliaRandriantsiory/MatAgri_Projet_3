package mg.inclusiv.cdan8.projet3.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Repositories.MaterielsRepository;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


// insert into materiels(categorie_mat,autre_informationmat,image_path,information_mat) values('categoriecategori
// e_mat','autre_informationmat','image_path','information_mat');

@RestController
@RequestMapping("/api/home")
@CrossOrigin
public class HomeRestController {
    @Autowired
    MaterielsService materielsService;

    @GetMapping("listMateriel")
    public List<Materiels> listMat() {
        List<Materiels> listmateriels =materielsService.getAllMat();
        System.out.println(listmateriels);
        
        return listmateriels;
    }

    
        
    
}
