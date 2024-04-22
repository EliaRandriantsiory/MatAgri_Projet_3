package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mg.inclusiv.cdan8.projet3.Entities.Users;
import mg.inclusiv.cdan8.projet3.Repositories.UserRepository;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<Users> getAllPers(){
        return userRepository.findAll();
    }
    public void addUsersAgriculteur(Users users){
        userRepository.save(users);
    }
    public Users authenticateCoopérative(@Param("email") String email, @Param("password") String password){
        return userRepository.findByEmailAndPassword(email, password);
    }
   
}

