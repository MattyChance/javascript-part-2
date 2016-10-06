//create a constructor function called Tile that creates new tiles
//this function will take parameter type
function Tile (type) {
    this.type = type;
}

//create the method for Tile - walkable or not?
Tile.prototype.isWalkable = function () {
    if (this.type === 'grass' || this.type === 'sand') {
        return true;
    } else {
        return false;
    }
}

//create a constructor function called Map that generates a map
var tileTypes = ['grass', 'water', 'sand'];

function Map (width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    for(var iW = 0; iW < this.width; iW++) {
        
        var arr= [];
        for (var iH = 0; iH < this.height; iH++) {
            var myTile = new Tile(tileTypes[Math.floor(Math.random() * tileTypes.length)]);

            arr.push(myTile);

        }
        this.tiles.push(arr);
    }
    return this.Map;
}
var myMap = new Map(4,7);

console.log(myMap);

// Map.prototype.getWalkableOutput = function() {
//     var tilesinMap = this.Map.tiles;
//     for (var i = 0; i < this.tiles.length; i++) {
//         if (this.tiles[i].type.walkable() === 'true' ) {
//             tileInMap = 'O';
//         } else {
//             tileInMap = 'X';
//         }
//     }
//     return this.Map;
// };

