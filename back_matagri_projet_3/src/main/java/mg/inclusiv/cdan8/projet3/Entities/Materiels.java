package mg.inclusiv.cdan8.projet3.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String descriptionMat;
    private String techniqueMat;
    private String imagePath;
    private String imageDetailsPath;

}
