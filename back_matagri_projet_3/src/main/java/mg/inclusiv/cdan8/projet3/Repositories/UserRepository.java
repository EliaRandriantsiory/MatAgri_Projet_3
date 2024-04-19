package mg.inclusiv.cdan8.projet3.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import mg.inclusiv.cdan8.projet3.Entities.Users;

public interface UserRepository extends JpaRepository<Users,Long> {
    
}
