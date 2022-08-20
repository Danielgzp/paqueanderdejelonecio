import useCaracters from "../hooks/useCaracters";
import styles from "../styles/Home.module.css";

const Caracters = () => {
  const { renderCaracters } = useCaracters();

  return (
    <section className={styles.containersito}>{renderCaracters()}</section>
  );
};

export default Caracters;
