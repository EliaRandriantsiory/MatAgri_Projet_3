package mg.inclusiv.cdan8.projet3.Controller;

import com.google.maps.DistanceMatrixApi;
import com.google.maps.model.TravelMode;
import com.google.maps.GeoApiContext;
import com.google.maps.model.DistanceMatrix;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/distance")
public class CalculDistanceGeo {
    private final String apiKey = "AIzaSyCfCYhOrGACL6kIYTbQgyLV_e6-eUBtJ3s";

    @Autowired
    private MaterielsService materielsService;

    @PostMapping("/calculate/{id}")
    public String calculateDistance(@RequestBody DistanceRequest request,@PathVariable Long id) {
        String origin = materielsService.getMaterielDetails(id);
        String destination = request.getDestination();

        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey(apiKey)
                .build();

        try {
            DistanceMatrix matrix = DistanceMatrixApi.newRequest(context)
                    .origins(origin)
                    .destinations(destination)
                    .mode(TravelMode.DRIVING)
                    .await();

            if (matrix != null && matrix.rows.length > 0 && matrix.rows[0].elements.length > 0) {
                // System.out.println(matrix.rows[0].elements[0].distance.toString());
                return matrix.rows[0].elements[0].distance.toString();
            } else {
                return "Distance invalide";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error calculating distance";
        }
    }
}

class DistanceRequest {
    private String origin;
    private String destination;

    // Getters and setters
    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }
}
