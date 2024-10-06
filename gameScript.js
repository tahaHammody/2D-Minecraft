const world = document.getElementById('world');

const gameWorld = [
    // Row 1 
    ['sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky'],
    // Row 2
    ['sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky'],
    // Row 3
    ['sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
    // Row 4
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    // Row 5 
    ['sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky'],
    // Row 6 
    ['sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky'],
    // Row 7 
    ['sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'sky'],
    // Row 8 
    ['sky', 'sky', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    // Rows 9-15 
    ['grass', 'grass', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil','soil', 'soil']
];

function generateWorld() {
    for (let row = 0; row < gameWorld.length; row++) {
        for (let col = 0; col < gameWorld[row].length; col++) {
            const tileType = gameWorld[row][col];
            const tile = document.createElement('div');
            tile.classList.add('tile', tileType);
            world.appendChild(tile);
        }
    }
}

generateWorld();

document.getElementById('reset').addEventListener('click', function() {
    world.innerHTML = '';  
    generateWorld();       
});

const chest = document.getElementById('chest');
const secondInventory = document.getElementById('second-inventory');

let isChestOpen = false;

chest.addEventListener('click', function() {
    if (isChestOpen) {
        chest.src = 'https://6652d639faf7514bae1b3d79--bright-gecko-d68e17.netlify.app/assets/images/chest/chest/close-chest.gif';
        secondInventory.style.display = 'none';
    } else {
        chest.src = 'https://6652d639faf7514bae1b3d79--bright-gecko-d68e17.netlify.app/assets/images/chest/chest/open-chest.gif';
        secondInventory.style.display = 'grid';
    }
    
    isChestOpen = !isChestOpen;
});