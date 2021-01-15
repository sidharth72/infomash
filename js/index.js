$(document).ready(function(){
	$('#list').click(function(){
		$('.sidebar').slideToggle()
		$('.sidebar').css('text-align','center');
		$('.sidebar').css('width','50%');


	});
});

$(document).ready(function(){

	$('#search-icon').click(function(){

		$('.form-control').toggle();

	});
});


$(document).ready(function(){
	$('.list').click(function(){
		$(this).css('color','grey');
	});
});

$(document).ready(function(){
	$('#items').mouseover(function(){
		$(this).css('background-color',' #37517e');
		$('#items').mouseout(function(){
			$(this).css('background-color','white');
			$(this).css('color','dodgerblue')
		});
	});
});



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}




