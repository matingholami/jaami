var isfav = 0;
var serialized = storage.getItem(fav);
var favs = JSON.parse(serialized);
var favscount = favs.length;
function addfav(id) {
	favs.push(id);
    var unserialized = JSON.stringify(favs);
	storage.setItem('fav', unserialized);
}
function printfavs() {
	for (i = 0; i < favscount; i++) {
		document.write(favs[i]+",");
	}
}