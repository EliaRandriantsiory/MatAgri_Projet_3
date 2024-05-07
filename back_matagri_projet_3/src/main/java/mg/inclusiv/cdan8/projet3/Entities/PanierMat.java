package mg.inclusiv.cdan8.projet3.Entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PanierMat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long panierId;
    @ManyToOne
    @JoinColumn(name = "materielId")
    private Materiels materiel; 
    // @Column(nullable = true) 
    @ManyToOne
    @JoinColumn(name = "idUser")
    private Users users;
    private Integer quantity;
    private LocalDate startDate;
    private LocalDate endDate;


    


}
