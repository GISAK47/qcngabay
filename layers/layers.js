ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5897").setExtent([588019.812956, 1087361.746825, 589674.291702, 1088222.730202]);
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
var format_ChcNng_1 = new ol.format.GeoJSON();
var features_ChcNng_1 = format_ChcNng_1.readFeatures(json_ChcNng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_ChcNng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChcNng_1.addFeatures(features_ChcNng_1);
var lyr_ChcNng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChcNng_1, 
                style: style_ChcNng_1,
                popuplayertitle: 'Chức Năng',
                interactive: true,
    title: 'Chức Năng<br />\
    <img src="styles/legend/ChcNng_1_0.png" /> Đất an ninh quốc phòng<br />\
    <img src="styles/legend/ChcNng_1_1.png" /> Đất cây ăn quả<br />\
    <img src="styles/legend/ChcNng_1_2.png" /> Đất cây xanh cảnh quan<br />\
    <img src="styles/legend/ChcNng_1_3.png" /> Đất cây xanh công viên TDTT<br />\
    <img src="styles/legend/ChcNng_1_4.png" /> Đất cơ quan<br />\
    <img src="styles/legend/ChcNng_1_5.png" /> Đất công cộng đô thị<br />\
    <img src="styles/legend/ChcNng_1_6.png" /> Đất công cộng đơn vị ở<br />\
    <img src="styles/legend/ChcNng_1_7.png" /> Đất công nghiệp, tiểu thủ công nghiệp<br />\
    <img src="styles/legend/ChcNng_1_8.png" /> Đất đầu mối hạ tầng kỹ thuật<br />\
    <img src="styles/legend/ChcNng_1_9.png" /> Đất đơn vị ở ngoại thị<br />\
    <img src="styles/legend/ChcNng_1_10.png" /> Đất đơn vị ở nội thị<br />\
    <img src="styles/legend/ChcNng_1_11.png" /> Đất hỗn hợp<br />\
    <img src="styles/legend/ChcNng_1_12.png" /> Đất kênh rạch<br />\
    <img src="styles/legend/ChcNng_1_13.png" /> Đất Lúa<br />\
    <img src="styles/legend/ChcNng_1_14.png" /> Đất nghĩa trang<br />\
    <img src="styles/legend/ChcNng_1_15.png" /> Đất tôn giáo, di tích<br />\
    <img src="styles/legend/ChcNng_1_16.png" /> Đất trung tâm nghiên cứu, đào tạo<br />\
    <img src="styles/legend/ChcNng_1_17.png" /> Đất trung tâm y tế<br />\
    <img src="styles/legend/ChcNng_1_18.png" /> Đất trường THCS, Tiểu Học, Mầm Non<br />\
    <img src="styles/legend/ChcNng_1_19.png" /> Đất trường THPT<br />\
    <img src="styles/legend/ChcNng_1_20.png" /> <br />' });
var format_RanhThnhPhNgBy_2 = new ol.format.GeoJSON();
var features_RanhThnhPhNgBy_2 = format_RanhThnhPhNgBy_2.readFeatures(json_RanhThnhPhNgBy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_RanhThnhPhNgBy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhThnhPhNgBy_2.addFeatures(features_RanhThnhPhNgBy_2);
var lyr_RanhThnhPhNgBy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhThnhPhNgBy_2, 
                style: style_RanhThnhPhNgBy_2,
                popuplayertitle: 'Ranh Thành Phố Ngã Bảy',
                interactive: false,
                title: '<img src="styles/legend/RanhThnhPhNgBy_2.png" /> Ranh Thành Phố Ngã Bảy'
            });
var format_RanhHnhChnh_3 = new ol.format.GeoJSON();
var features_RanhHnhChnh_3 = format_RanhHnhChnh_3.readFeatures(json_RanhHnhChnh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_RanhHnhChnh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhHnhChnh_3.addFeatures(features_RanhHnhChnh_3);
var lyr_RanhHnhChnh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhHnhChnh_3, 
                style: style_RanhHnhChnh_3,
                popuplayertitle: 'Ranh Hành Chính',
                interactive: true,
                title: '<img src="styles/legend/RanhHnhChnh_3.png" /> Ranh Hành Chính'
            });
var format_RanhDn_4 = new ol.format.GeoJSON();
var features_RanhDn_4 = format_RanhDn_4.readFeatures(json_RanhDn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_RanhDn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhDn_4.addFeatures(features_RanhDn_4);
var lyr_RanhDn_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhDn_4, 
                style: style_RanhDn_4,
                popuplayertitle: 'Ranh Dự Án',
                interactive: true,
                title: '<img src="styles/legend/RanhDn_4.png" /> Ranh Dự Án'
            });
var format_GT_OSM_5 = new ol.format.GeoJSON();
var features_GT_OSM_5 = format_GT_OSM_5.readFeatures(json_GT_OSM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5897'});
var jsonSource_GT_OSM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GT_OSM_5.addFeatures(features_GT_OSM_5);
var lyr_GT_OSM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GT_OSM_5, 
                style: style_GT_OSM_5,
                popuplayertitle: 'GT_OSM',
                interactive: true,
                title: '<img src="styles/legend/GT_OSM_5.png" /> GT_OSM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ChcNng_1.setVisible(true);lyr_RanhThnhPhNgBy_2.setVisible(true);lyr_RanhHnhChnh_3.setVisible(true);lyr_RanhDn_4.setVisible(true);lyr_GT_OSM_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ChcNng_1,lyr_RanhThnhPhNgBy_2,lyr_RanhHnhChnh_3,lyr_RanhDn_4,lyr_GT_OSM_5];
lyr_ChcNng_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'MaSo': 'MaSo', 'ChucNang': 'ChucNang', 'TenCongTrinh': 'TenCongTrinh', 'GhiChu': 'GhiChu', 'Field': 'Field', });
lyr_RanhThnhPhNgBy_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RanhHnhChnh_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PhuongXa': 'PhuongXa', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RanhDn_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'TenDA': 'TenDA', 'TrangThai': 'TrangThai', 'GhiChu': 'GhiChu', 'QDPD': 'QDPD', 'LoaiQH': 'LoaiQH', 'DienTich': 'DienTich', });
lyr_GT_OSM_5.set('fieldAliases', {'note_vi': 'note_vi', 'name': 'name', });
lyr_ChcNng_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'MaSo': 'TextEdit', 'ChucNang': 'TextEdit', 'TenCongTrinh': 'TextEdit', 'GhiChu': 'TextEdit', 'Field': 'Range', });
lyr_RanhThnhPhNgBy_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RanhHnhChnh_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PhuongXa': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RanhDn_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'TenDA': 'TextEdit', 'TrangThai': 'TextEdit', 'GhiChu': 'TextEdit', 'QDPD': 'TextEdit', 'LoaiQH': 'TextEdit', 'DienTich': 'TextEdit', });
lyr_GT_OSM_5.set('fieldImages', {'note_vi': 'TextEdit', 'name': 'TextEdit', });
lyr_ChcNng_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'MaSo': 'inline label - visible with data', 'ChucNang': 'inline label - always visible', 'TenCongTrinh': 'inline label - always visible', 'GhiChu': 'inline label - always visible', 'Field': 'no label', });
lyr_RanhThnhPhNgBy_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_RanhHnhChnh_3.set('fieldLabels', {'OBJECTID': 'no label', 'PhuongXa': 'inline label - always visible', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_RanhDn_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'TenDA': 'inline label - always visible', 'TrangThai': 'inline label - always visible', 'GhiChu': 'inline label - always visible', 'QDPD': 'inline label - always visible', 'LoaiQH': 'inline label - always visible', 'DienTich': 'inline label - always visible', });
lyr_GT_OSM_5.set('fieldLabels', {'note_vi': 'no label', 'name': 'inline label - always visible', });
lyr_GT_OSM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});