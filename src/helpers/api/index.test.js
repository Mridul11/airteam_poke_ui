import { POKEMONURI } from "../../utils";
import fetchDataService from '.';

describe('Test Api', () => {
    it('api should return expected data', async () => {
        const response = await fetchDataService(POKEMONURI, () => {}, () =>{});
        console.log(response);
    })
});