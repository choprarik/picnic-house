function price()
{
	var d = new Date();
	var single = 2250,deluxe=3000;
	if(d.getDay() == 6 || d.getDay() == 0)
	{
		single = 3000;
		deluxe = 4000;
	}
	var doc = document.getElementById("single_price");
	doc.innerHTML = "<p class='text-muted'>INR "+single;
	
	var doc = document.getElementById("deluxe_price");
	doc.innerHTML = "<p class='text-muted'>INR "+deluxe;
}