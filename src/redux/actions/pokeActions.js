import axios from "axios";
import { getAllPokeReducer } from "../reducers/pokeReducer";

export const getAllPokemons = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            'https://pokeapi.co/api/v2/pokemon'
        )
        dispatch(getAllPokeReducer(data.results))
    } catch (error) {
        throw error
    }
}