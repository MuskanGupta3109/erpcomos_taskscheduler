(function ($) {
	"use strict";


	// ______________ Cover-image
	$(".cover-image").each(function () {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________ Global Loader
	$(window).on("load", function (e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ Color-skin
	$(document).ready(function () {
		$("a[data-theme]").click(function () {
			$("head link#theme").attr("href", $(this).data("theme"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
		$("a[data-effect]").click(function () {
			$("head link#effect").attr("href", $(this).data("effect"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
	});


	// ______________ Modal
	$(document).ready(function () {
		$("#myModal").modal('show');
	});


	// ______________Rating Stars
	// var ratingOptions = {
	// 	selectors: {
	// 		starsSelector: '.rating-stars',
	// 		starSelector: '.rating-star',
	// 		starActiveClass: 'is--active',
	// 		starHoverClass: 'is--hover',
	// 		starNoHoverClass: 'is--no-hover',
	// 		targetFormElementSelector: '.rating-value'
	// 	}
	// };
	// $(".rating-stars").ratingStars(ratingOptions);


})(jQuery);






function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("datatable-buttons");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
