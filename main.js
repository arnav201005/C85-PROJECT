var canvas = new fabric.canvas("mycanvas");

player_x=30;
player_y=30;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function  player_image() 
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function  block_image(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);

    });
}
