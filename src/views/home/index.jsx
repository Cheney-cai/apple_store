import React, { memo } from 'react'
import {useEffect,useRef,useState} from'react'
import {useDispatch,useSelector,shallowEqual } from 'react-redux'
import Search from '@/components/Search'
import Recommend from '@/components/Recommend'
import Scroll from '@/base/Scroll'
import Loading from '@/base/Loading'
import myRequest from '@/services'
import ListItem from '@/components/ListItem'
import _ from 'lodash'


import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
    const [value, setValue] = useState('')

    /** 从redux中获取数据 */
    const { recommendList,appList,page, maxPage, searchStatus} = useSelector((state) => ({
      recommendList: state.home.recommendList,
      appList:state.home.appList,
      page: state.home.page,
      maxPage: state.home.maxPage,
      searchStatus: state.home.searchStatus,
    }), shallowEqual)

    // 派发异步事件,发送网络请求
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchHomeDataAction())
    },[dispatch])

    const scrollRef = useRef()
    const [pullUpEnd, setPullEnd] = useState(false)

    const loadMore = () => {
      // dispatch(getFreeList())
      // if (page === maxPage) {
      //   setPullEnd(true)
      // }
    }

    const handleChange = (value) => {
      const handleSearch = _.throttle(() => {
        setValue(value)
        // dispatch(searchApp(value))
      }, 150)
      handleSearch()
    }

  return (
    <div>
      <div className='list-content'>
      <Search value={value} onChange={handleChange} />
      { isEmptyO(recommendList) && <Recommend list={recommendList} />}
      <div className="free-scroll-wrapper">
          <Scroll
            data={appList}
            ref={scrollRef}
            direction="vertical"
            pullUpLoad={true}
            pullingUp={loadMore}
            pullUpEnd={pullUpEnd}
          >
            <div className="free-list">
              { isEmptyO(appList)  &&
                appList.map((item, index) => (
                  <ListItem
                    key={item.id}
                    item={item}
                    index={index + 1}
                    loadMore={loadMore}
                  />
                ))}
            </div>
          </Scroll>
          {/* <div className="loading-wrapper">
            {!searchStatus ? showLoading() : null}
          </div>
          <div className="empty-search-result">
            {searchStatus && freeList.length === 0 ? (
              <div className="empty-text">沒有找到對應的 App</div>
            ) : null}
          </div> */}
        </div>
      </div>
    </div>
  )
})

export default Home