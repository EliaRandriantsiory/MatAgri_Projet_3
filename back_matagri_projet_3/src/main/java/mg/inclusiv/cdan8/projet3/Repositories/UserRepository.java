package mg.inclusiv.cdan8.projet3.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mg.inclusiv.cdan8.projet3.Entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    @Query("SELECT u FROM Users u JOIN u.profile p WHERE u.email = :email AND u.password = :password AND p.profile = 'coopérative'")
    Users authenticateCoopérative(@Param("email") String email, @Param("password") String password);

    Users findByEmailAndPassword(String email, String password);
    
}
