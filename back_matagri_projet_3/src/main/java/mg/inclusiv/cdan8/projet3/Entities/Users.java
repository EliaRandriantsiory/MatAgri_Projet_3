package mg.inclusiv.cdan8.projet3.Entities;
import org.hibernate.validator.constraints.UniqueElements;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long idUser;    
    private String name;
    private String lastname;
    
    private String address;
    
    private String phone;
    
    private String nif;
    
    private String stat;
    
    private String cin;

    private String email;
    
    private String region;
    private String companyName;
    
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_profile")
    private Profiles profile;
    
    
    
    
    
    
    
    
    

    
    
}
