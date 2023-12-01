
import './App.css';
import Nav from './component/nav/Nav'
import Main from './component/main/form/main/Main'
import Form from './component/form/Form';

function App() {
  return (
    <div>
      <Nav/>
      <main className='main'>
        <Main/>
      <Form/>
      </main>
      
    </div>
  );
}

export default App;
