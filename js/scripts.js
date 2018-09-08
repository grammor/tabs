$(document).ready(function(){
	 $('.main').hide();
    $('.main:first').show();
    $('.header__items:first').addClass('active');

    $('.header__items').click(function() {
    $('.header__items').removeClass('active');
    $(this).addClass('active');

    $('.main').hide();

    var selectedTab = $(this).find('a').attr('href');
    $(selectedTab).fadeIn();
    	
    });
});