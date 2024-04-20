package mg.inclusiv.cdan8.projet3.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mg.inclusiv.cdan8.projet3.Entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    // @Query("SELECT u.name, u.lastname, p.profile, r.role_user FROM User u JOIN u.profile p RIGHT JOIN p.roles r WHERE u.name = :name AND u.lastname = :lastname")
    // List<Object[]> authUser(@Param("name") String name, @Param("lastname") String lastname);
    // @Query("SELECT u.name, u.lastname FROM User u")
    // List<Object[]> authUser();
}
