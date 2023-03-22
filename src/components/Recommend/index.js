import React, { memo, useEffect, useRef } from 'react'
import Scroll from '@/base/Scroll'
import Loading from '@/base/Loading'
import useViewport from '@/hook/useViewport'

import './index.less'

const Recommend = ({ list }) => {
  console.log(list)
  const { width, height } = useViewport()
  const scrollRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef) {
        scrollRef.current.refresh()
      }
    }, 20)
  }, [width, height])

  return (
    <div className="recommend-con">
      <div className="recommend-wrapper">
        <h2 className="recommend-label">Recommend</h2>
        <Scroll data={list} ref={scrollRef}>
          <div className="recommend-list">
            {list.length > 0 &&
              list.map((item) => {
                return (
                  <div key={item.id.label} className="item-wrapper">
                    <div className="item-icon">
                      <img
                        className="icon-img"
                        src={item['im:image'][0].label}
                        alt=""
                      />
                    </div>
                    <div className="item-info">
                      <div className="item-name ellipsis-two">
                        {item['im:name'].label}
                      </div>
                      <div className="item-cate">{'游戏'}</div>
                    </div>
                  </div>
                )
              })}
          </div>
        </Scroll>
        <div className="loading-wrapper">
          {list.length > 0 ? null : <Loading />}
        </div>
      </div>
    </div>
  )
}

export default memo(Recommend)
