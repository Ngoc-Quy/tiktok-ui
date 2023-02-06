import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  // Hàm thực hiện để thực hiên giá trị tìm kiếm
  const [searchValue, setSearchValue] = useState('');
  // Hàm thực hiện để hiện kết quả tìm kiếm
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  // Hàm thực hiện để lấy ref của thẻ input thực hiện logic
  const inputRef = useRef();

  // Hàm để lấy fake API tìm kiếm
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);

  // Hàm xử lý để xoá kết quả tìm kiếm khi ấn vào nút xoá
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  // Hàm xử lý để ẩn kết quả tìm kiếm khi blor ra ngoài
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      // Thuộc tính của Tippy để khi blur ra ngoài
      // Thực hiện hàm ẩn kết quả tìm kiếm
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và Video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            setShowResult(true);
          }}
        />
        {!!searchValue && (
          // Khi có giá trị thì hiện nút xoá,
          // Khi bấm vào nút xoá thì xoá tìm kiếm đi
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
