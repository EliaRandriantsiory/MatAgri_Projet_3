import React from 'react';
import GooglePlacesAutocomplete from 'react-google-autocomplete';

const SaisieAutomatiqueVille = () => {
  const handlePlaceSelect = (place) => {
    if (place && place.address_components) {
      const city = place.address_components.find(component => component.types.includes('locality'));
      if (city) {
        console.log(city.long_name);
      }
    }
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        onSelect={handlePlaceSelect}
        apiKey="AIzaSyCfCYhOrGACL6kIYTbQgyLV_e6-eUBtJ3s"
        autocompletionRequest={{
          types: ['(cities)'],
        }}
        placeholder="Saisissez une ville"
      />
    </div>
  );
};

export default SaisieAutomatiqueVille;