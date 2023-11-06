
// import React, { useState } from "react";
// import Draggable from "react-draggable";
// import { Container } from "react-bootstrap";

// export default function Drag() {
//     const [textarea, setTextArea] = useState("Type here...");
//     const [spanText, setSpanText] = useState("Hello, world");
//     const [textareaDimensions, setTextAreaDimensions] = useState({
//         width: 200,
//         height: 100,
//     });
//     const [spanDimensions, setSpanDimensions] = useState({
//         width: 100,
//         height: 50,
//     });

//     const parentStyle = {
//         width: "400px",
//         height: "500px",
//         border: "2.5px solid red",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         borderRadius: "5px",
//         marginLeft: "30%",
//         overflow: "hidden",
//     };

//     const resizableStyle = {
//         position: "absolute",
//         width: `${textareaDimensions.width}px`,
//         height: `${textareaDimensions.height}px`,
//         border: "2px solid black",
//         background: "transparent",
//         overflow: "hidden",
//         cursor: "text",
//     };

//     const spanStyle = {
//         position: "absolute",
//         width: `${spanDimensions.width}px`,
//         height: `${spanDimensions.height}px`,
//         border: "2px solid black",
//         background: "transparent",
//         overflow: "hidden",
//         cursor: "text",
//     };

//     const handleResizeTextarea = (event, data) => {
//         const parentElement = event.target.parentElement;
//         if (parentElement) {
//             const newWidth = textareaDimensions.width + data.deltaX;
//             const newHeight = textareaDimensions.height + data.deltaY;
//             const minWidth = 50;
//             const minHeight = 50;
//             if (
//                 newWidth >= minWidth &&
//                 newHeight >= minHeight &&
//                 newWidth <= parentElement.offsetWidth &&
//                 newHeight <= parentElement.offsetHeight
//             ) {
//                 setTextAreaDimensions({ width: newWidth, height: newHeight });
//             }
//         }
//     };

//     const handleResizeSpan = (event, data) => {
//         const parentElement = event.target.parentElement;
//         if (parentElement) {
//             const newWidth = spanDimensions.width + data.deltaX;
//             const newHeight = spanDimensions.height + data.deltaY;
//             const minWidth = 50;
//             const minHeight = 50;
//             if (
//                 newWidth >= minWidth &&
//                 newHeight >= minHeight &&
//                 newWidth <= parentElement.offsetWidth &&
//                 newHeight <= parentElement.offsetHeight
//             ) {
//                 setSpanDimensions({ width: newWidth, height: newHeight });
//             }
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <div style={parentStyle}>
//                 <Draggable bounds="parent" onDrag={handleResizeTextarea}>
//                     <div style={resizableStyle} contentEditable={true}>
//                         {textarea}
//                     </div>
//                 </Draggable>
//                 <Draggable bounds="parent" onDrag={handleResizeSpan}>
//                     <div style={spanStyle} contentEditable={false}>
//                         {spanText}
//                     </div>
//                 </Draggable>
//             </div>
//         </Container>
//     );
// }

import React, { useState } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";

export default function Drag() {
    const [textarea, setTextArea] = useState("Type here...");
    const [spanText, setSpanText] = useState("Hello, world");
    const [textareaDimensions, setTextAreaDimensions] = useState({
        width: 200,
        height: 100,
    });
    const [spanDimensions, setSpanDimensions] = useState({
        width: 100,
        height: 50,
    });

    const parentStyle = {
        width: "400px",
        height: "500px",
        border: "2.5px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderRadius: "5px",
        marginLeft: "30%",
        overflow: "hidden",
    };

    const resizableStyle = {
        position: "absolute",
        width: `${textareaDimensions.width}px`,
        height: `${textareaDimensions.height}px`,
        border: "2px solid black",
        background: "transparent",
        overflow: "hidden",
        cursor: "grab",
    };

    const spanStyle = {
        position: "absolute",
        width: `${spanDimensions.width}px`,
        height: `${spanDimensions.height}px`,
        border: "2px solid black",
        background: "transparent",
        overflow: "hidden",
        cursor: "grab",
    };

    const resizableBorder = {
        position: "absolute",
        width: "8px",
        height: "8px",
        background: "black",
        cursor: "nesw-resize",
    };

    const handleResizeTextarea = (event, data) => {
        const parentElement = event.target.parentElement;
        if (parentElement) {
            const newWidth = textareaDimensions.width + data.deltaX;
            const newHeight = textareaDimensions.height + data.deltaY;
            const minWidth = 10;
            const minHeight = 10;
            if (
                newWidth >= minWidth &&
                newHeight >= minHeight &&
                newWidth <= parentElement.offsetWidth &&
                newHeight <= parentElement.offsetHeight
            ) {
                setTextAreaDimensions({ width: newWidth, height: newHeight });
            }
        }
    };

    const handleResizeSpan = (event, data) => {
        const parentElement = event.target.parentElement;
        if (parentElement) {
            const newWidth = spanDimensions.width + data.deltaX;
            const newHeight = spanDimensions.height + data.deltaY;
            const minWidth = 5;
            const minHeight = 5;
            if (
                newWidth >= minWidth &&
                newHeight >= minHeight &&
                newWidth <= parentElement.offsetWidth &&
                newHeight <= parentElement.offsetHeight
            ) {
                setSpanDimensions({ width: newWidth, height: newHeight });
            }
        }
    };

    return (
        <Container className="mt-5">
            <div style={parentStyle}>
                <Draggable bounds="parent" onDrag={handleResizeTextarea}>
                    <div style={resizableStyle} contentEditable={true}>
                        {textarea}
                        <div style={{ ...resizableBorder, top: 0, left: 0 }} />
                        <div style={{ ...resizableBorder, top: 0, right: 0 }} />
                        <div style={{ ...resizableBorder, bottom: 0, left: 0 }} />
                        <div style={{ ...resizableBorder, bottom: 0, right: 0 }} />
                    </div>
                </Draggable>
                <Draggable bounds="parent" onDrag={handleResizeSpan}>
                    <div style={spanStyle} contentEditable={false}>
                        {spanText}
                        <div style={{ ...resizableBorder, top: 0, left: 0 }} />
                        <div style={{ ...resizableBorder, top: 0, right: 0 }} />
                        <div style={{ ...resizableBorder, bottom: 0, left: 0 }} />
                        <div style={{ ...resizableBorder, bottom: 0, right: 0 }} />
                    </div>
                </Draggable>
            </div>
        </Container>
    );
}