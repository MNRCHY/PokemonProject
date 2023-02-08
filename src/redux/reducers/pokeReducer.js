import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: []
}

const pokeSlicer = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getAllPokeReducer: (state, action) => {
            state.pokemons = action.payload
        }
    }
})

export const {getAllPokeReducer} = pokeSlicer.actions
export default pokeSlicer.reducer