package mg.inclusiv.cdan8.projet3.Servicies;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.Reservation;
import mg.inclusiv.cdan8.projet3.Repositories.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;
    
    public List<Reservation> getReservations(){
        return reservationRepository.findAll();
    }

    public List<LocalDate> getDateRange(LocalDate startDate, LocalDate endDate) {
        List<LocalDate> dateRange = new ArrayList();

        LocalDate currentDate = startDate;
        while (!currentDate.isAfter(endDate)) {
            dateRange.add(currentDate);
            currentDate = currentDate.plusDays(1);
        }

        return dateRange;
    }

    public Reservation addReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }
}
