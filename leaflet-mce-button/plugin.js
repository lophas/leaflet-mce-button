(function() {
    tinymce.PluginManager.add('leaflet', function( editor, url ) {
        editor.addButton( 'leaflet', {
            text: '',
            tooltip: 'Insert Leaflet Map',
            icon: 'leaflet dashicons-before dashicons-location-alt',
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Leaflet Map',
                    body: [
                        {
                            type   : 'textbox',
                            name   : 'address',
                            label  : 'Venue or Street Address',
                            tooltip: 'Leave empty if Lat/Lon specified',
                            value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'lat',
                            label  : 'Latitude',
                            tooltip: 'Leave empty if Street Address specified',
                            value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'lon',
                            label  : 'Longitude',
                            tooltip: 'Leave empty if Street Address specified',
                            value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'zoom',
                            label  : 'Zoom',
                            tooltip: 'Optional (0-20)',
                            value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'width',
                            label  : 'Width',
                            tooltip: 'Optional',
                            value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'height',
                            label  : 'Height',
                            tooltip: 'Optional',
                            value  : ''
                        },
                        {
                            type   : 'checkbox',
                            name   : 'marker',
                            label  : 'Marker',
                            tooltip: 'Optional',
                            value  : ''
                          },
                          {
                              type   : 'textbox',
                              name   : 'title',
                              label  : 'Marker title',
                              tooltip: 'Optional',
                              value  : ''
                        },
                        {
                            type   : 'textbox',
                            name   : 'radius',
                            label  : 'Circle radius (m)',
                            tooltip: 'Optional',
                            value  : ''
                      }
                    ],
                    onsubmit: function( e ) {
                        shortcode = '[leaflet-map fit_markers="false"';
                        if(e.data.address != '') {
                          shortcode += ' address="' + e.data.address + '"';
                        } else if(e.data.lat != '' && e.data.lon != '') {
                          shortcode += ' lat="' + e.data.lat + '" lng="' + e.data.lon + '"';
                        }
                        if(e.data.zoom != '') {
                          shortcode += ' zoom="' + e.data.zoom + '"';
                        } else if(e.data.marker || e.data.title != '') {
                          shortcode += ' zoom="12"';
                        }
                        if(e.data.width != '') {
                          shortcode += ' width="' + e.data.width + '"';
                        }
                        if(e.data.height != '') {
                          shortcode += ' height="' + e.data.height + '"';
                        }
                        shortcode += ']';
                        if(e.data.marker || e.data.title != '') {
                          shortcode += '[leaflet-marker';
                          if(e.data.title != '') {
                            shortcode += ' visible="true"]' + e.data.title + '[/leaflet-marker]';
                          } else {
                            shortcode += ']';
                          }
                        }
                        if(e.data.radius != '') {
                          shortcode += '[leaflet-circle radius="' + e.data.radius + '" fitbounds="false"]';
                        }
                        editor.insertContent( shortcode );
                    }
                });
            },
        });
    });

})();
