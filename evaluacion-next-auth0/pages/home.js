import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Venta de Carros</title>
        <meta name="description" content="Encuentra los mejores carros a precios increíbles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>¡Bienvenido a la Venta de Carros!</h1>
        <p className={styles.description}>Encuentra los mejores carros a precios increíbles.</p>

        <h2 className={styles.subtitle}>Últimos carros agregados:</h2>
        <ul className={styles.carList}>
          <li>Carro 1</li>
          <li>Carro 2</li>
          <li>Carro 3</li>
        </ul>

        <p className={styles.description}>Explora nuestra amplia selección de carros disponibles y encuentra el vehículo perfecto para ti.</p>

        <div className={styles.imageContainer}>
          <Image src="/img/carro.png" alt="Carro" width={800} height={200} />
        </div>

        <button className={styles.button}>Ver todos los carros</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
