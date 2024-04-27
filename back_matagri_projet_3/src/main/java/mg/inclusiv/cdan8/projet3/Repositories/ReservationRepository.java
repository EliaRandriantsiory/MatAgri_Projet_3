package mg.inclusiv.cdan8.projet3.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import mg.inclusiv.cdan8.projet3.Entities.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation,Long> {

      //List<Reservation> findAllByMateriel(Materiels materiels);
      // List<Reservation> findByDateReservations(LocalDate dateDebut, LocalDate dateFin);

}
