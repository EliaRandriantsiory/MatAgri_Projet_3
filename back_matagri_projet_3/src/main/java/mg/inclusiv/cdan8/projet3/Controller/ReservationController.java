package mg.inclusiv.cdan8.projet3.Controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mg.inclusiv.cdan8.projet3.Entities.Reservation;
import mg.inclusiv.cdan8.projet3.Repositories.ReservationRepository;
import mg.inclusiv.cdan8.projet3.Servicies.ReservationService;

@RestController
@RequestMapping("/api/reservations")
public class
ReservationController {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    ReservationService reservationService;

    @GetMapping("listreservation")
    public List<Reservation> ListReservation() {   
        return reservationService.getReservations();
    }
    //api/reservations/reservationmateriel
    //@RequestBody Reservation reservation
    @PostMapping("reservationmateriel")
    public ResponseEntity<String> reserve(@RequestBody Reservation reservation) {
        boolean statusReservation = false;
        List<List<LocalDate>> creneaux = new ArrayList();
        List<Reservation> current_reservations = reservationService.getReservations();
        for (Reservation current_reservation : current_reservations) {
            //if (current_reservation.getStartDate().equals(reservation.getStartDate()) && current_reservation.getEndDate().equals(reservation.getEndDate())) {
            //    return ResponseEntity.ok("Réservation impossible !");
            //}
            creneaux.add(reservationService.getDateRange(current_reservation.getStartDate(), current_reservation.getEndDate()));
            System.out.println(current_reservation.getStartDate()+" "+current_reservation.getEndDate());
            System.out.println(current_reservation.getStartDate());
            System.out.println(current_reservation.getEndDate());
        }

        for (List<LocalDate> creneau : creneaux) {
            //System.out.println(creneau);

            // String joinedDates = String.join(", ", creneau.toString());
            // System.out.println(joinedDates);
            if (creneau.contains(reservation.getStartDate()) || creneau.contains(reservation.getEndDate())) {
                System.out.println("reservation imposible");
                statusReservation=true;
                
            }
            else{
                
            }
            
        }
        
        if (statusReservation==true) {
            return ResponseEntity.ok("Réservation impossible !");
        }
        
        return ResponseEntity.ok("Réservation réussi !");
    }

    @PostMapping("/add")
    public Reservation addReservation(@RequestBody Reservation reservation) {
        System.out.println(reservation);
        return reservationService.addReservation(reservation);
    }
    
}
