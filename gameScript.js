const world = document.getElementById('world');
const grassCounterDisplay = document.querySelector('#grass-counter');
const soilCounterDisplay = document.querySelector('#soil-counter');
const woodCounterDisplay = document.querySelector('#wood-counter');

let grassCounter = 0;
let soilCounter = 0;
let woodCounter = 0;
let selectedTool = ""; 

const gameWorld = [
    ['sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'branch', 'branch', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'treebase', 'treebase', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['grass', 'grass', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil']
];

function generateWorld() {
    for (let row = 0; row < gameWorld.length; row++) {
        for (let col = 0; col < gameWorld[row].length; col++) {
            const tileType = gameWorld[row][col];
            const tile = document.createElement('div');
            tile.classList.add('tile', tileType);
            world.appendChild(tile);

            tile.addEventListener('click', function () {
                digBlock(tile, tileType);
            });
        }
    }
}
function digBlock(tile, blockType) {
    if (selectedTool === 'shovel') {
        if (blockType === 'grass') {
            if (!tile.classList.contains('dug')) {
                tile.style.backgroundImage = "url('first-dig-plants.png')";
                grassCounter++;
                grassCounterDisplay.textContent = grassCounter;
                tile.classList.add('dug');
            }
        } else if (blockType === 'soil') {
            let digState = tile.getAttribute('data-dig-state') || 0;
            digState = parseInt(digState);

            if (digState === 0) {
                tile.style.backgroundImage = "url('first-dig.png')";
                tile.setAttribute('data-dig-state', 1);
                soilCounter++;
                soilCounterDisplay.textContent = soilCounter;
            } else if (digState === 1) {
                tile.style.backgroundImage = "url('second-dig.png')";
                tile.setAttribute('data-dig-state', 2);
                soilCounter++;
                soilCounterDisplay.textContent = soilCounter;
            }
        }
    } else if (selectedTool === 'axe') {
        if (blockType === 'treebase' || blockType === 'branch') {
            if (!tile.classList.contains('dug')) {
                tile.classList.remove('treebase', 'branch');
                tile.classList.add('sky');
                tile.classList.add('dug'); 
                if (blockType === 'treebase') {
                    woodCounter++;
                    woodCounterDisplay.textContent = woodCounter;
                }
            }
        }
    }
}

let tiles = document.querySelectorAll('.tile');
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function () {
        if (this.classList.contains('grass')) {
            digBlock(this, 'grass');
        } else if (this.classList.contains('soil')) {
            digBlock(this, 'soil');
        } else if (this.classList.contains('treebase') || this.classList.contains('branch')) {
            digBlock(this, this.classList.contains('treebase') ? 'treebase' : 'branch');
        }
    });
}

generateWorld();

document.getElementById("reset").addEventListener("click", function () {
    window.location.href = "Main.html";
});

const chest = document.getElementById('chest');
const secondInventory = document.getElementById('second-inventory');

let isChestOpen = false;

chest.addEventListener('click', function () {
    if (isChestOpen) {
        chest.src = 'https://6652d639faf7514bae1b3d79--bright-gecko-d68e17.netlify.app/assets/images/chest/chest/close-chest.gif';
        secondInventory.style.display = 'none';
    } else {
        chest.src = 'https://6652d639faf7514bae1b3d79--bright-gecko-d68e17.netlify.app/assets/images/chest/chest/open-chest.gif';
        secondInventory.style.display = 'grid';
    }

    isChestOpen = !isChestOpen;
});

const shovel = document.getElementById("shovel");
const pickaxe = document.getElementById("pickaxe");
const axe = document.getElementById("axe");
const hand = document.getElementById("hand");

let customCursor = document.createElement('img');
customCursor.id = 'custom-cursor';
document.body.appendChild(customCursor);

function changeCursor(tool) {
    document.body.style.cursor = "none";
    customCursor.src = tool;
}

function resetCursor() {
    document.body.style.cursor = "auto";
    customCursor.src = "";
}

shovel.addEventListener("click", function () {
    changeCursor("shovel.png");
    selectedTool = 'shovel';
});

pickaxe.addEventListener("click", function () {
    changeCursor("pickaxe.png");
    selectedTool = 'pickaxe';
});

axe.addEventListener("click", function () {
    changeCursor("axe.png");
    selectedTool = 'axe';
});

hand.addEventListener("click", function () {
    changeCursor("spyglass.png");
    selectedTool = 'hand';
});

window.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});
