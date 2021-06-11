import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <h1>COMPETENCES</h1>
                <br></br><br></br>
                <div id="langage">
                    <div className="langage">
                        <h2>Back-End</h2>
                        <br></br>
                        <p>Laravel</p>
                        <p>Symfony</p>
                        <p>PHP</p>
                        <p>Node.JS</p>
                    </div>
                    <div className="langage">
                        <h2>Front-End</h2>
                        <br></br>
                        <p>ReactJS</p>
                        <p>jQuery</p>
                        <p>Javascript</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                    </div>
                    <div className="langage">
                        <h2>Database</h2>
                        <br></br>
                        <p>MySQL</p>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;