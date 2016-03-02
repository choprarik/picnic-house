var book_obj = {};
var default_url = "https://api.mongolab.com/api/1/databases/";
var api_key = "?api_key=V5u2iCn5dwF9CZTonk1llCzA1rFNAPMi";

function booking()
{
	var single=0,deluxe=0;
	var form = document.getElementById('booker');
	var div = document.getElementById('book-now');
	var date = new Date();
	var resp_single = "Available 12";
	var resp_deluxe = "Available 6";
	
	//alert("current date: "+date);
	book_obj.check_in = form.check_in.value;
	book_obj.check_out = form.check_out.value;
	book_obj.adults = form.adults.value;
	book_obj.kids = form.kids.value;
	if ((form.adults.value/3) >= 1)
	{
		if((form.adults.value%3) != 0)
		{
			single = single + 1;
			deluxe = deluxe + (form.adults.value/3);
		}
		else
		{
			deluxe = deluxe + (form.adults.value/3);
		}
	}
	else
	{
		single = single + 1;
	}
	if(form.kids.value > (deluxe*2 + single*2))
	{
		if(single > 0)
		{
			single = single - 1;
			deluxe = deluxe - 1;
		}
		else
		{
			single = single - 1;
		}
	}
	d = parseInt(deluxe);
	//alert("deluxe:" +d+ "\nsingle:" +single);
	//document.write("Booking confirmed!")
	div.innerHTML = "<div id='js'><form method='POST' id='booked'><div class='table-responsive'><table class='table'><thead><tr><td>Name</td><td>Contact</td></tr></thead>"+
	"<tbody><tr><td><input type='text' name='name'></td><td><input type='text' name='contact'></td></tr></tbody></table></div><hr>"+
	"<div class='table-responsive'><table class='table'><thead><tr><td>Rooms</td><td>Qty</td><td>Status</td></tr></thead>"+
	"<tbody><tr><td><a href='#portfolioModal1' class='portfolio-link' data-toggle='modal'>Single</a></td><td><input type='text' name='singles' value='"+single+
	"'></td><td>"+resp_single+"</td></tr><tr><td><a href='#portfolioModal2' class='portfolio-link' data-toggle='modal'>Deluxe</a></td>"+
	"<td><input type='text' name='deluxes' value='"+d+"'></td><td>"+resp_deluxe+"</td></tr></tbody></table></div><br>"+
	"<button type='submit' class='btn btn-xl' onclick='booked();return false'>Book</button></form></div>";
}

function booked()
{
	var div = document.getElementById('js');
	var form = document.getElementById('booked');
	book_obj.name = form.name.value;
	book_obj.contact = form.contact.value;
	book_obj.single = form.singles.value;
	book_obj.deluxe = form.deluxes.value;
	book_obj.amount = (parseInt(form.singles.value)*2250)+(parseInt(form.deluxes.value)*3000); 
	div.innerHTML = "<h2 class='section-heading'>Success!!!</h2>"+book_obj['name']+" your booking has been confirmed!";
	var result = call_mongo(default_url+"rest/collections/products"+api_key,"POST",JSON.stringify(book_obj));
	//alert("result: "+result);
}

function call_mongo(url,method,data)
{
	var res;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			res = xhttp.responseText;
		}
	};
	xhttp.open(method,url, true);
	//xmlhttp.setRequestHeader("Content-Type", "application/json");
	alert("url: "+url+"\nmethod: "+method+"\ndata: "+data);
	xhttp.send(data);
	return res;
}