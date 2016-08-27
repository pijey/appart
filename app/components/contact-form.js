import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		// Validates the contact form and submits it using Formspree.
		Ember.$.validator.setDefaults({
			lang: 'fr',
		    highlight: function(element) {
		        Ember.$(element).closest('.form-group').addClass('has-error');
		    },
		    unhighlight: function(element) {
		        Ember.$(element).closest('.form-group').removeClass('has-error');
		    },
		    errorElement: 'span',
		    errorClass: 'help-block',
		    errorPlacement: function(error, element) {
		        if(element.parent('.input-group').length) {
		            error.insertAfter(element.parent());
		        } else {
		            error.insertAfter(element);
		        }
		    }
		});

		Ember.$('.contact-form').validate({
		  submitHandler: function(form) {
		    Ember.$.ajax({
		   	      url: "//formspree.io/pjvilloud-appart@yahoo.fr",
				  method: "POST",
				  data: {
				    name: Ember.$(form).find("input[name='name']").val(),
				    _subject: Ember.$(form).find("input[name='_subject']").val(),
				    _replyto: Ember.$(form).find("input[name='_replyto']").val(),
				    _cc: Ember.$(form).find("input[name='_cc']").val(),
				    message: Ember.$(form).find("textarea[name='message']").val()
				  },
			  	dataType: "json",
		      	success: function() {
			    	Ember.$(form).find('#send-icon').removeClass('fa-spin');
			    	Ember.$(".alert.msg").empty();
	    			Ember.$("body").append('<div class="alert msg alert-success fade in"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Message envoyé !</div>');
	    			Ember.$(form).find("input[name='name']").val("");
	    			Ember.$(form).find("input[name='_subject']").val("");
	    			Ember.$(form).find("input[name='_replyto']").val("");
	    			Ember.$(form).find("textarea[name='message']").val("");
	    		},
	    		error: function() {
	    			Ember.$(".alert.msg").empty();
			    	Ember.$(form).find('#send-icon').removeClass('fa-spin');
	    			Ember.$("body").append('<div class="alert msg alert-danger fade in"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Oups, une erreur est survenue. Réessayez plus tard !</div>');
	    		}
		    });
		  }
		});
	}
});
