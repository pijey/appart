import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: [],
  map:null,
  markers: {
  	subway:[],
  	velov:[],
  	drugstore:[],
  	doctor:[],
  	kine:[],
  	dentist:[],
  	groceries:[],
  	groceriesBio:[],
  	tram:[],
  	creche:[],
  	ecole:[],
  	lycee:[],
  	college:[],
  	restau:[],
  	supermarket:[],
  	concert:[],
  	biblio:[],
  	bus:[],
    bakery:[],
    banque:[],
    assurance:[],
    poste:[],
    pressing:[],
    cinema:[],
  	parc:[],
  },
  actions: {
  	hideAllMarkers(){
  		Ember.$("ul.markers-list>li").removeClass('active');
  		for (var category in this.get("markers")) {
  			for (var i = 0; i < this.get("markers")[category].length; i++) {
  				this.get("markers")[category][i].setMap(null);
  			}
  		}
  	},
  	showAllMarkers(){
  		Ember.$("ul.markers-list>li").addClass('active');
  		for (var category in this.get("markers")) {
  			for (var i = 0; i < this.get("markers")[category].length; i++) {
  				this.get("markers")[category][i].setMap(this.get("map"));
  			}
  		}
  	},
  	toggleMarkers(markerCategory){
  		Ember.$("li." + markerCategory).toggleClass('active');
  		for (var i = 0; i < this.get("markers")[markerCategory].length; i++) {
  			this.send("toggleMarker", this.get("markers")[markerCategory][i]);
  		}
  	},
  	toggleMarker(marker){
  		if(marker.getMap() == null){
  			marker.setMap(this.get("map"));
  		}
  		else {
  			marker.setMap(null);
  		}
  	}
  }
});
