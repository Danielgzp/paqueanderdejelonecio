import React from 'react'
import styles from "../styles/Home.module.css";

const CaracterCard = ({character}) => {
  return (
    <div className={styles.cardCaracter}>
        <h3>{character.name}</h3>
        <img src={character.image} />
    </div>
  )
}

export default CaracterCard