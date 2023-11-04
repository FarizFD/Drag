import React, { useContext, useState } from "react";
import { inputData } from "./Context";
export default function InputFields() {
    const [savedata, setSaveData] = useState([])
    const { firstName, setFirstName, lastName, setLastName } = useContext(inputData);

    const handleClick = () => {
        setSaveData([...savedata, firstName, lastName])

    }
    return (
        <>
            <div>
                <label>FirstName</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>LastName</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <button onClick={() => handleClick()}>click</button>
            </div>

            <div>
                <span>{savedata}</span>
            </div>
        </>
    )
}