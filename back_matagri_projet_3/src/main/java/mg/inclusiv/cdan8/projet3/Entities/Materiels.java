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
    private String informationMat;
    private String autreInformationMAt;
    private String informationComplMat;    
    private String imagePath;
    private String imageDetailsPath;

}
