import { useNavigate } from "react-router-dom";

function Navbar(){

  const navigate = useNavigate();

    return (
        <div className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <div className="text-xl font-bold underline"><button onClick={() => navigate('/home')} className="bg-blue-800 text-white">Página Foda</button></div>
            <ul className="flex space-x-4">
              <button onClick={() => navigate('/about')} className="bg-blue-800"><a href="#" className="hover:underline text-white">Sobre</a></button>
              <button onClick={() => navigate('/contact')} className="bg-blue-800"><a href="#" className="hover:underline text-white">Contato</a></button>
              <button onClick={() => navigate('/products')} className="bg-blue-800"><a href="#" className="hover:underline text-white">Produtos</a></button>
            </ul>
          </div>
        </div>
    );
}
export default Navbar;