
export default function filterSpecies(state = "", action) {
    switch (action.type) {
        case 'FILTERSPECIES':
            return action.species;
        default:
            return state;
    }
}