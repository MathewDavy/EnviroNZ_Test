import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const Button = styled.button`
  width: 200px;
  margin: 0 auto;
`;
const Suburb = styled.div``;
export const Form = () => {
  useEffect(() => {}, []);

  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [suburb, setSuburb] = useState("");

  const handleLongitudeChange = (event: { target: { value: any } }) => {
    setLongitude(event.target.value);
  };
  const handleLatitudeChange = (event: { target: { value: any } }) => {
    setLatitude(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const response = await fetch(
      `suburbs/?longtitude=${longitude}&latitude=${latitude}`
    );
    const data = await response.json();
    setSuburb(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="Latitude">Latitude: </label>

        <input
          type="number"
          value={latitude}
          onChange={handleLatitudeChange}
          placeholder="Latitude"
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="Longitude">Longitude: </label>

        <input
          type="number"
          value={longitude}
          onChange={handleLongitudeChange}
          placeholder="Longitude"
        />
      </InputContainer>
      <Button type="submit">Submit</Button>

      {suburb !== "" && <Suburb>Closest suburb: {suburb}</Suburb>}
    </StyledForm>
  );
};
