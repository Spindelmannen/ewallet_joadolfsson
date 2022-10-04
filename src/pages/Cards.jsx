import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardUser } from "../Slicer/activeCardSlice";
import { Link } from "react-router-dom";
import Renderaddedcards from "../components/Renderaddedcard";


const Cards = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardUser())
    }, [dispatch])
  
    
    const { userInfo, cards } = useSelector((state) => {
        return state.user})

        
    //renderar användarens nya kort 
    return(
        <>
     {cards && cards.map((singleUser, i) => (
        <div className="activeCardDiv">
         <Renderaddedcards data={singleUser} key={i} uniqueID={i} {...userInfo}/>
         </div>
        ))}

        
        <Link className="addCardButton" to={"/addcard"} state={userInfo}>Add new card</Link>
        </>
        
    )

}
 
export default Cards;