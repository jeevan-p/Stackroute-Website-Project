
// My Custom JQuery

$(function (){
	var userId = $.session.get('loggedInUser');
	var userType = $.session.get('loggedInUserType');
	var userBatch = $.session.get('loggedInUserBatch');
	var userSubcategory = $.session.get('loggedInUserSubCategory');
	var userName = $.session.get('loggedInUserName');
	console.log(userId + " - " + userType + " - " + userBatch + " - " + userSubcategory + " - " + userName);
	$('.adminuser').html(userName);
});

// To iterate through object (not object array)
// for(var prop in a)
// {
// 	console.log(prop + " - " + a[prop]);
// }


// $(function (){
// 	var curRegUserId;

// 	// Focus the first textbox on Loading Window
// 	// -----------------------------------------------------------------------------------------
// 	window.onload = function()
//  	{
//  		var currUser = $.session.get('loggedInUser');
 		
//  		if (currUser != undefined)
//  		{
//  			$.ajax({ // Ajax call to validate email id
// 				type: 'GET',
// 				url: '/user/' + currUser,
// 				success : function (data) {
// 					$("body").load("templates/" + data.userType + ".html");	
// 				},
// 				error : function () {
// 					$.session.remove('loggedInUser');
// 				}
// 			});
//  		}
//  		$('#login-uname').focus();
//  	}	

// 	// Toggle between Login and Sign Up
// 	// -----------------------------------------------------------------------------------------
// 	$('.signup-link').on('click', function() {
// 		$('#sign-up').fadeIn(300);
// 		$('#login').removeClass('show').addClass('hide');
// 		$('#sign-up').removeClass('hide').addClass('show');
// 		$('#signup-uname').focus();
// 	});
// 	$('.login-link').on('click', function() {
// 		$('#login').fadeIn(300);
// 		$('#login').removeClass('hide').addClass('show');
// 		$('#sign-up').removeClass('show').addClass('hide');
// 		$('#login-uname').focus();
// 	});

// 	// Login validation
// 	// -----------------------------------------------------------------------------------------
// 	function validateLogin() // Validation Function
// 	{
// 		console.log("Validate");
// 		var userName = $('#login-uname').val();
// 		var passCode = $('#login-pass').val();

// 		$.ajax({ // Ajax call to validate email id
// 			type: 'GET',
// 			url: '/user?email=' + userName + '&logkey=' + passCode,
// 			success : function (data) {
// 				if(data.length >= 1)
// 				{
// 					$('#login-error').removeClass('show').addClass('hide');
// 					$('.uname input').css({'border' : '1px solid #ccc'});
// 					$('.pass input').css({'border' : '1px solid #ccc'});
// 					$.session.set('loggedInUser', data[0].id);
// 				}
// 				else
// 				{
// 					$('#login-error').removeClass('hide').addClass('show');
// 					$('.uname input').css({'border' : '1px solid red'});
// 					$('.pass input').css({'border' : '1px solid red'});	
// 					$('#login-pass').val('');
// 				}
// 			},
// 			error : function () {
// 				$('#login-error').removeClass('hide').addClass('show');
// 				$('.uname input').css({'border' : '1px solid red'});
// 				$('.pass input').css({'border' : '1px solid red'});	
// 				$('#login-pass').val('');
// 			}
// 		});
// 	}

// 	$('#login-form').on('submit', function (e) { // Login Button Click Event
// 		e.preventDefault();
// 		console.log("Login Clicked");

// 		validateLogin();
// 	});

// 	$('.pass input').keypress(function (e) { // Password textbox Keypress Event
// 		var key = e.which;
// 		if(key == 13)  // Checking whether Enter is Pressed (Key Code = 13)
// 		{
// 			validateLogin();
// 			return false;
// 		}
// 	});

// 	// Sign Up Email Validation
// 	// -----------------------------------------------------------------------------------------
// 	function validateEmail() // Function to Validate email
// 	{
// 		console.log('validate Email');
// 		var email = $('#signup-uname').val().toLowerCase();

// 		$.ajax({ // Ajax call to validate email id
// 			type: 'GET',
// 			url: '/user?email=' + email + '&registered=false',
// 			success : function (data) {
// 				if(data.length >= 1)
// 				{
// 					$('#load-sign-up').fadeIn(300);
// 					$('#load-sign-up').removeClass('hide').addClass('show');
// 					$('.sign-up-uname .success-message').removeClass('hide').addClass('show');
// 					$('.sign-up-uname .error-message').removeClass('show').addClass('hide');
// 					$('#signup-name').focus();
// 					curRegUserId = data[0].id;
// 				}
// 				else
// 				{
// 					$('#load-sign-up').removeClass('show').addClass('hide');
// 					$('.sign-up-uname .success-message').removeClass('show').addClass('hide');
// 					$('.sign-up-uname .error-message').removeClass('hide').addClass('show');
// 				}
// 			},
// 			error : function () {
// 				$('#load-sign-up').removeClass('show').addClass('hide');
// 				$('.sign-up-uname .success-message').removeClass('show').addClass('hide');
// 				$('.sign-up-uname .error-message').removeClass('hide').addClass('show');
// 			}
// 		});
// 	}

// 	$('#signup-uname').keypress(function (e) { // Keypress Event on Email Textbox
// 		var key = e.which;
// 		if(key == 13)  // Checking whether Enter is Pressed (Key Code = 13)
// 		{
// 			console.log("Enter");
// 			validateEmail();
// 			return false;
// 		}
// 	});

// 	$('#signup-uname').on('focusout', function () {
// 		validateEmail();
// 	});

// 	$('#signup-uname').on('input', function () {
// 		$('#load-sign-up').removeClass('show').addClass('hide');
// 		$('.sign-up-uname .success-message').removeClass('show').addClass('hide');
// 		$('.sign-up-uname .error-message').removeClass('show').addClass('hide');
// 	});

// 	// Sign Up Fields Validation
// 	// -----------------------------------------------------------------------------------------
// 	var validPass = false,
// 		validRePass = false,
// 		validName = false,
// 		validNumber = false;

// 	function validateAndRegister()
// 	{
// 		if (validName && validPass && validRePass && validNumber)
// 		{
// 			var regData = {
// 				name : $('#signup-name').val(),
// 				logkey : $('#signup-pass').val(),
// 				contactNumber : $('#signup-mobile').val(),
// 				registered : 'true'
// 			};
// 			$.ajax({ // Ajax call to update registered usere details
// 				type: 'PATCH',
// 				data: regData,
// 				url: '/user/' + curRegUserId,
// 				success : function (data) {
// 					console.log("User registered");
// 				},
// 				error : function () {
// 					console.log("User registration failed");	
// 				}
// 			});
// 		}
// 		else
// 		{
// 			console.log('invalid');
// 		}
// 	}

// 	$('.sign-up-mobile input').keypress(function (e) { // Mobile Number textbox Keypress Event
// 		var key = e.which;
// 		if(key == 13)  // Checking whether Enter is Pressed (Key Code = 13)
// 		{
// 			$('#signup-mobile').blur();
// 			validateAndRegister();	
// 			return false;
// 		}
// 	});

// 	$('#sign-up-form').on('submit', function (e) { // Form submit event
// 		e.preventDefault();
// 		validateAndRegister();
// 	});

// 	$('.sign-up-mobile input').on('focusout', function (e) { // Validate Mobile
// 		mob = $('#signup-mobile').val();
// 		if (mob.length < 10)
// 		{
// 			$('.sign-up-mobile .error-message').removeClass('hide').addClass('show');
// 			$('.sign-up-mobile .success-message').removeClass('show').addClass('hide');
// 			validNumber = false;
// 		}
// 		else
// 		{
// 			$('.sign-up-mobile .error-message').removeClass('show').addClass('hide');
// 			$('.sign-up-mobile .success-message').removeClass('hide').addClass('show');
// 			validNumber = true;		
// 		}
// 	});

// 	$('#signup-pass, #signup-repass').on('focusout', function () { // Validate password
// 		console.log("Repass validating");
// 		var pass = $('#signup-pass').val();
// 		if(pass.length < 8)
// 		{
// 			$('.sign-up-pass .error-message').removeClass('hide').addClass('show');
// 			$('.sign-up-pass .success-message').removeClass('show').addClass('hide');
// 			validPass = false;
// 		}
// 		else 
// 		{
// 			$('.sign-up-pass .error-message').removeClass('show').addClass('hide');
// 			$('.sign-up-pass .success-message').removeClass('hide').addClass('show');
// 			validPass = true;
// 		} 
// 	    if (pass == $('#signup-repass').val() && pass.length > 0)
// 	    {
// 	        $('.sign-up-repass .error-message').removeClass('show').addClass('hide');
// 	        $('.sign-up-repass .success-message').removeClass('hide').addClass('show');
// 	        validRePass = true;
// 	    }
// 	    else 
// 		{
// 			$('.sign-up-repass .error-message').removeClass('hide').addClass('show');
// 			$('.sign-up-repass .success-message').removeClass('show').addClass('hide');
// 			validRePass = false;
// 		}   
// 	});

// 	$('#signup-name').on('focusout', function () { // Validate Name
// 		var name = $('#signup-name').val();
// 		if(name.length == 0)
// 		{
// 			validName = false;
// 		}
// 		for(var i = 0; i < name.length; i ++)
// 		{
// 			if (!isLetter(name[i]) && name[i] != " ")
// 			{
// 				$('.sign-up-name .error-message').removeClass('hide').addClass('show');
// 				$('.sign-up-name .success-message').removeClass('show').addClass('hide');
// 				validName = false;
// 				break;
// 			}
// 			else
// 			{
// 				$('.sign-up-name .error-message').removeClass('show').addClass('hide');
// 				$('.sign-up-name .success-message').removeClass('hide').addClass('show');
// 	        	validName = true;
// 			}
// 		}
// 	});

// 	function isLetter(c) {// Check whether Alphabet or not
// 		return c.toLowerCase() != c.toUpperCase();
// 	}

// }); // End of Main Function


// // // My Custom JQuery

// // $(function (){

// // 	window.onload = function()
// // 	{
// //		$('input:text:visible:next').focus();
// // 		console.log("Loading");
// // 	}


// // 	$('.getmovie').on('click', function() {
// // 		srchMovie = $('#srchmov').val();
// // 		srchMovie = srchMovie.trim();
// // 		pageNo = 1;
// // 		initRecNo = 0;
// // 		recNo = 0;
// // 		prv = 0;
// // 		nxt = 1;
// // 		getMovie();
// // 	});



// // 	var $list = $('#movielist');

// // 	var movieTemp = $('#movietemplate').html();
// // 	var searchTemp = $('#searchtemplate').html();
// // 	var loadMoreTemp = $('#loadmoretemplate').html();
// // 	var loadLessTemp = $('#loadlesstemplate').html();
// // 	var modalTemp = $('#modaltemplate').html();

// // 	var obj = {};

// // 	var initRecNo = 0,recNo = 0, pageNo = 1;

// // 	var prv = 0, nxt = 0;

// // 	var srchMovie;

// // 	function addMovie(movie){
// // 		$list.append(Mustache.render(movieTemp, movie));
		
// // 	}

// // 	 function addModal(movie){
	 	
// // 	 	$('.modalIn').append(Mustache.render(modalTemp, movie));
		
// // 	 }

// // 	$('.getmovie').on('click', function() {
// // 		srchMovie = $('#srchmov').val();
// // 		srchMovie = srchMovie.trim();
// // 		pageNo = 1;
// // 		initRecNo = 0;
// // 		recNo = 0;
// // 		prv = 0;
// // 		nxt = 1;
// // 		getMovie();
// // 	});

// // 	$list.delegate('#next','click', function(event){
// // 		pageNo++;
// // 		prv = 0;
// // 		nxt = 1;
// // 		getMovie();
// // 	});

// // 	$list.delegate('#prev','click', function(event){
// // 		pageNo--;
// // 		prv = 1;
// // 		nxt = 0;
// // 		getMovie();
// // 	});

// // 	function getMovie()
// // 	{
// // 		var movUrl = 'http://www.omdbapi.com/?s=' + srchMovie + '&y=&plot=short&r=json&page=' + pageNo;
		
// // 		$('#movielist li').remove();

// // 		//$list.append(Mustache.render(searchTemp, srchMovie));

// // 		$.ajax({
// // 			type: 'GET',
// // 			url: movUrl,
// // 			success : function (data) {
// // 				var dispRecCount;
// // 				if(data.Response == 'False')
// // 				{
// // 					console.log(srchMovie.length);

// // 					if(srchMovie.length == 0)
// // 					{
// // 						var resultCount = {'length' : '0','movie' : 'Enter Something.!'};
// // 					}
// // 					else
// // 					{
// // 						var resultCount = {'length' : '0','movie' : srchMovie};
// // 					}
// // 					$list.append(Mustache.render(searchTemp, resultCount));
// // 				}					
// // 				else
// // 				{
					
// // 					var resultCount = {'length' : data['totalResults'],'movie' : srchMovie};
// // 					$list.append(Mustache.render(searchTemp, resultCount));

// // 					$.each(data['Search'], function(i, movie){
						
// // 						if (movie.Poster == 'N/A')
// // 						{
// // 							movie.Poster = 'images/nopic.jpg';
// // 						}
// // 						if(i < 15)
// // 						{							
// // 							addMovie(movie);											
// // 							dispRecCount = i;	
// // 						}						
// // 					});

// // 					if (nxt == 1)
// // 					{
// // 						initRecNo = recNo;
// // 						recNo = initRecNo + (dispRecCount + 1);
						
// // 					}
// // 					else if (prv == 1)
// // 					{
// // 						recNo = initRecNo;
// // 						initRecNo = recNo - (dispRecCount + 1);
// // 					}
// // 					var sRecNo = initRecNo + 1;
// // 					$('.showRecCount').html('Showing ' + sRecNo + ' - ' + recNo + ' Result(s)');
// // 					console.log(dispRecCount + " out of " + resultCount.length);
// // 					if (resultCount.length > recNo)
// // 					{
// // 						$list.append(Mustache.render(loadMoreTemp));
						
// // 					}

// // 					if (initRecNo > 0)
// // 					{
// // 						$list.append(Mustache.render(loadLessTemp));
						
// // 					}
// // 				}
// // 			}
// // 		});
// // 	}

// // 	$list.delegate('.mytitle','click', function(event){

// // 		var clickTitle = $(this);
		
// // 		$('.modalIn div').remove();

// // 		$('.mymodtitle').html("Loading... <small> please wait...</small>");
// // 		var myTitle = clickTitle.attr('data-id');
		
// // 		var curMovUrl = 'http://www.omdbapi.com/?t=' + myTitle + '&y=&plot=short&r=json';

// // 		$.ajax({
// // 			type: 'GET',
// // 			url: curMovUrl,
// // 			success : function (data) {
				
// // 				if(data.Response == 'True')
// // 				{
// // 					$('.mymodtitle').html(myTitle + " <small> [" + data.Year + "]</small>");
// // 					if (data.Poster == 'N/A')
// // 					{
// // 						data.Poster = 'images/nopic.jpg';
// // 					}

// // 					addModal(data);
// // 					$('#mymodal4').modal('show');
// // 				}
// // 			} 
// // 		});
// // 	});
// // });
