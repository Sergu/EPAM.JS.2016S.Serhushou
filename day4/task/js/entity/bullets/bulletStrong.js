function BulletStrong(id,road,leftOffset){
	Bullet.apply(this,arguments);
	this.id = id;
	this.damage = 45;

	this.bulletHtml.addClass("bullet-strong");
	this.bulletHtml.css({left: leftOffset});
}