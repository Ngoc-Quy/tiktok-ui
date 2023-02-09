import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Không cần đăng nhập có thể xem
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  { path: config.routes.search, component: Search, layout: null },
];

// Đăng nhập mới vào xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
