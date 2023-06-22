import react from 'react';
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from '../../styles/Home.module.css'

const LoginLogout = () => {

   const { user, error, isLoading } = useUser();

    if(error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (user) console.log(user)

    return (
        <div className={styles.grid}>
            {!user && (
                <a href="/api/auth/login" className={styles.card}>
                    <h2>Iniciar Sesion &rarr;</h2>
                </a>
            )}

            {user && (
                <a href="/api/auth/logout" className={styles.card}>
                    <h2>Cerrar Sesion &rarr;</h2>
                </a>
            )}
        </div>
    );
}

export default LoginLogout;