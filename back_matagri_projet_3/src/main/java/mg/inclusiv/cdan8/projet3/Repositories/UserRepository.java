package mg.inclusiv.cdan8.projet3.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import mg.inclusiv.cdan8.projet3.Entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    Users findByEmail(String email);
}
