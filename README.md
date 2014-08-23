#jQuery AnythingSlider v 1.0.0 alpha @by Alf

###23-08-2014 12:55

- Compatible HTML5
- jQuery Plugin
- Superoptimizado 1.505 bytes
- Autoejecuta animaciones gif, animaciones flash y vídeos.
- Temporiza cada elemento del slide mediante el atributo data-time.
- Permite la navegación directa interactiva.
- Modo aleatorio y secuencial mediante parámetro 'random'
- Modo animación mediante parámetro 'plain/fade/slide'

###Demo
	
[Ver demostración...](http://www.codekit.es/anythingslider/ "Ver demostración..." target="_blank")

###Cargar Plugin AnythingSlider

		<script src="jquery.anythingslider_plugin.min.js"></script>
	
###Inicializar AnythingSlider

		<script>
			jQuery(document).on('ready', function() {
				// uso: jQuery.anythingslider(['random/secuential'],['plain/fade/slide']);
				jQuery.anythingslider('secuential','fade');
			});
		</script>

###Estructura HTML5

		<div id="anythingSlider">
			<ul id="anythingSlider-content">
			    <li data-time="5000">
			    	<!-- your content here -->
			    </li>
			    <li data-time="5000">
			    	<!-- your content here -->
			    </li>
			    <li data-time="5000">
			    	<!-- your content here -->
			    </li>
			</ul>
			<ul id="anythingSlider-nav">
			    <li></li>
			    <li></li>
			    <li></li>
			</ul>
		</div>

