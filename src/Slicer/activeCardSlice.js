import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getCardUser = createAsyncThunk("user/getCardUser", async () =>{
    return fetch("https://randomuser.me/api/").then((res) => 
    res.json()
    );
});

const activeCardSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
        cards:[
            {
                vendor: "Handelsbanken",
                cardNumb: "5523 3316 7632 9966",
                holder: "",
                expires: "01/25",
                ccv: "873",
                active: true
            }
        ]

    },
    reducers: {
        createCard : (state, action)=>{
            if ([...state.cards].length >= 4) {
                alert("Your E-wallet inventoreiy's.. full.")
                return
            }
            state.cards = [...state.cards, action.payload]
            
        },
        deleteCard : (state, action)=>{
            state.cards.splice(action.payload, 1)
        },
        activateCard : (state, action)=>{
           state.cards.forEach((card) => {
            card.active = false;
                if (card.cardNumb === action.payload) {
                if (card.active === false) {
                    card.active = true;
                    if (card.active = true) {
                        let cardIndex = state.cards.indexOf(card)
                        let element = state.cards[cardIndex];
                        state.cards.splice(cardIndex, 1);
                        state.cards.splice(0, 0, element);
                        
                    }

                    console.log(card.active);   
                } else{
                    card.active = false;
                    console.log(card.active);
                }
    
                }
            })
        }
        
        },
    extraReducers:{
        [getCardUser.fulfilled]: (state, action) => {
            if(state.userInfo=== null){
                state.userInfo = action.payload.results[0];
            }
        }
        //.pending
        //.rejected
    }
})

export const { createCard, deleteCard, activateCard } = activeCardSlice.actions; //exp alla våra funktioner som actions i våran slice
export default activeCardSlice.reducer; //exporterar reducer så den finns tillgänglig
