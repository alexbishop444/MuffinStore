export default function (state=0, action) {
    switch(action.type) {
        case "MUFFIN_BOUGHT":
            return action.payload += state;
            break;
    }
    return state;
}