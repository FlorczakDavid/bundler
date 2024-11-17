import * as constants from '../assets/constants'

export function generateMapUrl(coordinates, zoom = 18) {
    return `${constants.MAPS_EMBED_URL}${constants.KEY_PROMPT}${constants.API_KEY}` +
        `${constants.CENTER_PROMPT}${coordinates.y},${coordinates.x}`+
        `${constants.ZOOM_PROMPT}${zoom}`;
}