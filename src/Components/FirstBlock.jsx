import React from 'react'
import Slide from 'react-reveal/Slide';
import speed from '../assets/test.png';
import {Button} from "react-bootstrap";


export default function FirstBlock() {

    return (
        <>
            {/* First Row */}
            <div className="parentOfOneCard" >
                <Slide top>
                <div className="cardStyles cardOneOfOne">
                    <h2 className="cardHeading" >Go to the Next Level</h2>
                        <p
                        style={{width:"100%"}}
                        >Train to Silicon Valley standards for roles in software engineering,
                        full stack, and more.
                    </p>
                    </div>
                </Slide>
            </div>

            {/* Second Row */}
            <div className="parentOfTwoCards" >
                <Slide left>
                <div className="cardStyles cardOneOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                        </p>
                        <img
                            src={speed}
                            alt="speed"
                            className="CardImages" />
                        <div className="buttonGroup">
                            <Button size="sm" className="linkButton" variant="outline-primary" >
                                Learn More 
                            </Button>
                        </div>
                </div>
                </Slide>
                <Slide right>
                <div className="cardStyles cardTwoOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                    </p>
                    </div>
                </Slide>
            </div>

            {/* Third Row */}
            <div className="parentOfTwoCards" >
                <Slide left>
                <div className="cardStyles cardOneOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                    </p>
                    </div>
                </Slide>
                <Slide right>
                <div className="cardStyles cardTwoOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                    </p>
                    </div>
                </Slide>
            </div>



            <div className="parentOfTwoCards" >
                <Slide left>
                <div className="cardStyles cardOneOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                    </p>
                        <img
                            src={speed}
                            alt="speed"
                            className="CardImages" />
                </div>
                </Slide>
                <Slide right>
                <div className="cardStyles cardTwoOfTwo">
                    <h2 className="cardHeading">Go to the Next Level</h2>
                    <p>Train to Silicon Valley standards for roles in software engineering,
                        full stack development, and more.
                    </p>
                    </div>
                </Slide>
            </div>





        </>
    )
}
