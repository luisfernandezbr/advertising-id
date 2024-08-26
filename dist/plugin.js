var capacitorAdvertisingId = (function (exports, core) {
    'use strict';

    const AdvertisingId = core.registerPlugin('AdvertisingId', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.AdvertisingIdWeb()),
    });

    class AdvertisingIdWeb extends core.WebPlugin {
        requestTracking() {
            throw this.unavailable('@capacitor-community/advertising-id unavailable on web');
        }
        getAdvertisingId() {
            throw this.unavailable('@capacitor-community/advertising-id unavailable on web');
        }
        getAdvertisingStatus() {
            throw this.unavailable('@capacitor-community/advertising-id unavailable on web');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AdvertisingIdWeb: AdvertisingIdWeb
    });

    exports.AdvertisingId = AdvertisingId;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
