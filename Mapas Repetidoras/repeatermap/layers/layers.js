var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ModelodePropagao5w_1 = new ol.format.GeoJSON();
var features_ModelodePropagao5w_1 = format_ModelodePropagao5w_1.readFeatures(json_ModelodePropagao5w_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModelodePropagao5w_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelodePropagao5w_1.addFeatures(features_ModelodePropagao5w_1);
var lyr_ModelodePropagao5w_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelodePropagao5w_1, 
                style: style_ModelodePropagao5w_1,
                popuplayertitle: "Modelo de Propagação - 5w",
                interactive: true,
    title: 'Modelo de Propagação - 5w<br />\
    <img src="styles/legend/ModelodePropagao5w_1_0.png" /> => 1 µV<br />\
    <img src="styles/legend/ModelodePropagao5w_1_1.png" /> => 10 µV<br />'
        });
var format_AnlisedeVisibilidade_2 = new ol.format.GeoJSON();
var features_AnlisedeVisibilidade_2 = format_AnlisedeVisibilidade_2.readFeatures(json_AnlisedeVisibilidade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnlisedeVisibilidade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnlisedeVisibilidade_2.addFeatures(features_AnlisedeVisibilidade_2);
var lyr_AnlisedeVisibilidade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnlisedeVisibilidade_2, 
                style: style_AnlisedeVisibilidade_2,
                popuplayertitle: "Análise de Visibilidade",
                interactive: true,
                title: '<img src="styles/legend/AnlisedeVisibilidade_2.png" /> Análise de Visibilidade'
            });
var format_Repetidoras_3 = new ol.format.GeoJSON();
var features_Repetidoras_3 = format_Repetidoras_3.readFeatures(json_Repetidoras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Repetidoras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Repetidoras_3.addFeatures(features_Repetidoras_3);
var lyr_Repetidoras_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Repetidoras_3, 
                style: style_Repetidoras_3,
                popuplayertitle: "Repetidoras",
                interactive: true,
    title: 'Repetidoras<br />\
    <img src="styles/legend/Repetidoras_3_0.png" /> QTH<br />\
    <img src="styles/legend/Repetidoras_3_1.png" /> UHF<br />\
    <img src="styles/legend/Repetidoras_3_2.png" /> VHF<br />\
    <img src="styles/legend/Repetidoras_3_3.png" /> DMR<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ModelodePropagao5w_1.setVisible(true);lyr_AnlisedeVisibilidade_2.setVisible(true);lyr_Repetidoras_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ModelodePropagao5w_1,lyr_AnlisedeVisibilidade_2,lyr_Repetidoras_3];
lyr_ModelodePropagao5w_1.set('fieldAliases', {'Power': 'Power', });
lyr_AnlisedeVisibilidade_2.set('fieldAliases', {});
lyr_Repetidoras_3.set('fieldAliases', {'Name': 'Name', 'RTP': 'RTP', 'CTG': 'CTG', 'FREQ': 'FREQ', 'OFFSET': 'OFFSET', 'SUBTOM': 'SUBTOM', 'NOMEUF': 'NOMEUF', 'NOME_MUNIC': 'NOME_MUNIC', });
lyr_ModelodePropagao5w_1.set('fieldImages', {'Power': 'TextEdit', });
lyr_AnlisedeVisibilidade_2.set('fieldImages', {});
lyr_Repetidoras_3.set('fieldImages', {'Name': 'TextEdit', 'RTP': 'TextEdit', 'CTG': 'TextEdit', 'FREQ': 'TextEdit', 'OFFSET': 'TextEdit', 'SUBTOM': 'TextEdit', 'NOMEUF': 'TextEdit', 'NOME_MUNIC': 'TextEdit', });
lyr_ModelodePropagao5w_1.set('fieldLabels', {'Power': 'no label', });
lyr_AnlisedeVisibilidade_2.set('fieldLabels', {});
lyr_Repetidoras_3.set('fieldLabels', {'Name': 'no label', 'RTP': 'no label', 'CTG': 'no label', 'FREQ': 'no label', 'OFFSET': 'no label', 'SUBTOM': 'no label', 'NOMEUF': 'no label', 'NOME_MUNIC': 'no label', });
lyr_Repetidoras_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});