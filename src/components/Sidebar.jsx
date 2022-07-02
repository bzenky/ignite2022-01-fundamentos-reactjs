import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.scss'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                className={styles.cover}
                alt="Cover photo"
            />

            <div className={styles.profile}>
                <Avatar src="https://www.github.com/bzenky.png" />
                <strong>Zenky</strong>
                <span>Front-end Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href="#" className={styles.editLink}>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}