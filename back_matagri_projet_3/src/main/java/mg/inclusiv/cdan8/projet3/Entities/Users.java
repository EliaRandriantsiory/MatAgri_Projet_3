package mg.inclusiv.cdan8.projet3.Entities;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
    private Integer nbFarme;
    private String companyName;
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_profile")
    private Profiles profile;

}
