import { Admin } from './pages/Admin.js';
import { Basket } from './pages/Basket.js';
import { Auth } from './pages/Auth.js';
import { Shop } from './pages/Shop.js';
import { DevicePage } from './pages/DevicePage.js';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
} from './utils/const';
export const authRoutes = [
  { path: ADMIN_ROUTE, element: <Admin /> },
  { path: BASKET_ROUTE, element: <Basket /> },
];
export const publicRoutes = [
  { path: LOGIN_ROUTE, element: <Auth /> },
  { path: REGISTRATION_ROUTE, element: <Auth /> },
  { path: SHOP_ROUTE, element: <Shop /> },
  { path: DEVICE_ROUTE + '/:id', element: <DevicePage /> },
];
