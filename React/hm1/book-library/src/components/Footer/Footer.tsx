import { library } from "../BookList/BookList";
import './footer.css';

export const Footer = () => {

  const todayDate = () => {
    return new Date().toDateString();
  };

  return (
    <footer>
      <p>Today is: {todayDate()}</p>
      <p>Books in library: {library.length}</p>
    </footer>
  );
};