// import React, { useState } from 'react';
// import Draggable from 'react-draggable';
// import { Image } from 'react-bootstrap';

// export default function ImageDrag() {
//     const [text, setText] = useState('');
//     const cloth = 'Clothing';

//     return (
//         <Draggable
//             axis="both"
//             handle=".handle"
//             defaultPosition={{ x: 0, y: 0 }}
//             position={null}
//             grid={[25, 25]}
//             scale={1}
//         >
//             <div>
//                 <Draggable axis="both">
//                     <div>
//                         <Image style={{ width: '20%' }} src={require('../assets/ClothHanger.png')} />
//                     </div>
//                 </Draggable>
//                 <Draggable axis="both">
//                     <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
//                 </Draggable>
//                 <Draggable axis="both">
//                     <div>
//                         <span><i className="bi bi-dash-lg"></i></span>
//                     </div>
//                 </Draggable>
//                 <Draggable axis="both">
//                     <input type='text' value={cloth} />
//                 </Draggable>
//                 <Draggable axis="both">
//                     <div>
//                         <span><i className="bi bi-dash-lg"></i></span>
//                     </div>
//                 </Draggable>
//             </div>
//         </Draggable>
//     );
// }


import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap'

export default function ImageDrag() {
    const [text, setText] = useState('');
    const cloth = 'Clothing';

    return (
        <>
            <Container className='w-25 mt-5' >
                <div style={{ border: '3px solid #000', padding: '50px', borderRadius: '10px', boxShadow: '2px 5px 15px 5px rgba(0,0,0,0.5)' }}>
                    <Draggable axis="both" handle=".handle">
                        <div className="handle ">
                            <Image style={{ width: '60%', marginLeft: '20%' }} src={require('../assets/ClothHanger.png')} />
                        </div>
                    </Draggable>


                    <div className='mt-5 ms-2'>
                        <Draggable axis="both" handle=".handle">
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="handle fst-italic  fw-bold fs-6"
                            />
                        </Draggable>

                    </div>
                    <div className='d-flex mt-5'>
                        <Draggable axis="both">
                            <div className=''>
                                <span><i className="bi bi-dash-lg"></i></span>
                            </div>
                        </Draggable>
                        <Draggable axis="both">
                            <span className=' lead text-muted' style={{ border: '1px solid #000', paddingRight: '10%', paddingLeft: '10%', marginTop: '2%', marginLeft: '12%' }}>{cloth}</span>
                        </Draggable>
                        <Draggable axis="both">
                            <div>
                                <span><i className="bi bi-dash-lg ms-4"></i></span>
                            </div>
                        </Draggable>
                    </div>
                </div>
            </Container>
        </>
    );
}