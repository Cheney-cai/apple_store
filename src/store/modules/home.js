import { getHomeRecommendListData, getHomeAppListData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    getHomeRecommendListData().then((res) => {
      dispatch(changeRecommendListAction(res.feed.entry))
    })
    getHomeAppListData().then((res) => {
      console.log(res)
      dispatch(changeAppListAction(res.feed.entry))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  //初始化数据
  initialState: {
    recommendList: [],
    appList: [],
  },
  reducers: {
    changeRecommendListAction(state, { payload }) {
      console.log('payload', payload)
      state.recommendList = payload
    },
    changeAppListAction(state, { payload }) {
      state.appList = payload
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload
    // }
  },
})

export const { changeRecommendListAction, changeAppListAction } =
  homeSlice.actions

export default homeSlice.reducer
