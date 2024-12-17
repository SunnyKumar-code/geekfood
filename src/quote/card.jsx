import styles from './card.module.css'

function Card({ para, name }) {
    return (
      <div className={styles.Card}>
        <p>{para}</p>
        <p>{name}</p>
      </div>
    );
  }
  
  export default Card;
  