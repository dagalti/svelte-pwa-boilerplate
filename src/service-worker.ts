import { precacheAndRoute } from "workbox-precaching";

// Precaching app shell
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);
