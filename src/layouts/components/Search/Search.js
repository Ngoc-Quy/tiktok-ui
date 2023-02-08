import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/Services/searchService';
// import * as request from '~/utils/request';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  // Hàm thực hiện để thực hiện giá trị tìm kiếm
  const [searchValue, setSearchValue] = useState('');
  // Hàm thực hiện để hiện kết quả tìm kiếm
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  // Hàm thực hiện để lấy ref của thẻ input thực hiện logic
  const inputRef = useRef();

  // Hàm để lấy fake API tìm kiếm
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
    // TH3: gọi API bằng async, await

    // setLoading(true);
    // const fetchApi = async () => {
    //   try {
    //     const res = await request.get('users/search', {
    //       params: {
    //         q: debounce,
    //         type: 'less',
    //       },
    //     });
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //   }
    // };
    // fetchApi();

    // TH 1: sử dụng axios gọi API như cơ bản
    // axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`)

    // TH 2: sử dụng request gọi API, tạo components request
    // {request
    //   .get('users/search', {
    //     params: {
    //       q: debounce,
    //       type: 'less',
    //     },
    //   })
    //   .then((res) => {
    //     // TH1: dùng axios
    //     // setSearchResult(res.data.data);
    //     // TH2: custom res.data.data thành res.data
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });}
  }, [debounce]);

  // Hàm xử lý để xoá kết quả tìm kiếm khi ấn vào nút xoá
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  // Hàm xử lý để ẩn kết quả tìm kiếm khi blor ra ngoài
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    // Dùng thẻ <div> để fix lỗi warning của thư viện Tippy
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => {
                return <AccountItem key={result.id} data={result} />;
              })}
            </PopperWrapper>
          </div>
        )}
        // Thuộc tính của Tippy để khi blur ra ngoài
        // Thực hiện hàm ẩn kết quả tìm kiếm
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            className={cx('search-input')}
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            // Khi có giá trị thì hiện nút xoá,
            // Khi bấm vào nút xoá thì xoá tìm kiếm đi
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
