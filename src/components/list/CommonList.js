
function CommonList({ itens }) {

  return (
    <>
        <h3>Common List Values:</h3>
        {itens && itens.length > 0  ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))
        ) : (<p>Empty list!</p>)
        }
    </>
  );
}

export default CommonList;
