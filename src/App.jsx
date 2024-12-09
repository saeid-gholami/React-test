import "./App.css"
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Works from "./Main/Works";
import Comments from "./Main/Comments";
import Protfolio from "./Main/portfolio";

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Works />
            <Comments />
            <Protfolio />
        </div>
    )
}

export default App;