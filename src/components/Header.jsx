import styles from './Header.module.scss';

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do Ignite" />
        </header>
    )
}