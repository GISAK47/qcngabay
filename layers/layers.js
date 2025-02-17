ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5897").setExtent([584836.485269, 1081464.374931, 597488.361867, 1088353.313920]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.605000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_QuyCheNga7HauGiangChucNang_1 = new ol.format.GeoJSON();
var features_QuyCheNga7HauGiangChucNang_1 = format_QuyCheNga7HauGiangChucNang_1.readFeatures(json_QuyCheNga7HauGiangChucNang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_QuyCheNga7HauGiangChucNang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuyCheNga7HauGiangChucNang_1.addFeatures(features_QuyCheNga7HauGiangChucNang_1);
var lyr_QuyCheNga7HauGiangChucNang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuyCheNga7HauGiangChucNang_1, 
                style: style_QuyCheNga7HauGiangChucNang_1,
                popuplayertitle: 'QuyCheNga7HauGiang — ChucNang',
                interactive: true,
    title: 'QuyCheNga7HauGiang — ChucNang<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_0.png" /> Đất an ninh quốc phòng<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_1.png" /> Đất cây ăn quả<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_2.png" /> Đất cây xanh cảnh quan<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_3.png" /> Đất cây xanh công viên TDTT<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_4.png" /> Đất cơ quan<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_5.png" /> Đất công cộng đô thị<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_6.png" /> Đất công cộng đơn vị ở<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_7.png" /> Đất công nghiệp, tiểu thủ công nghiệp<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_8.png" /> Đất đầu mối hạ tầng kỹ thuật<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_9.png" /> Đất đơn vị ở ngoại thị<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_10.png" /> Đất đơn vị ở nội thị<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_11.png" /> Đất hỗn hợp<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_12.png" /> Đất kênh rạch<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_13.png" /> Đất Lúa<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_14.png" /> Đất nghĩa trang<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_15.png" /> Đất tôn giáo, di tích<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_16.png" /> Đất trung tâm nghiên cứu, đào tạo<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_17.png" /> Đất trung tâm y tế<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_18.png" /> Đất trường THCS, Tiểu Học, Mầm Non<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_19.png" /> Đất trường THPT<br />\
    <img src="styles/legend/QuyCheNga7HauGiangChucNang_1_20.png" /> <br />' });
var format_QuyCheNga7HauGiangRanhNghienCuu_2 = new ol.format.GeoJSON();
var features_QuyCheNga7HauGiangRanhNghienCuu_2 = format_QuyCheNga7HauGiangRanhNghienCuu_2.readFeatures(json_QuyCheNga7HauGiangRanhNghienCuu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_QuyCheNga7HauGiangRanhNghienCuu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuyCheNga7HauGiangRanhNghienCuu_2.addFeatures(features_QuyCheNga7HauGiangRanhNghienCuu_2);
var lyr_QuyCheNga7HauGiangRanhNghienCuu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuyCheNga7HauGiangRanhNghienCuu_2, 
                style: style_QuyCheNga7HauGiangRanhNghienCuu_2,
                popuplayertitle: 'QuyCheNga7HauGiang — RanhNghienCuu',
                interactive: false,
                title: '<img src="styles/legend/QuyCheNga7HauGiangRanhNghienCuu_2.png" /> QuyCheNga7HauGiang — RanhNghienCuu'
            });
var format_QuyCheNga7HauGiangRanhHanhChinh_pol_3 = new ol.format.GeoJSON();
var features_QuyCheNga7HauGiangRanhHanhChinh_pol_3 = format_QuyCheNga7HauGiangRanhHanhChinh_pol_3.readFeatures(json_QuyCheNga7HauGiangRanhHanhChinh_pol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_QuyCheNga7HauGiangRanhHanhChinh_pol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuyCheNga7HauGiangRanhHanhChinh_pol_3.addFeatures(features_QuyCheNga7HauGiangRanhHanhChinh_pol_3);
var lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuyCheNga7HauGiangRanhHanhChinh_pol_3, 
                style: style_QuyCheNga7HauGiangRanhHanhChinh_pol_3,
                popuplayertitle: 'QuyCheNga7HauGiang — RanhHanhChinh_pol',
                interactive: true,
                title: '<img src="styles/legend/QuyCheNga7HauGiangRanhHanhChinh_pol_3.png" /> QuyCheNga7HauGiang — RanhHanhChinh_pol'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_QuyCheNga7HauGiangChucNang_1.setVisible(true);lyr_QuyCheNga7HauGiangRanhNghienCuu_2.setVisible(true);lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QuyCheNga7HauGiangChucNang_1,lyr_QuyCheNga7HauGiangRanhNghienCuu_2,lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3];
lyr_QuyCheNga7HauGiangChucNang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'MaSo': 'MaSo', 'ChucNang': 'ChucNang', 'TenCongTrinh': 'TenCongTrinh', 'GhiChu': 'GhiChu', 'Field': 'Field', });
lyr_QuyCheNga7HauGiangRanhNghienCuu_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PhuongXa': 'PhuongXa', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_QuyCheNga7HauGiangChucNang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'MaSo': 'TextEdit', 'ChucNang': 'TextEdit', 'TenCongTrinh': 'TextEdit', 'GhiChu': 'TextEdit', 'Field': 'Range', });
lyr_QuyCheNga7HauGiangRanhNghienCuu_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PhuongXa': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_QuyCheNga7HauGiangChucNang_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'MaSo': 'inline label - visible with data', 'ChucNang': 'inline label - always visible', 'TenCongTrinh': 'inline label - always visible', 'GhiChu': 'inline label - always visible', 'Field': 'no label', });
lyr_QuyCheNga7HauGiangRanhNghienCuu_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3.set('fieldLabels', {'OBJECTID': 'no label', 'PhuongXa': 'inline label - always visible', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_QuyCheNga7HauGiangRanhHanhChinh_pol_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});