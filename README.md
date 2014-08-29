#jQuery AnythingSlider v 1.0.1 alpha @by Alf

###23-08-2014 12:55 v 1.0.0

- Compatible HTML5
- Compatible Navegadores modernos y también con IE8.
- jQuery Plugin
- Superoptimizado 1.68 Kbytes
- Fácil de implementar y muy versátil.
- Autoejecuta animaciones gif, animaciones flash y vídeos.
- Temporiza cada elemento del slide mediante el atributo data-time.
- Modo aleatorio y secuencial mediante parámetro 'random/secuential' por defecto secuential
- Modo animación mediante parámetro 'plain/fade/slide' por defecto plain

###26-08-2014 22:46 v 1.0.1

- Permite la navegación directa interactiva, parámetro 'direct/preactive' por defecto preactive.
- Descripciones al pasar el puntero.

###28-08-2014 21:12 v 1.0.2

- Permite múltiples instancias del slider.
- Arreglos de bugs.
- Inizalización de gifs animados.

###Demo
	
[Ver demostración...](http://www.codekit.es/anythingslider/ "Ver demostración..." target="_blank")

###Cargar Plugin AnythingSlider

		<script src="jquery.anythingslider_plugin.min.js"></script>
	
###Inicializar AnythingSlider

		<script>
			jQuery(document).on('ready', function() {
				// uso: jQuery.anythingslider(['random/secuential'],['plain/fade/slide'],[direct/preactive]);
				jQuery.anythingslider('#slider','random','fade','direct');
			});
		</script>

###Estructura HTML5

		<div class="anythingSlider">
			<ul class="anythingSlider-content">
			    <li data-time="5000">
			    	<!-- your content (gif, image, flash, video, html) here -->
			    	<p class="caption black bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto debitis ipsam dolores, tempore assumenda sint soluta aspernatur unde quas nam. Eaque eveniet, asperiores distinctio odit nulla blanditiis consequuntur delectus saepe.</p>
			    </li>
			    <li data-time="5000">
			    	<!-- your content (gif, image, flash, video, html) here -->
			    	<p class="caption black bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto debitis ipsam dolores, tempore assumenda sint soluta aspernatur unde quas nam. Eaque eveniet, asperiores distinctio odit nulla blanditiis consequuntur delectus saepe.</p>
			    </li>
			    <li data-time="5000">
			    	<!-- your content (gif, image, flash, video, html) here -->
			    	<p class="caption black bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto debitis ipsam dolores, tempore assumenda sint soluta aspernatur unde quas nam. Eaque eveniet, asperiores distinctio odit nulla blanditiis consequuntur delectus saepe.</p>
			    </li>
			</ul>
			<ul class="anythingSlider-nav">
			    <li></li>
			    <li></li>
			    <li></li>
			</ul>
		</div>

