package mg.inclusiv.cdan8.projet3.Entities;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
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
    @NotBlank
    @NotNull
    private String address;
    @NotBlank
    @NotNull
    @UniqueElements
    private String phone;
    @UniqueElements
    private String nif;
    @UniqueElements
    private String stat;
    @UniqueElements
    private String cin;
    @NotBlank
    @NotNull
    @UniqueElements
    private String email;
    @NotBlank
    @NotNull
    private String region;
    private String companyName;
    @NotBlank
    @NotNull
    private String password;
    
    
    
    
    
    
    
    
    

    
    
}
