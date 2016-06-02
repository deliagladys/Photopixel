
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {$} from 'meteor/jquery';

import './home.html';

accountsUIBootstrap3.setLanguage('es');

//crear la variable de session
Template.dropzone.helpers({
	dropStatus:function(){
		return Session.get('dropStatus');
	}
});



//configurando los eventos de Template
Template.dropzone.events({
	'dragover #dropzone': function(event){
		event.preventDefault();
		Session.set('dropStatus','active');
	},
	'dragleave #dropzone':function(event){
		event.preventDefault();
		Session.set('dropStatus');
	},
	'drop #dropzone':function(event){
		event.preventDefault();
		Session.set(dropStatus);
	}
	FS.Utility.eachFile(event, )
}); 