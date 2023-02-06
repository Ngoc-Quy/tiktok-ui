// Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Không cần đăng nhập có thể xem
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/:nickname', component: Profile },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  { path: '/Search', component: Search, layout: null },
];

// Đăng nhập mới vào xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
