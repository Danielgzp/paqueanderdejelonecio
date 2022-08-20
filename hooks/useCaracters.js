import { useState } from "react";
import CaracterCard from "../components/CaracterCard";

const useCaracters = () => {
  const [caracters, setCaracters] = useState([]);

  const getCaracters = async (numberPage) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${numberPage}`
      );
      const response = await data.json();
      setCaracters(response.results);
    } catch (error) {}
  };

  const renderCaracters = () => {
    getCaracters(1);

    return (
      <>
        {caracters.map((caracter) => (
          <CaracterCard key={caracter.id} character={caracter} />
        ))}
      </>
    );
  };

  return {
    renderCaracters,
  };
};

export default useCaracters;
