//----- IMPORTS -----//

//CSS
import '../assets/css/Lineup.css'

//Images
import lineup from '../assets/images/festivallineup.jpg'

//----- EXPORTS -----//
export default function Lineup() {
    return (
        <div className="lineup-container">

            {/*----- IMAGE -----*/}
            <img src={lineup} alt="festival lineup schedule" />

            {/*----- ARTISTS -----*/}
            {/* <div className="artists-block">
                <p>ARTISTS</p>
            </div> */}

        </div>
    );
}