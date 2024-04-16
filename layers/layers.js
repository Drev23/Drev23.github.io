ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([140.604882, -28.383119, 141.014696, -28.090521]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesatellite_1 = new ol.layer.Tile({
            'title': 'google satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_prop_qld_2 = new ol.format.GeoJSON();
var features_prop_qld_2 = format_prop_qld_2.readFeatures(json_prop_qld_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_prop_qld_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prop_qld_2.addFeatures(features_prop_qld_2);
var lyr_prop_qld_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prop_qld_2, 
                style: style_prop_qld_2,
                popuplayertitle: "prop_qld",
                interactive: true,
                title: '<img src="styles/legend/prop_qld_2.png" /> prop_qld'
            });
var format_tenements_3 = new ol.format.GeoJSON();
var features_tenements_3 = format_tenements_3.readFeatures(json_tenements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tenements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tenements_3.addFeatures(features_tenements_3);
var lyr_tenements_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tenements_3, 
                style: style_tenements_3,
                popuplayertitle: "tenements",
                interactive: true,
                title: '<img src="styles/legend/tenements_3.png" /> tenements'
            });
var format_roads_pro_4 = new ol.format.GeoJSON();
var features_roads_pro_4 = format_roads_pro_4.readFeatures(json_roads_pro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_roads_pro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_pro_4.addFeatures(features_roads_pro_4);
var lyr_roads_pro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_pro_4, 
                style: style_roads_pro_4,
                popuplayertitle: "roads_pro",
                interactive: true,
                title: '<img src="styles/legend/roads_pro_4.png" /> roads_pro'
            });
var format_pipelines_5 = new ol.format.GeoJSON();
var features_pipelines_5 = format_pipelines_5.readFeatures(json_pipelines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pipelines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pipelines_5.addFeatures(features_pipelines_5);
var lyr_pipelines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pipelines_5, 
                style: style_pipelines_5,
                permalink:"S",
                popuplayertitle: "pipelines",
                interactive: true,
                title: '<img src="styles/legend/pipelines_5.png" /> pipelines'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_googlesatellite_1.setVisible(true);lyr_prop_qld_2.setVisible(true);lyr_tenements_3.setVisible(true);lyr_roads_pro_4.setVisible(true);lyr_pipelines_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googlesatellite_1,lyr_prop_qld_2,lyr_tenements_3,lyr_roads_pro_4,lyr_pipelines_5];
lyr_prop_qld_2.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_tenements_3.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'TENEMENT_TYPE': 'TENEMENT_TYPE', 'TYPE': 'TYPE', 'OPERATOR': 'OPERATOR', 'GRANTED_DATE': 'GRANTED_DATE', 'EXPIRY_DATE': 'EXPIRY_DATE', 'AREA_SQ_KM': 'AREA_SQ_KM', 'RELEVANT_ACT': 'RELEVANT_ACT', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', 'EA_ID': 'EA_ID', });
lyr_roads_pro_4.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'OWNER': 'OWNER', 'ROAD_TYPE': 'ROAD_TYPE', 'USAGE': 'USAGE', 'ROUTE_PRIORITY': 'ROUTE_PRIORITY', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMMENTS': 'COMMENTS', 'OPERATOR': 'OPERATOR', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_pipelines_5.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMTRACK_LICENSE_NAME': 'COMTRACK_LICENSE_NAME', 'COMTRACK_FIELD': 'COMTRACK_FIELD', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_prop_qld_2.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_tenements_3.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'TENEMENT_TYPE': 'TextEdit', 'TYPE': 'TextEdit', 'OPERATOR': 'TextEdit', 'GRANTED_DATE': 'DateTime', 'EXPIRY_DATE': 'DateTime', 'AREA_SQ_KM': 'TextEdit', 'RELEVANT_ACT': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', 'EA_ID': 'TextEdit', });
lyr_roads_pro_4.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'USAGE': 'TextEdit', 'ROUTE_PRIORITY': 'Range', 'CONSTRUCTION_DATE': 'DateTime', 'COMMENTS': 'TextEdit', 'OPERATOR': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_pipelines_5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'TextEdit', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'TextEdit', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'COMTRACK_LICENSE_NAME': 'TextEdit', 'COMTRACK_FIELD': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_prop_qld_2.set('fieldLabels', {'id': 'no label', 'PROPERTY_NAME': 'no label', 'PROPERTY_NAME_QUALIFIED': 'no label', 'COMMENTS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_tenements_3.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'TENEMENT_TYPE': 'no label', 'TYPE': 'no label', 'OPERATOR': 'no label', 'GRANTED_DATE': 'no label', 'EXPIRY_DATE': 'no label', 'AREA_SQ_KM': 'no label', 'RELEVANT_ACT': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'no label', 'OBJECT_TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'GUID': 'no label', 'EA_ID': 'no label', });
lyr_roads_pro_4.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'OWNER': 'no label', 'ROAD_TYPE': 'no label', 'USAGE': 'no label', 'ROUTE_PRIORITY': 'no label', 'CONSTRUCTION_DATE': 'no label', 'COMMENTS': 'no label', 'OPERATOR': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_pipelines_5.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NAME_PIMS': 'inline label - always visible', 'CLASSIFICATION': 'inline label - always visible', 'PIPELINE_ID': 'inline label - always visible', 'P_ID_NUMBER': 'inline label - always visible', 'P_ID_LINE_NUMBER': 'inline label - always visible', 'LICENSE_NO': 'inline label - always visible', 'AREA_NUMBER': 'inline label - always visible', 'SEQUENCE_NUMBER': 'inline label - always visible', 'DIAMETER_NOMINAL': 'no label', 'SERVICE': 'inline label - always visible', 'SPECIFICATION': 'no label', 'LINE_TYPE': 'inline label - always visible', 'PIPELINE_LENGTH_M': 'inline label - always visible', 'FLUID_TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'MAINTENANCE_RESPONSIBILITY': 'no label', 'DESIGN_PRESSURE': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'COMTRACK_LICENSE_NAME': 'no label', 'COMTRACK_FIELD': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'no label', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'inline label - always visible', });
lyr_pipelines_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});