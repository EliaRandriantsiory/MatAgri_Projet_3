package mg.inclusiv.cdan8.projet3.Entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCommande;
    private double totalPrice;
    private double distance;
    private LocalDate startDate;
    private LocalDate endDate;
    @ManyToOne
    @JoinColumn(name="idUser")
    private Users user; 
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="materielId")
    private Materiels materiels; 
    @ManyToOne
    @JoinColumn(name="idprofile")
    private Profiles profiles;
    
}
