import React, { memo, useState } from 'react'
// import LazyLoad from 'react-lazy-load'
import './index.less'

const ListItem = ({ item, index }) => {
  return (
    <div className="free-item">
      <div className="free-item-num">{index}</div>
      <div className="free-item-info-wrapper">
        <div className="free-item-info">
          <div className="item-img-wrapper">
            {/* <LazyLoad offsetVertical={1000}> */}
            <img
              className={`item-img ${!!(index % 2) ? '' : 'circle'}`}
              src={item['im:image'][0].label}
              alt={item['im:name']}
            />
            {/* </LazyLoad> */}
          </div>
          <div className="item-info">
            <div className="item-name ellipsis-two">
              {item['im:name'].label}
            </div>
            <div className="item-cate">{item.category.attributes.label}</div>
            <div className="ratings-wrapper">
              {
                <div>
                  <span className="rating-count">{'⭐️⭐️⭐️⭐️⭐️'}</span>
                  <span className="rating-count">
                    ({item.category.attributes['im:id']})
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ListItem)
