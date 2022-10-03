import React from 'react'
import { deleteCard, activateCard } from "../Slicer/activeCardSlice";
import {useDispatch} from "react-redux"

const Renderaddedcard = ({ data, name, uniqueID }) => {
    console.log(data)
  const dispatch = useDispatch();
return (
<> 
    <div className="card">
        {data?.active && <p className='activePara'><strong>Active</strong></p>} {/*lägger till en p-tag om active-data är true */}
        <h2 className='vendorTitle'>{data?.vendor}</h2>
        <p className='pcardnumber'> {data?.cardNumb}</p>
        <p className="cardOwnerTitle">CARD OWNER:</p>
        <p className='cardOwner'>{name?.first} {name?.last}</p>
        <p className='validTitle'>VALID </p>
        <p className="validDate">{data?.expires}</p>
        {!data?.active && <button className="cardButtonDel" onClick={()=>{dispatch(deleteCard(uniqueID))}}>delete card</button>} {/* alla kort som inte är aktiva får knapparna här */}
        {!data?.active && <button className="cardButtonAct" onClick={()=>{dispatch(activateCard(data.cardNumb))}}>activate card</button>}
        

    </div>
</>
)
}

export default Renderaddedcard;