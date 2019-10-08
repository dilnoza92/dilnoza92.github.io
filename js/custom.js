function footer_hider(event) {
    
    var a = event.currentSlide.attributes.getNamedItem('hide-footer');    
    
    if(a) {
	if(a.nodeValue === 'yes') {
	    $('.footer').hide();
	} 
    }else {
	$('.footer').show('fast');
    }        
}
