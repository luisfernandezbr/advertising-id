import { WebPlugin } from '@capacitor/core';
export class AdvertisingIdWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map