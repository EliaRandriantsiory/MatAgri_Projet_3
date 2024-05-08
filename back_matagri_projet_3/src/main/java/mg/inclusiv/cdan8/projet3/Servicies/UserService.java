package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    public void addUsers(Users users){
        userRepository.save(users);
    }
    public Users authentUser(String emailUser, String password){
        Users userFounded = userRepository.findByEmail(emailUser);
        System.out.println(userFounded);
        Users currentUser = null;
        if (userFounded!=null && (userFounded.getPassword().equals(password))) {
                return userFounded;
        }
        return currentUser;
    }

    public Users findByEmail(String emailUser){        
        return userRepository.findByEmail(emailUser);
    }

}

