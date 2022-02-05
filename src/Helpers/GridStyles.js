export const getStyleClass = (len) => {
    let styleClass = "";
    if (len % 2 === 1 && len > 3) {
        styleClass = "TileOdd";
    } else if (len <= 2) {
        styleClass = "Tile2";
    }
    return styleClass;
}