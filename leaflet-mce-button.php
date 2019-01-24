<?php
/*
	Plugin Name: Leaflet Map MCE Button
	Description:
	Version: 0.8
	Plugin URI: https://github.com/lophas/leaflet-mce-button
	GitHub Plugin URI: https://github.com/lophas/leaflet-mce-button
	Author: Attila Seres
	Author URI:
*/
add_action('init', function() {
	if(!current_user_can('edit_posts') && ! current_user_can('edit_pages')) return;
	if(get_user_option('rich_editing') !== 'true') return;
	add_filter('mce_external_plugins', function($plugin_array) {
		if(shortcode_exists('leaflet-map')) {
			$js = __DIR__.'/'.substr(basename(__FILE__),0,-4).'/plugin.js';
      if(file_exists($js)) {
        $plugin_array['leaflet'] = site_url().substr($js,strlen(ABSPATH)-1).'?'.filemtime($js);
        add_filter('mce_buttons', function($buttons) {
      		array_push($buttons, 'separator', 'leaflet');
      		return $buttons;
      	});
      }
		}
		return $plugin_array;
	});
});
