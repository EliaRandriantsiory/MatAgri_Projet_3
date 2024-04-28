package mg.inclusiv.cdan8.projet3.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Materiels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long materielId;
    private String categorieMat;
    private String nomMat;
    private double PrixMAt;
    private int stockMat;
    @Column(columnDefinition = "TEXT")
    private String descriptionMat;
    @Column(columnDefinition = "TEXT")
    private String techniqueMat;
    @Column(nullable = false) 
    private String imagePath;
    private Long id_user;
    
}
