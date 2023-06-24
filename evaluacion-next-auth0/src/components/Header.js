const Header = () => {
    return (
      <nav style={{ backgroundColor: '#000', padding: '10px' }}>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
          <a href="/home" style={{ textDecoration: 'none', color: '#fff' }}>Mi Sitio</a>
        </div>
        <ul style={{ listStyle: 'none', display: 'inline-block', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="/profile" style={{ textDecoration: 'none', color: '#fff' }}>Mis Datos</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="/contacto" style={{ textDecoration: 'none', color: '#fff' }}>Contactanos</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="/api/auth/logout" style={{ textDecoration: 'none', color: '#fff' }}>Salir</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Header;
  