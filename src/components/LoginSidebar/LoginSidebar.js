import classNames from 'classnames/bind';
import styles from './LoginSidebar.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function LoginSidebar() {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>
        Đăng nhập để follow các tác giả, thích video và xem bình luận.
      </p>
      <Button className={cx('login-btn')} outline>
        Đăng nhập
      </Button>
    </div>
  );
}

export default LoginSidebar;
