import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		clickThumbnail(){
			Ember.$('#big-image-modal div.spinicon').show();
			Ember.$('#big-image-modal .big-image-div').empty();
			Ember.$('#big-image-modal div.big-image-div').hide();
			Ember.$('#big-image-modal .modal-title').html(this.get("caption"));
			Ember.$('#big-image-modal .modal-title').html(this.get("caption"));
			Ember.$('#big-image-modal .description').html(this.get("description"));

			var imgSrc = "img/" + this.get("image");
			var img = Ember.$('<img />', { 
			src: imgSrc,
			class: 'img-responsive',
			onload: function(){
				Ember.$('#big-image-modal div.spinicon').hide();
  				Ember.$('#big-image-modal div.big-image-div').fadeIn("slow");
			}
			});
			img.appendTo(Ember.$('#big-image-modal .big-image-div'));
			Ember.$('#big-image-modal').modal({show:true});
		}
	}
});
