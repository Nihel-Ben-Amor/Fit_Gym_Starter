import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Pograms/Programs';
import Reason from './components/Reasons/Reason';
import Plan from './components/Plans/Plan';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';



export default App;

function App() {
    return ( < div className = 'App' >

        <
        Hero >  <
        /Hero> 
        <Programs></Programs>
        <Reason></Reason>
        <Plan></Plan>
        <Testimonials></Testimonials>
        <Join></Join>
        <Footer></Footer>
        
     
        < /
        div > )
}