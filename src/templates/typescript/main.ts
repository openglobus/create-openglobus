import '@openglobus/og/css/og.css';
import './style.css';
import {Globe, GlobusTerrain, utils, XYZ} from '@openglobus/og';

const osm = new XYZ("OpenStreetMap", {
    isBaseLayer: true,
    url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    visibility: true,
    attribution: "Data @ OpenStreetMap contributors, ODbL"
});

function toQuadKey(x: number, y: number, z: number) {
    var index = '';
    for (var i = z; i > 0; i--) {
        var b = 0;
        var mask = 1 << (i - 1);
        if ((x & mask) !== 0) b++;
        if ((y & mask) !== 0) b += 2;
        index += b.toString();
    }
    return index;
}

const sat = new XYZ("sat", {
    isBaseLayer: true,
    subdomains: ['t0', 't1', 't2', 't3'],
    url: "https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",
    visibility: true,
    attribution: `<a href="http://www.bing.com" target="_blank"><img title="Bing Imagery" src="https://sandcastle.cesium.com/CesiumUnminified/Assets/Images/bing_maps_credit.png" alt="Bing"></a> © 2021 Microsoft Corporation`,
    maxNativeZoom: 19,
    defaultTextures: [{color: "#001522"}, {color: "#E4E6F3"}],
    shininess: 18,
    specular: [0.00063, 0.00055, 0.00032],
    ambient: "rgb(100,100,140)",
    diffuse: "rgb(450,450,450)",
    nightTextureCoefficient: 2.7,
    urlRewrite: function (s: any, u: string) {
        // @ts-ignore
        return utils.stringTemplate(u, {'s': this._getSubdomain(),
            'quad': toQuadKey(s.tileX, s.tileY, s.tileZoom)
        });
    }
});
new Globe({
    target: 'app',
    name: "Earth",
    terrain: new GlobusTerrain(),
    layers: [sat],
    autoActivate: true,
    atmosphereEnabled: true,
});

