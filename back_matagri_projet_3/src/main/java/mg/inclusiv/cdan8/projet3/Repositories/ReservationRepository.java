package mg.inclusiv.cdan8.projet3.Repositories;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import org.springframework.data.jpa.repository.JpaRepository;

import mg.inclusiv.cdan8.projet3.Entities.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation,Long> {

      //List<Reservation> findAllByMateriel(Materiels materiels);
      // List<Reservation> findByDateReservations(LocalDate dateDebut, LocalDate dateFin);

}
