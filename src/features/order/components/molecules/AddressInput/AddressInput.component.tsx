import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

interface Address {
  properties: {
    label: string;
  }
}

const AddressInput: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [address, setAddress] = useState<Address>();

  const updateSearchParams = async (address: string) => {
    if (address.length < 5) return;

    const searchParam = address.replace(/\s/g, '+');

    const res = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${searchParam}`);

    setAddresses(res.data.features);
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={addresses.map((address) => { return address.properties.label })}
      sx={{ width: "100%" }}
      //@ts-ignore
      onChange={(e) => setAddress(e.target.value)}
      renderInput={(params) => <TextField {...params} label="Adresse de livraison" onChange={(e) => updateSearchParams(e.target.value)} />}
    />
  )
}

export default AddressInput;