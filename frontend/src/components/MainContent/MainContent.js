import Home from "./Home/Home";
import Book from "./Book/Book";
import Rides from "./Rides/Rides";

export default function MainContent(props){

    return (
        props.selectedPage === 'HOME'? <Home data={props.data}/> :
        props.selectedPage === 'BOOK'? <Book />:
        props.selectedPage === 'RIDES'?<Rides/>:
        props.selectedPage === 'PROFILE'?null:
        props.selectedPage === 'ADDRESS'?null:
        props.selectedPage === 'SETTINGS'?null:
        null
    );
}