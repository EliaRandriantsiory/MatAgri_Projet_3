package mg.inclusiv.cdan8.projet3.Entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.GenerationType;

@Entity
@Data
@AllArgsConstructor

@NoArgsConstructor
public class Mutualisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id_mutualisation;
    private double totalPrice_mutualisation;
    private double distance;
    @ManyToOne
    @JoinColumn(name = "id_profiles")
    private Profiles profiles;
    @ManyToOne
    @JoinColumn(name ="id_Users")
    private Users users;


    private Long id;
    @Column (nullable = false)
    private Long coutTotal;
    @Column (nullable = false)
    private Long cooperative;
    
}

