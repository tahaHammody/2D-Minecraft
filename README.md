# 2D Minecraft-Inspired World-Building Game

Welcome to a simplified, Minecraft-inspired 2D game that allows users to interact with blocks, gather resources, and modify the environment using various tools. Players can dig, collect, and manage resources like grass, soil, and wood, each with specific behaviors tied to the tool they use.

## Gameplay Features

- **Shovel**: The shovel can dig **grass** (once) and **soil** (twice). Grass blocks are dug only once, while soil blocks require two digs. After digging, the block changes its appearance, and the resource counters for grass and soil are incremented accordingly.
- **Axe**: The axe chops down **tree branches** and **tree bases**. Each tree base block increases the wood counter by 1 and converts the block into the sky, representing its removal from the game world.
- **Pickaxe**: (Planned feature) The pickaxe will interact with stone and related blocks, designed for mining minerals and other underground resources.

## Class Structure & Design

The game logic revolves around the interaction of tools and blocks, managed through JavaScript functions and DOM manipulation.

---

## Files Overview

### 1. **gameScript.js**
   - **Description**: This file contains the main game logic. It includes functions for tool interactions, digging and chopping blocks, updating resource counters, and managing the game's state.

### 2. **game.html**
   - **Description**: This is the main game interface. It contains the grid layout, tools for selecting equipment, and the counters for tracking resources (grass, soil, wood).
 

### 3. **Main.html**
   - **Description**: This is the game's main entry point. It introduces players to the game and contains the navigation to begin gameplay.
  
  
### 5. **game-styles.css**
   - **Description**: The main CSS file, responsible for the layout, block styling, and overall UI design. It also contains hover effects, transitions for block interactions, and custom cursor design.

  
### 6. **styles.css**
   - **Description**: This file contains the basic layout and design for the main HTML page (Main.html). It provides styling for the game’s homepage.
   
### 7. **Images (PNG Files)**
   - **axe.png**: Image for the axe tool used in the game.
   - **branch.png**: Represents tree branches in the game world.
   - **first-dig-plants.png**: The visual state for grass after it's dug once.
   - **first-dig.png**: The visual state for soil after it's dug once.
   - **second-dig.png**: The visual state for soil after it's dug twice.
   - **shovel.png**: Image for the shovel tool used in the game.
   - **sky.png**: Represents the sky in the game world.
   - **soil-and-greenplants.png**: Represents grass blocks in the game world.
   - **soil.png**: Represents soil blocks in the game world.
   - **spyglass.png**: Image for the hand tool in the game.
   - **treebase.png**: Represents the tree base (wood block) in the game.

---

