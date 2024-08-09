import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import PageContent from '../components/PageContent.jsx';
import ProductCard from '../components/ProductCard.jsx';

const product1 = {
    image: 'https://via.placeholder.com/400',
    title: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: '19.99',
};

const product2 = {
    image: 'https://via.placeholder.com/400',
    title: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: '19.99',
};

const product3 = {
    image: 'https://via.placeholder.com/400',
    title: 'Sample Product',
    description: 'This is a description of the sample product.',
    price: '19.99',
};

function Products() {    
    return (
      <>
        <div className="min-h-screen w-screen flex flex-col">
            <Navbar/>
            <PageContent>
                <ProductCard product={product1}/>
                <ProductCard product={product2}/>
                <ProductCard product={product3}/>
            </PageContent>
            <Footer/>
        </div>
      </>
    );
}
export default Products;