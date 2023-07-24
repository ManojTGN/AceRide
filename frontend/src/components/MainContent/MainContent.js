import Home from "./Home/Home";
import Book from "./Book/Book";
import Rides from "./Rides/Rides";

export default function MainContent(props){

    return (
        props.selectedPage === 'HOME'? <Home /> :
        props.selectedPage === 'BOOK'? <Book/>:
        <Rides/>
    );
}