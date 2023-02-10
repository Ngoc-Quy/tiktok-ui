import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/36ed7201179e25307dce8a8df2770f7b~c5_100x100.jpeg?x-expires=1676167200&x-signature=yt9lW6Jme8i5vl17hOX70J0TetM%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Nguyenvana</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyen van a</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Thích</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
