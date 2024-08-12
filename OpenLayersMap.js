define([
    'jquery',
    'qlik',
    'text!./ol.js',
    'text!./template.html',
    './properties',
    'css!./ol.css',
], function ($, qlik, olText, template, properties) {
    $(
        '<script type="text/javascript" src="/extensions/OpenLayersMap/ol.js"></script>'
    ).appendTo('head');

    console.log('openLayers: ', ol);

    const {
        Map,
        View,
        layer: { Tile: TileLayer, BaseTile: BaseTileLayer },
        source: { OSM },
    } = ol;

    function initializeMap(layout) {
        console.log(layout);
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM({
                        url: 'https://maps.qlikcloud.com/ravegeo/map2/GetTile?name=osm_bg.24.4&tx={x}&ty={y}&zoomStep={z}&key=may21-K8DU2D3jU9PWhr',
                        //https://tile.openstreetmap.org/{z}/{x}/{y}.png
                    }),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
    }
    function render(layout) {
        console.log('rendering');
    }

    return {
        definition: properties,
        template,
        support: {
            snapshot: true,
            export: true,
            exportData: false,
        },
        paint: function ($element, $layout) {
            render($layout);
            return qlik.Promise.resolve();
        },
        controller: [
            '$scope',
            function ($scope) {
                initializeMap($scope.layout);
            },
        ],
    };
});
