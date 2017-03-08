var button = document.getElementById('counter');
button.onclick = function() {
	//Create a request object
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in the variable
	request.onreadystatechange = function()
	{
		if(request.readyState === XMLHttpRequest.DONE)
		{
			if(request.status === 200)
			{
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	};
	//Make the request
	request.open('GET', 'http://localhost:8080/counter', true);
	request.send(null);
	
};