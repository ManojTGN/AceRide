import Home from "./Home/Home";
import Book from "./Book/Book";
import Rides from "./Rides/Rides";
import Settings from "./Settings/Settings";
import Logout from "./Logout";

export default function MainContent(props){

    return (
        props.selectedPage === 'HOME'? <Home data={props.data}/> :
        props.selectedPage === 'BOOK'? <Book />:
        props.selectedPage === 'RIDES'?<Rides data={props.data}/>:
        props.selectedPage === 'PROFILE'?null:
        props.selectedPage === 'SETTINGS'?<Settings data={props.data}/>:
        props.selectedPage === 'LOGOUT'?<Logout data={props.data}/>:
        null
    );
}