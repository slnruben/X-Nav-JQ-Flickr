function json(jsonp) {
	$("#images").empty();
	$.getJSON(jsonp, function(data) {
		$.each(data.items, function(i, item) {
			$("<img>").attr("src", item.media.m).appendTo("#images");
		});
	})
}

$(document).ready(function() {
	$("#fuenlabrada").click(function(event) {
		var jsonp = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?";
		json(jsonp);
	});
	$("#click").click(function(event) {
		var search = $("#search").val();
		console.log(search);
		var jsonp = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" 
		+ search + "&tagmode=any&format=json&jsoncallback=?";
		json(jsonp);
	})
});