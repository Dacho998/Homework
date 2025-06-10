import styles from './Header.module.css';

interface Props {
    title: string;
}

export const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <h1>{props.title}</h1>
        </header>
    );
};