$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
    var $hellologo = $('#helloworld');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
        else{
            $hellologo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  
      $logo.slideDown('slow');
      $hellologo.slideUp('slow');

	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
      $hellologo.slideDown('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
function abrirProyecto(nombre, descripcion, links, lenguajes)
{
    document.getElementById('modal-wrapper').style.display='block';
    document.getElementById('proj_oname').innerHTML = nombre;
    document.getElementById('proj_odesc').innerHTML = descripcion;
    document.getElementById('proj_ourls').innerHTML = links;
    document.getElementById('proj_ourls').href = links;
    document.getElementById('proj_olang').value = "Lenguajes utilizados: " + lenguajes;
}