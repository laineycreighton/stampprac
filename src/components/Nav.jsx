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
                    <Link to="/" className="logo-link">
                        <h1>STAMPHALA</h1>
                    </Link>
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

                <Link to="/lineup">
                    LINEUP
                </Link>


                <Link to="/experience">
                    EXPERIENCE
                </Link>


                <Link to="/info">
                    INFO
                </Link>


                <Link to="/map">
                    MAP
                </Link>


                <Link to="/merch">
                    MERCH
                </Link>

            </div>

        </nav>
    )
}