import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        placement="bottom"
        delay={[800, 0]}
        offset={[-20, 0]}
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/36ed7201179e25307dce8a8df2770f7b~c5_100x100.jpeg?x-expires=1676167200&x-signature=yt9lW6Jme8i5vl17hOX70J0TetM%3D"
            alt="avatar"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>Nguyenvana</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyen van a</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
