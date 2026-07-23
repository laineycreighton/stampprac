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
                    <h1>STAMPHALA</h1>
                </div>

                {/*----- TICKET BUTTON SECTION -----*/}
                <div className='tickets'>

                    <button>
                        TICKETS
                    </button>

                </div>
            </div>

            {/*----- LINKS SECTION -----*/}
            <div className='links'>
                <div>

                    LINEUP

                </div>
                <div>

                    EXPERIENCE

                </div>
                <div>

                    INFO

                </div>
                <div>

                    MAP

                </div>
                <div>

                    MERCH

                </div>
            </div>


        </nav>
    )
}