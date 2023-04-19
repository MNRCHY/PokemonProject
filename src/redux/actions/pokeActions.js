import axios from "axios";
import { getAllPokeReducer } from "../reducers/pokeReducer";

export const getAllPokemons = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
        )
        dispatch(getAllPokeReducer(data.results))
    } catch (error) {
        throw error
    }
}