import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.scss'

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src="https://www.github.com/bzenky.png" />
                    <div className={styles.authorInfo}>
                        <strong>Zenky</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que eu fiz no NLW, evento da Rocketseat</p>
                <p><a href="https://www.github.com/bzenky" target="_blank">github.com/bzenky</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}