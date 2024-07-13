import styles from './CabeceraLink.module.css';
const { Link } = require('react-router-dom');

const CabeceraLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
};

export default CabeceraLink;
