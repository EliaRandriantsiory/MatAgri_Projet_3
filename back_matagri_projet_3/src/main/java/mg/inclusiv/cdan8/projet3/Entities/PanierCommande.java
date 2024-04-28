package mg.inclusiv.cdan8.projet3.Entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PanierCommande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long panierId;
    //@OneToMany(mappedBy = "panier_Id")
    private Long materielId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String lieudexploitation;
    private String etatPanier;
    private Long id_user;
    
}
