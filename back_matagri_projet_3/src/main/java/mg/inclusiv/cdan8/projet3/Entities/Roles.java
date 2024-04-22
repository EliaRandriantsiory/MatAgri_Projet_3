package mg.inclusiv.cdan8.projet3.Entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//insert into users(address,email,password,phone,region) values('analakely','rakoto@gmail.com','rakoto','03254215521','boeny');
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long role_id;    
    private String role_user;
    
    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profiles profile;
    

    // @ManyToOne
    // @JoinColumn(name = "role_id")
    // private Roles role;
}
