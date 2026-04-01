import { z } from "zod";

export const scanWifiSchema = z.object({
});

export const wifi_scan_started = z.object({
    timestamp: z.number(),
});