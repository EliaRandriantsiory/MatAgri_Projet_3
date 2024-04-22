package mg.inclusiv.cdan8.projet3.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mg.inclusiv.cdan8.projet3.Entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {

    
}
