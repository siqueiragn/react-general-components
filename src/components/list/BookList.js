
import style from './BookList.module.css';

function BookList({ itens }) {

    return (
      <div>
        <h3>Book List:</h3>
        <div className={style.bookShowCase}>
           
          {itens && itens.length > 0  ? (
              itens.map((item, index) => (
                  <div key={item.id} className={style.bookCard}>
                    <div className={style.bookCard_title}>{item.title}</div>
                    <div className={style.bookCard_subtitle}>{item.subtitle}</div>
                    <div>Author: {item.author}</div>
                    <div>Year: {item.year}</div>
                  </div>
              ))
          ) : (<p>Empty list!</p>)
          }
        </div>
      </div>
    );
  }
  
  export default BookList;
  