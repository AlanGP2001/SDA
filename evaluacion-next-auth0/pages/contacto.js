import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

const Contact = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Contacto - Venta de Carros</title>
          <meta name="description" content="Contáctanos para obtener más información sobre la venta de carros" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header />
  
        <main className={styles.main}>
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.description}>Contáctanos para obtener más información sobre la venta de carros.</p>
  
          <div className={styles.contactForm}>
            <input type="text" placeholder="Nombre" className={styles.input} />
          </div>

          <div className={styles.contactForm}>
            <input type="email" placeholder="Correo electrónico" className={styles.input} />
          </div>

          <div className={styles.contactForm}>
            <textarea placeholder="Mensaje" className={styles.input} />
          </div>

          <div className={styles.contactForm}>
            <button className={styles.button}>Enviar mensaje</button>
          </div>
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

export default Contact;
