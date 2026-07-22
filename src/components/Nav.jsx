//----- IMPORTS -----//
//REACT
import { Link } from "react-router-dom";

//CSS
import '../assets/css/Nav.css';

//IMAGES


//----- EXPORTS -----//
export default function Nav() {

    //Return
    return (
        <nav>
            {/*----- LOGO SECTION -----*/}
            <div className='logo'>

                {/* intentionally empty for nav bar spacing*/}
                <div className='empty'>
                    {/* nothing to see here*/}
                </div>

                <div>
                    <h1>Stamphala</h1>
                </div>

                {/*----- TICKET BUTTON SECTION -----*/}
                <div className='tickets'>

                    <button>
                        Tickets
                    </button>

                </div>
            </div>

            {/*----- LINKS SECTION -----*/}
            <div className='links'>
                <div>

                    Lineup

                </div>
                <div>

                    Experience

                </div>
                <div>

                    Info

                </div>
                <div>

                    Map

                </div>
                <div>

                    Merch

                </div>
            </div>


        </nav>
    )
}