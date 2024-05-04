package mg.inclusiv.cdan8.projet3.Controller;
import com.google.maps.DistanceMatrixApi;
import com.google.maps.GeoApiContext;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.TravelMode;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class geolocalisation {
    @RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/distance")
public class Distance {

    private final String apiKey = "AIzaSyCfCYhOrGACL6kIYTbQgyLV_e6-eUBtJ3s";

    @PostMapping("/calculate")
    public String calculateDistance(@RequestBody DistanceRequest request) {
        String origin = request.getOrigin();
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
                return matrix.rows[0].elements[0].distance.toString();
            } else {
                return "Distance not available";
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
    
}
