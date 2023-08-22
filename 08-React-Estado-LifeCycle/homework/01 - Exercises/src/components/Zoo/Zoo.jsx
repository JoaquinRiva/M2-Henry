import React, { useState, useEffect } from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";

export default function Zoo() {
  const [zoo, setZoo] = useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleInputChange = (evento) => {
    setZoo({
      ...zoo,
      zooName: evento.target.value,
    });
  };

  const fetchZooData = async () => {
    try {
      const response = await fetch("http://localhost:3001/zoo");
      const data = await response.json();
      setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchZooData();
  }, []);

  const handleSpecies = (selectedSpecies) => {
    const filteredAnimals = zoo.allAnimals.filter((animal) =>
      animal.species === selectedSpecies
    );
    setZoo({
      ...zoo,
      animals: filteredAnimals,
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };

  return (
    <div>
      <label>Zoo name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}
