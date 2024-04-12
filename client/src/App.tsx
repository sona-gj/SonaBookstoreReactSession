import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
// @ts-ignore
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import './App.css'
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



function App() {
    // const [isLoading, setIsLoading] = useState(true);
    return (
        <Router basename={"SonaBookstoreReactSession"}>
            <AppHeader/>
            {/*{isLoading ? <Loader/> :*/}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories/name/:categoryName" element={<CategoryBookList/>}/>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<div className={"page-not-found"}>Page Not Found</div>}/>
                </Routes>
            {/*}*/}
            <AppFooter/>

        </Router>

    )
        ;
}

export default App;

