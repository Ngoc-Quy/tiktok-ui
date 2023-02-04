import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faInbox,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faMoon,
  faPlus,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'language',
      data: [
        {
          type: 'languge',
          code: 'en',
          title: 'English',
        },
        {
          type: 'languge',
          code: 'vi',
          title: 'Tiếng việt (Việt Nam)',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feeback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt bàn phím',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Xử lý logic khi thay đổi ngôn ngữ
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Thông tin cá nhân',
      to: '/@thea',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div
              className={cx('search-result')}
              tabIndex="-1"
              {...attrs}
            >
              <PopperWrapper>
                <h4 className={cx('search-title')}>
                  Accounts
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Tìm kiếm tài khoản và Video"
              spellCheck={false}
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon
              className={cx('loading')}
              icon={faSpinner}
            />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          {currentUser ? (
            // Xử lý logic khi đăng nhập ẩn button hiện icon
            <>
              <Tippy
                delay={[0, 200]}
                content="Tải lên video"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy
                delay={[0, 200]}
                content="Tín nhắn"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
              <Tippy
                delay={[0, 200]}
                content="Hộp thư đến"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faInbox} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                text
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
              <Tippy
                content="Tạo hiệu ứng"
                placement="bottom"
              >
                <a
                  className={cx('upload-icon')}
                  href="https://www.tiktok.com/foryou"
                >
                  <img src={images.upload} alt="upload" />
                </a>
              </Tippy>
            </>
          )}
          <Menu
            // Xử lý logic hiện menu đăng nhập và chưa đăng nhập
            items={currentUser ? userMenu : MENU_ITEMS}
            conChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675695600&x-signature=LVWHdmG8%2FD1ouTBCuWfIYBi5GCA%3D"
                className={cx('user-avatar')}
                alt="Nguyen van A"
              />
            ) : (
              <button className={cx('login-icon')}>
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;