// import "tinymce/skins/ui/oxide/skin.min.css"
// import "tinymce/skins/content/default/content.css"

import "tinymce/tinymce.min.js"
import "tinymce/themes/silver/theme.js"
import "tinymce/icons/default/icons.js"

window.addEventListener('load', (event) => {
	tinymce.init({
	  selector: '#tinymce',
	  inline: true,
	  skin: false,
	  content_css: 'css/app.css'
	});
});