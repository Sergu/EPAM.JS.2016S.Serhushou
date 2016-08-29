function BulletSimple(id,road,leftOffset){
	Bullet.apply(this,arguments);
	this.id = id;
	this.damage = 15;

	this.bulletHtml.addClass("bullet-simple");
	this.bulletHtml.css({left: leftOffset});
}