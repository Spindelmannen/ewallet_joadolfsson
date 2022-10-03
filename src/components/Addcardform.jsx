import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { createCard }  from "../Slicer/activeCardSlice"





function Addcardform() {
    const location = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

//states som vi ändrar med våran handlesumbit i form
    const [cardInfoNumber, setCardInfoNumber] = useState("");
    const [cardInfoHolder, setCardInfoHolder] = useState("");
    const [cardInfoExpires, setCardInfoExpires] = useState("");
    const [cardInfoCCV, setCardInfoCCV] = useState("");
    const [cardInfoVendor, setCardInfoVendor] = useState("");
    // const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let cardNumberValue = document.querySelector("#cardNumber").value; 
        let cardHolderValue = document.querySelector("#cardHolder").value;
        let cardExpiresValue = document.querySelector("#cardExpires").value;
        let cardCcvValue = document.querySelector("#cardCCV").value;
        let cardVendorValue = document.querySelector("#vendor").value;

        if(cardNumberValue.length > 16 || cardNumberValue.length < 16){
            alert("Card Number should be 16 numbers!")
        }

        dispatch(createCard({ //data från input av user. createCard en action som vi dispatchar
                vendor: cardVendorValue,
                cardNumb: cardNumberValue,
                holder: cardHolderValue,
                expires: cardExpiresValue,
                ccv: cardCcvValue,
                cardState: false 
            }));
        navigate("/"); //till cards
    };
    
     let name = `${location.state.name.first} ${location.state.name.last}`; //en placeholder med namn från apiet så vi ser vilken user som är aktuell och vi ser att apiet funkar etc

  return (
    <div className='cardForm'>
        <h1 className='siteTitle'>ADD A NEW BANK CARD</h1>

        <p>NEW CARD</p>
        <div className="cardPlaceholder">  {/*här skriver vi ut våran cardinfo som bestäms av våran input. "Live text" */}
            <h2>{cardInfoVendor}</h2>
            <p className='pnumber'>{cardInfoNumber}</p> 
            <p >{cardInfoHolder}</p>
            <p >{cardInfoExpires}</p>
            <p >{cardInfoCCV}</p>
        </div>
        <form>
            <label htmlFor="cardNumber">CARD NUMBER</label>
           <input type="number" value={cardInfoNumber} onChange={(e)=>setCardInfoNumber(e.target.value)} id='cardNumber' />  {/* event som targettar våran input value,och sätter/ändrar setcardinfonumber live till vår nya cardinfonumber .value */}


            <label htmlFor="cardHolder">CARDHOLDER NAME</label>
            <input type="text" value={cardInfoHolder} disabled placeholder={name} onChange={(e)=>setCardInfoHolder(e.target.value)} id='cardHolder'/> {/* lägger in username här med hjälp av location */}


            <label htmlFor="cardExpires">VALID THRU</label>
            <input type="month" value={cardInfoExpires} onChange={(e)=>setCardInfoExpires(e.target.value)} id='cardExpires'/>


            <label htmlFor="cardCCV">CCV</label>
            <input type="text" value={cardInfoCCV} onChange={(e)=>setCardInfoCCV(e.target.value)} id='cardCCV' />

        
            <select defaultValue={'cardInfoVendor'} onChange={(e)=>setCardInfoVendor(e.target.value)} id="vendor">
                <option value="cardInfoVendor" disabled >Choose Bank</option>
                <option value="Handelsbanken">Handelsbanken</option>
                <option value="Nordea">Nordea</option>
                <option value="SEB">SEB</option>
                <option value="Swedbank">Swedbank</option>
                <option value="ICA-Banken">ICA Banken</option> {/*valuet renderas ut på det skapade bankkortet, bugg på active card om valuen har två valutes dvs mellanslag */}
            </select>
            <button onClick={(e) => handleSubmit(e)}> Create Card</button>
        </form>   
        
    </div>
  )
}


export default Addcardform