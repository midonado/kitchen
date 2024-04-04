import * as React from 'react';
import { produce } from "immer";
import './bg.css'

function Bg() {
    const [imgVis, setImgVis] = React.useState([true, false, false]);

    const makeImgVis = (id) => {
        setImgVis(
            produce((draft) => {
                draft[id] = true;
            }))
    }

    React.useEffect(() => {
        const timeout1 = setTimeout(() => {
            // Code to execute after the first timeout
            makeImgVis(1);
            
            const timeout2 = setTimeout(() => {
                // Code to execute after the second timeout
                makeImgVis(2);
            }, 750); // Second timeout after 1 second

            // Return a cleanup function to clear the second timeout if needed
            return () => clearTimeout(timeout2);
        }, 1500); // First timeout after 1 second

        // Return a cleanup function to clear the first timeout if needed
        return () => clearTimeout(timeout1);
    }, []);

    return (
        <>
            <div className="bg">
                {imgVis[0] && <img className="bg__img bg__img-0" src="/bg-img-0.svg" alt="" />}
                {imgVis[1] && <img className="bg__img bg__img-1" src="/bg-img-1.svg" alt="" />}
                {imgVis[2] && <img className="bg__img bg__img-2" src="/bg-img-2.svg" alt="" />}
            </div>
        </>)
}

export default Bg