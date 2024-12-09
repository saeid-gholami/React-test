import "./App.css"
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Works from "./Main/Works";
import Comments from "./Main/Comments";

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Works />
            <Comments />
        </div>
    )
}

export default App;