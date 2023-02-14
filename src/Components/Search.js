import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

function Search() {

  const [value, setValue] = useState('');
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFpbHVyZTJmbHkiLCJhIjoiY2xkaDRveXV2MTFydzNvbzNvb3FubTZhNCJ9.mstb1cKBQiZ2n3QZQCVVtA'; // Set your mapbox token here

  return (
    <form>
      <AddressAutofill accessToken={MAPBOX_TOKEN}>
        <input
        autoComplete="shipping address-line1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      </AddressAutofill>
      <p>{value}</p>
    </form>
  );
}

export default Search;