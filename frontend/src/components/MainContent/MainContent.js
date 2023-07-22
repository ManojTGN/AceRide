import Home from "./Home";
import Book from "./Book";
import Rides from "./Rides";

export default function MainContent(props){

    return (
        props.selectedPage === 'HOME'? <Home /> :
        props.selectedPage === 'BOOK'? <Book/>:
        <Rides/>
    );
}