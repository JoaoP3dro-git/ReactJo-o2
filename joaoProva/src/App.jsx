import { useNavigate } from "react-router-dom";

function App() {
  
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li onClick={() => navigate('/home')}>Home</li>
      </ul>
    </>
  );
}

export default App;