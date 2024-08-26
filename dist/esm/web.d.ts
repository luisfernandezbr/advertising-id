import { WebPlugin } from '@capacitor/core';
import type { AdvertisingIdPlugin, AdvertisingStatus } from './definitions';
export declare class AdvertisingIdWeb extends WebPlugin implements AdvertisingIdPlugin {
    requestTracking(): Promise<{
        value: AdvertisingStatus;
    }>;
    getAdvertisingId(): Promise<{
        id: string;
        status: AdvertisingStatus;
    }>;
    getAdvertisingStatus(): Promise<{
        status: AdvertisingStatus;
    }>;
}
