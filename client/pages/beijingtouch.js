Pages = [
	{text:"Beijing Touch",menu:1,class:"pages-home",template:"page_home",route:"home",down:"about"},
	{text:"About",menu:2,class:"pages-about",template:"page_about",route:"about",up:"home",right:"news",left:"contact",down:"touch"},
	{text:"News",submenu:2,class:"pages-about",template:"page_news",route:"news",up:"home",right:"contact",left:"about",down:"touch"},
	{text:"Contact",submenu:2,class:"pages-about",template:"page_contact",route:"contact",up:"home",right:"about",left:"news",down:"touch"},
	{text:"Play Touch",menu:3,class:"pages-touch",template:"page_touch",route:"touch",up:"about",right:"touch/venue",left:"touch/venue",down:"tournament"},
	{text:"Venue/Time",submenu:3,class:"pages-touch",template:"page_touch_venue",route:"touch/venue",up:"about",right:"touch",left:"touch",down:"tournament"},
	{text:"Tournament",menu:4,class:"pages-tournament",template:"page_tournament",route:"tournament",up:"touch",down:"development"},
	{text:"Development",menu:5,class:"pages-development",template:"page_development",route:"development",up:"tournament"}
];

Template.page_contact.events({
	'keydown textarea, keydown input' : function(evt) {
	  evt.stopPropagation();	
	},
	'submit form' : function(evt,tmpl) {
	  evt.preventDefault();
	  if (!tmpl.$('form textarea').val() || !tmpl.$('form input').val()) {
		alert('Fill both fields');
		return;  
	  }
	  Meteor.call('sendEmail',tmpl.$('form textarea').val(),tmpl.$('form input').val(),function(err,res) {
		  if (err) {
			alert('Something went wrong. Email not sent');
			console.log(err);
		  }
		  else {
			tmpl.$('form textarea').val('');
			tmpl.$('form input').val('');
			alert('Email sent');  
		  }
	  });
	}
});