
import CommonList from './components/list/CommonList';
function App() {

  const itens = [ 'React', 'Vue', 'AngularJS'];
  return (
    <div className="App"> 
        {/* <CreatePerson/> */}
        <CommonList itens={itens}/>
        <CommonList/>

    </div>
  );
}

export default App;
