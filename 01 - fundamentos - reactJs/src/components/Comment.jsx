import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/breno-facanha.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Breno Façanha</strong>
                            <time title='02 de Abril às 12:40h' dateTime='2023-04-02 12:40:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                           <Trash size={20} />
                        </button>
                    </header>
                    
                    <p>Muito bom Breno, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}