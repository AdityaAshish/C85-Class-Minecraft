var canvas = new fabric.Canvas("MyCanvas");
var blockImageHeight = 30;
var blockImageWidth = 30;
player_x = 20;
player_y = 20;
var player_object = "";
var blockImageObject = "";

function player_update() {
 fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;
    player_object.scaleToHeight(140);
    player_object.scaleToWidth(150);
    player_object.set({
        top:player_y, 
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true&&keyPressed=="80") {
        console.log("p and shiftkey pressed together");
        blockImageWidth= blockImageWidth+10;
        blockImageHeight= blockImageHeight+10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }
    if (e.shiftKey==true&&keyPressed=="77") {
        console.log("m and shiftkey pressed together");
        blockImageWidth= blockImageWidth-10;
        blockImageHeight= blockImageHeight-10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }
    if (keyPressed=="38") {
        up();
        console.log("up arrow has been clicked")
    }

    if (keyPressed=="40") {
        down();
        console.log("down arrow has been clicked")
    }

    if (keyPressed=="39") {
        right();
        console.log("right arrow has been clicked")
    }

    if (keyPressed=="37") {
        left();
        console.log("left arrow has been clicked")
    }

    if (keyPressed=="87") {
        new_image("wall.jpg");
        console.log("W has been clicked")
    }

    if (keyPressed=="67") {
        new_image("cloud.jpg");
        console.log("C has been clicked")
    }

    if (keyPressed=="68") {
        new_image("dark_green.png");
        console.log("D has been clicked")
    }

    if (keyPressed=="71") {
        new_image("ground.png");
        console.log("G has been clicked")
    }

    if (keyPressed=="76") {
        new_image("light_green.png");
        console.log("L has been clicked")
    }

    if (keyPressed=="82") {
        new_image("roof.jpg");
        console.log("R has been clicked")
    }

    if (keyPressed=="84") {
        new_image("trunk.jpg");
        console.log("T has been clicked")
    }

    if (keyPressed=="85") {
        new_image("unique.png");
        console.log("U has been clicked")
    }

    if (keyPressed=="89") {
        new_image("yellow_wall.png");
        console.log("Y has been clicked")
    }
}


function up() {
    if (player_y >= 0) {
        player_y = player_y- blockImageHeight;
        console.log("blockImageHeight" + blockImageHeight);
       console.log("up-arrow pressed" +"player y=" + player_y + "player x=" + player_x);
       canvas.remove(player_object);
       player_update();
    }
    
}

function down() {
    if (player_y <= 500) {
        player_y = player_y+ blockImageHeight;
        console.log("blockImageHeight" + blockImageHeight);
       console.log("down-arrow pressed" +"player y=" + player_y + "player x=" + player_x);
       canvas.remove(player_object);
       player_update();
    }
    
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - blockImageHeight;
        console.log("blockImageHeight" + blockImageHeight);
       console.log("left-arrow pressed" +"player y=" + player_y + "player x=" + player_x);
       canvas.remove(player_object);
       player_update();
    }
    
}

function right() {
    if (player_x <= 800) {
        player_x = player_x + blockImageHeight;
        console.log("blockImageHeight" + blockImageHeight);
       console.log("right-arrow pressed" +"player y=" + player_y + "player x=" + player_x);
       canvas.remove(player_object);
       player_update();
    }
}
