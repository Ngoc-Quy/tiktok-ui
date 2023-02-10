import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import LoginSidebar from '~/components/LoginSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Đang following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <LoginSidebar />
      <SuggestedAccounts label="Tài khoản được để xuất" />
      <SuggestedAccounts label="Đang theo dõi" />
    </aside>
  );
}

export default Sidebar;
