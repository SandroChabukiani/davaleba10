import styled from 'styled-components';
import './App.css';

function App() {
  const Divi = styled.div`
    width: 100%;
    dispay: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div className="App">
      <h1>portfolio</h1>
      <Divi>
        <img style={{ width: '50%', height: 'auto' }} src='https://thumbs.dreamstime.com/b/actor-daniel-craig-29263884.jpg' />
        <h1>James Bond</h1>
        <p style={{ fontSize: '35px', fontWeight: '900' }}>James Bond Spy. With 15 years of experience in
        British intelligence. Skills: HTML, CSS, JavaScript, React.</p>
      </Divi>        
    </div>
  );
}

export default App;
