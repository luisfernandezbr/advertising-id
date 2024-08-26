import { registerPlugin } from '@capacitor/core';
const AdvertisingId = registerPlugin('AdvertisingId', {
    web: () => import('./web').then((m) => new m.AdvertisingIdWeb()),
});
export * from './definitions';
export { AdvertisingId };
//# sourceMappingURL=index.js.map