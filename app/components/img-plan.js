import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		Ember.$('img[usemap]').rwdImageMaps();
		Ember.$("area").click((e) => {
			e.preventDefault();
			e.stopPropagation();
			var speed = 750; // Durée de l'animation (en ms)
			Ember.$('html, body').animate( { scrollTop: $(e.target.href.substring(e.target.href.lastIndexOf("#"))).offset().top - 65 }, speed );
		});
	}
});
