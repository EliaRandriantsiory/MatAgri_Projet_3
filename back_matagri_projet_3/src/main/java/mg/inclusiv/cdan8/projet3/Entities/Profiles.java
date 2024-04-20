package mg.inclusiv.cdan8.projet3.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    
}