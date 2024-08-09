import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import PageContent from '../components/PageContent.jsx';

function Contact() {    
    return (
      <>
        <div className="min-h-screen w-screen flex flex-col">
            <Navbar/>
            <PageContent/>
            <Footer/>
        </div>
      </>
    );
}
export default Contact;