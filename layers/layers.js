ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([140.208308, -28.174716, 141.295857, -27.589519]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            permalink:"S",
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BaseSatellite_1 = new ol.layer.Tile({
            'title': 'Base Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_environments_2 = new ol.format.GeoJSON();
var features_environments_2 = format_environments_2.readFeatures(json_environments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_environments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_environments_2.addFeatures(features_environments_2);
var lyr_environments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_environments_2, 
                style: style_environments_2,
                popuplayertitle: "environments",
                interactive: true,
                title: '<img src="styles/legend/environments_2.png" /> environments'
            });
var format_gates_3 = new ol.format.GeoJSON();
var features_gates_3 = format_gates_3.readFeatures(json_gates_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gates_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gates_3.addFeatures(features_gates_3);
var lyr_gates_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gates_3, 
                style: style_gates_3,
                popuplayertitle: "gates",
                interactive: true,
                title: '<img src="styles/legend/gates_3.png" /> gates'
            });
var format_buildings_4 = new ol.format.GeoJSON();
var features_buildings_4 = format_buildings_4.readFeatures(json_buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_4.addFeatures(features_buildings_4);
var lyr_buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_4, 
                style: style_buildings_4,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_4.png" /> buildings'
            });
var format_borrow_pits_proposed_5 = new ol.format.GeoJSON();
var features_borrow_pits_proposed_5 = format_borrow_pits_proposed_5.readFeatures(json_borrow_pits_proposed_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_borrow_pits_proposed_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borrow_pits_proposed_5.addFeatures(features_borrow_pits_proposed_5);
var lyr_borrow_pits_proposed_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_borrow_pits_proposed_5, 
                style: style_borrow_pits_proposed_5,
                popuplayertitle: "borrow_pits_proposed",
                interactive: true,
                title: '<img src="styles/legend/borrow_pits_proposed_5.png" /> borrow_pits_proposed'
            });
var format_roads_proposed_6 = new ol.format.GeoJSON();
var features_roads_proposed_6 = format_roads_proposed_6.readFeatures(json_roads_proposed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_roads_proposed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_proposed_6.addFeatures(features_roads_proposed_6);
var lyr_roads_proposed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_proposed_6, 
                style: style_roads_proposed_6,
                popuplayertitle: "roads_proposed",
                interactive: true,
                title: '<img src="styles/legend/roads_proposed_6.png" /> roads_proposed'
            });
var format_fences_7 = new ol.format.GeoJSON();
var features_fences_7 = format_fences_7.readFeatures(json_fences_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_fences_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fences_7.addFeatures(features_fences_7);
var lyr_fences_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fences_7, 
                style: style_fences_7,
                popuplayertitle: "fences",
                interactive: true,
                title: '<img src="styles/legend/fences_7.png" /> fences'
            });
var format_properties_qld_8 = new ol.format.GeoJSON();
var features_properties_qld_8 = format_properties_qld_8.readFeatures(json_properties_qld_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_qld_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_qld_8.addFeatures(features_properties_qld_8);
var lyr_properties_qld_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_qld_8, 
                style: style_properties_qld_8,
                popuplayertitle: "properties_qld",
                interactive: true,
                title: '<img src="styles/legend/properties_qld_8.png" /> properties_qld'
            });
var format_properties_qld_amended_9 = new ol.format.GeoJSON();
var features_properties_qld_amended_9 = format_properties_qld_amended_9.readFeatures(json_properties_qld_amended_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_qld_amended_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_qld_amended_9.addFeatures(features_properties_qld_amended_9);
var lyr_properties_qld_amended_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_qld_amended_9, 
                style: style_properties_qld_amended_9,
                popuplayertitle: "properties_qld_amended",
                interactive: true,
                title: '<img src="styles/legend/properties_qld_amended_9.png" /> properties_qld_amended'
            });
var format_properties_sa_10 = new ol.format.GeoJSON();
var features_properties_sa_10 = format_properties_sa_10.readFeatures(json_properties_sa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_sa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_sa_10.addFeatures(features_properties_sa_10);
var lyr_properties_sa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_sa_10, 
                style: style_properties_sa_10,
                popuplayertitle: "properties_sa",
                interactive: true,
                title: '<img src="styles/legend/properties_sa_10.png" /> properties_sa'
            });
var format_pipelines_11 = new ol.format.GeoJSON();
var features_pipelines_11 = format_pipelines_11.readFeatures(json_pipelines_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pipelines_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pipelines_11.addFeatures(features_pipelines_11);
var lyr_pipelines_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pipelines_11, 
                style: style_pipelines_11,
                popuplayertitle: "pipelines",
                interactive: true,
                title: '<img src="styles/legend/pipelines_11.png" /> pipelines'
            });
var format_tenements_12 = new ol.format.GeoJSON();
var features_tenements_12 = format_tenements_12.readFeatures(json_tenements_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tenements_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tenements_12.addFeatures(features_tenements_12);
var lyr_tenements_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tenements_12, 
                style: style_tenements_12,
                popuplayertitle: "tenements",
                interactive: true,
                title: '<img src="styles/legend/tenements_12.png" /> tenements'
            });
var group_Tenure = new ol.layer.Group({
                                layers: [lyr_pipelines_11,lyr_tenements_12,],
                                fold: "open",
                                title: "Tenure"});
var group_LandAccess = new ol.layer.Group({
                                layers: [lyr_gates_3,lyr_buildings_4,lyr_borrow_pits_proposed_5,lyr_roads_proposed_6,lyr_fences_7,lyr_properties_qld_8,lyr_properties_qld_amended_9,lyr_properties_sa_10,],
                                fold: "open",
                                title: "Land Access"});
var group_Environment = new ol.layer.Group({
                                layers: [lyr_environments_2,],
                                fold: "open",
                                title: "Environment"});

lyr_BaseMap_0.setVisible(true);lyr_BaseSatellite_1.setVisible(false);lyr_environments_2.setVisible(false);lyr_gates_3.setVisible(true);lyr_buildings_4.setVisible(true);lyr_borrow_pits_proposed_5.setVisible(true);lyr_roads_proposed_6.setVisible(true);lyr_fences_7.setVisible(true);lyr_properties_qld_8.setVisible(true);lyr_properties_qld_amended_9.setVisible(true);lyr_properties_sa_10.setVisible(true);lyr_pipelines_11.setVisible(true);lyr_tenements_12.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_BaseSatellite_1,group_Environment,group_LandAccess,group_Tenure];
lyr_environments_2.set('fieldAliases', {'id': 'id', 'LAND_SYSTEM': 'LAND_SYSTEM', 'LAND_SYSTEM_TYPE': 'LAND_SYSTEM_TYPE', 'VEGETATION_ASSOCIATION': 'VEGETATION_ASSOCIATION', 'SOIL_TYPE': 'SOIL_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_gates_3.set('fieldAliases', {'id': 'id', 'CONSTRUCTION': 'CONSTRUCTION', 'TYPE': 'TYPE', 'WIDTH_METRES': 'WIDTH_METRES', 'ENCUMBRANCES': 'ENCUMBRANCES', 'LOCKED': 'LOCKED', 'COMMENTS': 'COMMENTS', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SYMBOL_ROTATION': 'SYMBOL_ROTATION', 'GUID': 'GUID', });
lyr_buildings_4.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'PROPERTY_NAME': 'PROPERTY_NAME', 'TYPE': 'TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'COMMENTS': 'COMMENTS', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', });
lyr_borrow_pits_proposed_5.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'OWNER': 'OWNER', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'EDIDB_INSPECTION_NUMBER': 'EDIDB_INSPECTION_NUMBER', 'EQUIPMENT_ID': 'EQUIPMENT_ID', 'OPERATOR': 'OPERATOR', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_roads_proposed_6.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'OWNER': 'OWNER', 'ROAD_TYPE': 'ROAD_TYPE', 'USAGE': 'USAGE', 'ROUTE_PRIORITY': 'ROUTE_PRIORITY', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMMENTS': 'COMMENTS', 'OPERATOR': 'OPERATOR', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_fences_7.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', 'CONDITION': 'CONDITION', 'COMMENTS': 'COMMENTS', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_properties_qld_8.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_properties_qld_amended_9.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', });
lyr_properties_sa_10.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_pipelines_11.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMTRACK_LICENSE_NAME': 'COMTRACK_LICENSE_NAME', 'COMTRACK_FIELD': 'COMTRACK_FIELD', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_tenements_12.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'TENEMENT_TYPE': 'TENEMENT_TYPE', 'TYPE': 'TYPE', 'OPERATOR': 'OPERATOR', 'GRANTED_DATE': 'GRANTED_DATE', 'EXPIRY_DATE': 'EXPIRY_DATE', 'AREA_SQ_KM': 'AREA_SQ_KM', 'RELEVANT_ACT': 'RELEVANT_ACT', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', 'EA_ID': 'EA_ID', });
lyr_environments_2.set('fieldImages', {'id': 'TextEdit', 'LAND_SYSTEM': 'TextEdit', 'LAND_SYSTEM_TYPE': 'TextEdit', 'VEGETATION_ASSOCIATION': 'TextEdit', 'SOIL_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_gates_3.set('fieldImages', {'id': 'TextEdit', 'CONSTRUCTION': 'TextEdit', 'TYPE': 'TextEdit', 'WIDTH_METRES': 'TextEdit', 'ENCUMBRANCES': 'TextEdit', 'LOCKED': 'TextEdit', 'COMMENTS': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'SYMBOL_ROTATION': 'TextEdit', 'GUID': 'TextEdit', });
lyr_buildings_4.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'COMMENTS': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', });
lyr_borrow_pits_proposed_5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'EDIDB_INSPECTION_NUMBER': 'TextEdit', 'EQUIPMENT_ID': 'TextEdit', 'OPERATOR': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_roads_proposed_6.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'USAGE': 'TextEdit', 'ROUTE_PRIORITY': 'Range', 'CONSTRUCTION_DATE': 'DateTime', 'COMMENTS': 'TextEdit', 'OPERATOR': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_fences_7.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', 'CONDITION': 'TextEdit', 'COMMENTS': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_properties_qld_8.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_properties_qld_amended_9.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', });
lyr_properties_sa_10.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_pipelines_11.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'TextEdit', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'TextEdit', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'COMTRACK_LICENSE_NAME': 'TextEdit', 'COMTRACK_FIELD': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_tenements_12.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'TENEMENT_TYPE': 'TextEdit', 'TYPE': 'TextEdit', 'OPERATOR': 'TextEdit', 'GRANTED_DATE': 'DateTime', 'EXPIRY_DATE': 'DateTime', 'AREA_SQ_KM': 'TextEdit', 'RELEVANT_ACT': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', 'EA_ID': 'TextEdit', });
lyr_environments_2.set('fieldLabels', {'id': 'no label', 'LAND_SYSTEM': 'no label', 'LAND_SYSTEM_TYPE': 'no label', 'VEGETATION_ASSOCIATION': 'no label', 'SOIL_TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_gates_3.set('fieldLabels', {'id': 'inline label - always visible', 'CONSTRUCTION': 'no label', 'TYPE': 'no label', 'WIDTH_METRES': 'no label', 'ENCUMBRANCES': 'no label', 'LOCKED': 'no label', 'COMMENTS': 'no label', 'CONSTRUCTION_DATE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'SYMBOL_ROTATION': 'no label', 'GUID': 'inline label - always visible', });
lyr_buildings_4.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'PROPERTY_NAME': 'no label', 'TYPE': 'no label', 'OWNER': 'no label', 'OPERATOR': 'no label', 'COMMENTS': 'no label', 'OBJECT_TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'CONSTRUCTION_DATE': 'no label', 'LAST_UPDATE': 'hidden field', 'GUID': 'no label', });
lyr_borrow_pits_proposed_5.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'OWNER': 'no label', 'CONSTRUCTION_DATE': 'no label', 'TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'EDIDB_INSPECTION_NUMBER': 'no label', 'EQUIPMENT_ID': 'no label', 'OPERATOR': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_roads_proposed_6.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'OWNER': 'no label', 'ROAD_TYPE': 'no label', 'USAGE': 'no label', 'ROUTE_PRIORITY': 'no label', 'CONSTRUCTION_DATE': 'no label', 'COMMENTS': 'no label', 'OPERATOR': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_fences_7.set('fieldLabels', {'id': 'no label', 'TYPE': 'no label', 'CONDITION': 'no label', 'COMMENTS': 'no label', 'CONSTRUCTION_DATE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_properties_qld_8.set('fieldLabels', {'id': 'no label', 'PROPERTY_NAME': 'no label', 'PROPERTY_NAME_QUALIFIED': 'no label', 'COMMENTS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_properties_qld_amended_9.set('fieldLabels', {'id': 'no label', 'PROPERTY_NAME': 'no label', 'PROPERTY_NAME_QUALIFIED': 'no label', 'COMMENTS': 'no label', 'OBJECT_TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'GUID': 'no label', });
lyr_properties_sa_10.set('fieldLabels', {'id': 'no label', 'PROPERTY_NAME': 'no label', 'PROPERTY_NAME_QUALIFIED': 'no label', 'COMMENTS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', });
lyr_pipelines_11.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NAME_PIMS': 'inline label - always visible', 'CLASSIFICATION': 'inline label - always visible', 'PIPELINE_ID': 'inline label - always visible', 'P_ID_NUMBER': 'inline label - always visible', 'P_ID_LINE_NUMBER': 'inline label - always visible', 'LICENSE_NO': 'inline label - always visible', 'AREA_NUMBER': 'inline label - always visible', 'SEQUENCE_NUMBER': 'inline label - always visible', 'DIAMETER_NOMINAL': 'no label', 'SERVICE': 'inline label - always visible', 'SPECIFICATION': 'no label', 'LINE_TYPE': 'inline label - always visible', 'PIPELINE_LENGTH_M': 'inline label - always visible', 'FLUID_TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'MAINTENANCE_RESPONSIBILITY': 'no label', 'DESIGN_PRESSURE': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'COMTRACK_LICENSE_NAME': 'no label', 'COMTRACK_FIELD': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'no label', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'inline label - always visible', });
lyr_tenements_12.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'TENEMENT_TYPE': 'no label', 'TYPE': 'no label', 'OPERATOR': 'no label', 'GRANTED_DATE': 'no label', 'EXPIRY_DATE': 'no label', 'AREA_SQ_KM': 'no label', 'RELEVANT_ACT': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'no label', 'OBJECT_TYPE': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'GUID': 'no label', 'EA_ID': 'no label', });
lyr_tenements_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});