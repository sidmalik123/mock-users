function getUser(){	
	toggleRefresh();
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		cache: false,
		success: function(resp){
			var data = resp.results[0];
			var imgSrc = data.picture.large + '';
			console.log(data)
			$('#name').text(data.name.first + " " + data.name.last);
			$('#gender').text(data.gender)
			$('#address').text(data.location.street +", " +
				data.location.city + ", " + data.location.state)
			$('#email').text(data.email)
			$('#password').text(data.login.password)
			$('.image-section img').attr('src', imgSrc);
			$('#img-src').attr('data-clipboard-text', imgSrc);


			toggleRefresh();


		},
		error: function(resp){
			alert('error')
		},

	})
}

getUser();

function toggleRefresh(){
	var but = $('#load-but'); 

	if(but.hasClass('infinite-rotate')){
		but.removeClass('infinite-rotate');
	}else{
		but.addClass('infinite-rotate')
	}
}

new Clipboard('.copy')





