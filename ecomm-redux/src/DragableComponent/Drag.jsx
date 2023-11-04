import React, { useState } from "react";
import Draggable from "react-draggable";
import { Container } from 'react-bootstrap'

export default function Drag() {
    const [textarea, setTextArea] = useState('');
    const register = 'Register here'

    const parentStyle = {
        width: '400px',
        height: '500px',
        border: '2.5px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius:'5px',
        marginLeft:'30%',
        backgroundColor:'#8a2be2'
    };

    const resizableStyle = {
        width: '200px',
        height: '200px', // Adjust the height as needed
        resize: 'both',
        overflow: 'auto',
        border: '1px solid #000',
        padding: '10px',
        position: 'absolute',
    };

    const registerStyle = {
        border: '1px solid #000',
        padding: '2%',
        marginBottom: '2%',
        marginLeft: '12%',
    };

    return (
        <Container className="mt-5">
            <div style={parentStyle}>
                <Draggable axis="both" handle=".resizable">
                    <div className="resizable">
                        <textarea
                            value={textarea}
                            placeholder="type here.."
                            onChange={(e) => setTextArea(e.target.value)}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: '2px solid black',
                                // outline: '2px solid yellow',
                                background: 'transparent',
                                resize: 'both', 
                                textAlign: 'left',
                                maxWidth: '100%', // Set maximum width
                                maxHeight: '100%', // Set maximum height
                            }}
                        />
                    </div>
                </Draggable>
                <Draggable axis="both" >
                    <span style={registerStyle} >
                        {register}
                    </span>
                </Draggable>
            </div>
        </Container>
    );
}