canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_height = 180;
car_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x = 10;
car_y = 10;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadgreencar;
    rover_imgtag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(rover_imgtag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed x = " + car_x + "| y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(car_y <= 500)
    {
        car_y = car_y + 10;
        console.log("When down arrow is pressed x = " + car_x + "| y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(car_x >= 0)
    {
        car_x = car_x - 10;
        console.log("When left arrow is pressed x = " + car_x + "| y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(car_x <= 700)
    {
        car_x = car_x + 10;
        console.log("When right arrow is pressed x = " + car_x + "| y = " + car_x);
        uploadBackground();
        uploadgreencar();
    }
}
