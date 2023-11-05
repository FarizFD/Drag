

import React, { useState } from "react";
import Draggable from "react-draggable";
import { Container } from 'react-bootstrap';

export default function Drag() {
    const [textarea, setTextArea] = useState('');
    const [register, setRegister] = useState('Register here');

    const [resizeWidthTextarea, setResizeWidthTextarea] = useState("50%");
    const [resizeHeightTextarea, setResizeHeightTextarea] = useState("50%");

    const [resizeWidthRegister, setResizeWidthRegister] = useState("20%");
    const [resizeHeightRegister, setResizeHeightRegister] = useState("10%");

    const parentStyle = {
        width: '400px',
        height: '500px',
        border: '2.5px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '5px',
        marginLeft: '30%',
    };

    const resizableStyleTextarea = {
        width: resizeWidthTextarea,
        height: resizeHeightTextarea,
        overflow: 'auto',
        padding: '10px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: '25%',
        top: '25%',
        bottom:'25%',
        right:'25%'
    };

    const resizableStyleRegister = {
        width: resizeWidthRegister,
        height: resizeHeightRegister,
        overflow: 'auto',
        padding: '1%',
        marginLeft: '12%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '70%',
        border: '0.5px solid black',
    };

    const handleDragTextarea = (e, ui) => {
        const newWidth = `${parseFloat(resizeWidthTextarea) + ui.deltaX}px`;
        const newHeight = `${parseFloat(resizeHeightTextarea) + ui.deltaY}px`;

        setResizeWidthTextarea(newWidth);
        setResizeHeightTextarea(newHeight);
    };

    const handleDragRegister = (e, ui) => {
        const newWidth = `${parseFloat(resizeWidthRegister) + ui.deltaX}px`;
        const newHeight = `${parseFloat(resizeHeightRegister) + ui.deltaY}px`;

        setResizeWidthRegister(newWidth);
        setResizeHeightRegister(newHeight);
    };

    const handleStart = () => {
        setResizeWidthTextarea("100%");
        setResizeHeightTextarea("100%");
    };

    const handleStartRegister = () => {
        setResizeWidthRegister("100%");
        setResizeHeightRegister("100%");
    };

    return (
        <Container className="mt-5">
            <div style={parentStyle}>
                <div className="resizable">
                    <Draggable onDrag={handleDragTextarea} onStart={handleStart}>
                        <div style={resizableStyleTextarea}>
                            <textarea
                                value={textarea}
                                placeholder="type here.."
                                onChange={(e) => setTextArea(e.target.value)}
                                className="resizeHandle"
                                style={{
                                    width: '60%',
                                    height: '70%',
                                    border: '2px solid black',
                                    background: 'transparent',
                                    textAlign: 'left',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }}
                            />
                        </div>
                    </Draggable>
                </div>
                <Draggable axis="both" onDrag={handleDragRegister} onStart={handleStartRegister}>
                    <div style={resizableStyleRegister}>
                        {register}
                    </div>
                </Draggable>
            </div>
        </Container>
    );
}

