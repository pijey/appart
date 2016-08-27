import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		Ember.$('img[usemap]').rwdImageMaps();
	}
});
