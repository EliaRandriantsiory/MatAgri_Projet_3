import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
    autocomplete.setFields(['address_components', 'formatted_address']);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // Faites quelque chose avec les données du lieu sélectionné, par exemple, obtenez la ville
      const city = place.address_components.find(component => component.types.includes('locality'));
      console.log(city.long_name);
    });
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Saisissez une ville" />
    </div>
  );
};

export default MyComponent;