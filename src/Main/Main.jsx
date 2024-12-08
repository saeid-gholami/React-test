import Body from "./Main-body/Body";
import "../Main/Main.css"

function Main() {
    return (
        <div class='main'>
            <h1 class="main__title">This is main site</h1>
            <Body></Body>
            <img src="./public/vite.svg" alt="" />
        </div>
    )
}

export default Main;