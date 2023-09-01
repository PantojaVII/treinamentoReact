import styles from './Frases.module.css'

function Frase() {

    return (
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Minha pequena frase</p>
        </div>
    )


}

export default Frase;