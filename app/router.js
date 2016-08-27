import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appartement');
  this.route('quartier');
  this.route('charges');
  this.route('residence');
  this.route('contact');
});

export default Router;
