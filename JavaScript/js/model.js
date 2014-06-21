// 哺乳類	オブジェクト
var Creature = function() {
};

// 乳首オブジェクト
var Teat = function(size) {
	this.size_mm=size;
};

// おっぱいオブジェクト
var Breast = function(cup_size, under_cm) {
	this.cup_size=cup_size;
	this.under_cm=under_cm;
};
Breast.prototype.touch = function() {
	return "Oh, yeah...";
};

// 人類オブジェクト
var Human = function() {
};
Human.prototype = new Creature();
Human.prototype.breasts = [
	new Breast("C",70),
	new Breast("C",70)
];
Human.prototype.feelings="";
Human.prototype.touch = function() {
	Human.prototype.feelings = Human.prototype.breasts[0].touch();
};
