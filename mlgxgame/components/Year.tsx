"use client";

import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState(2026); // valeur de départ, pour la préparation du site

  useEffect(() => {
    setYear(new Date().getFullYear()); // la vraie année, calculée dans le navigateur
  }, []);

  return <>{year}</>;
}