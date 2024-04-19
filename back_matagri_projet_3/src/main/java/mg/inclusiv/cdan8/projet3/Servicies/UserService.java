package mg.inclusiv.cdan8.projet3.Servicies;

import org.springframework.beans.factory.annotation.Autowired;

import mg.inclusiv.cdan8.projet3.Repositories.UserRepository;

public class UserService {
    @Autowired
    UserRepository userRepository;
}
