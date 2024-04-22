package mg.inclusiv.cdan8.projet3.Entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Profiles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idProfiles;    
    private String profile;

    @OneToMany (mappedBy = "profil")
    private List<Users> user;
    
    @OneToOne(mappedBy = "profil")
    private Fournisseur fournisseur;
}