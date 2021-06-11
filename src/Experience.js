import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div id="experience">
                <h1>EXPERIENCE</h1>
                <div id="work">
                    <div className="work">
                        <br></br><br></br>
                        <h2><b>Les Cinémas Gaumont-Pathé</b></h2>
                        <br></br>
                        <p><i>Manager des équipes | 2017-2018</i></p>
                        <br></br><br></br>
                        <p>- Formation et intégration des agents</p>
                        <p>- Gestion de l'administration du cinéma et des caisses</p>
                        <p>- Gestion de l'événementiel</p>
                    </div>
                    <div className="work">
                        <br></br><br></br>
                        <h2><b>Les Cinémas Gaumont-Pathé</b></h2>
                        <br></br>
                        <p><i>Agent d'accueil | 2013-2017</i></p>
                        <br></br><br></br>
                        <p>- Accueil, orientation et ventes clients</p>
                        <p>- Gestion autonome de la caisse</p>
                    </div>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default Experience;