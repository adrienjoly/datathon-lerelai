(function(){

	window.onLoad = function() {
		console.log("-= lerelai =-");
		$(".lnkSubsc").click(function(){
			$(this).toggleClass("checked");
		});
	};

})();