import React, { Component } from "react";

class School extends Component {
    render() {
        return (
            <div id="school">
                <h1>FORMATION</h1>
                <br></br><br></br>
                <div id="formation" >
                    <div className="formation">
                        <br></br>
                        <h2><b>Web@cademie By Epitech</b></h2>
                        <br></br>
                        <p><i>2020</i></p>
                        <br></br>
                        <p>Développeur-Intégrateur Web (Titre 5 RNCP - BAC +2)</p>
                    </div>
                    <div className="formation">
                        <br></br>
                        <h2><b>Université Paris 3</b></h2>
                        <br></br>
                        <p><i>2016</i></p>
                        <br></br>
                        <p>Licence Langues Etrangères Appliquées</p>
                    </div>
                    <div className="formation">
                        <br></br>
                        <h2><b>Lycée Gabriel Fauré</b></h2>
                        <br></br>
                        <p><i>2013</i></p>
                        <br></br>
                        <p>BAC Economique et Social</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default School;