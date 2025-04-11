import { createSlice } from '@reduxjs/toolkit';

export const blackListSlice = createSlice({
  name: 'BlackList',
  initialState: {
    hazardNum: [
      { num: '01012345678', fishingCount: 0, spamCount: 0, reportCount: 0 },
      { num: '01098765432', fishingCount: 0, spamCount: 0, reportCount: 0 },
      { num: '01011111111', fishingCount: 0, spamCount: 0, reportCount: 0 },
      { num: '01022222222', fishingCount: 0, spamCount: 0, reportCount: 0 },
      { num: '01033333333', fishingCount: 0, spamCount: 0, reportCount: 0 },
    ],
    searchResult: null,
  },
  reducers: {
    searchhazardNum: (state, action) => {
      const inputNum = action.payload;
      const foundNum = state.hazardNum.find(hazard => hazard.num === inputNum);
      state.searchResult = foundNum ? foundNum.num : "유해번호 목록에 없습니다.";
    },
    reportHazardNum: (state, action) => {
      const inputNum = action.payload;
      const foundNum = state.hazardNum.find(hazard => hazard.num === inputNum);
      if (foundNum) {
        foundNum.reportCount += 1; 
      }
    },
    addHazardNum: (state, action) => {
      const newNum = action.payload;
      const exists = state.hazardNum.some(hazard => hazard.num === newNum);
      if (!exists) {
        state.hazardNum.push({ num: newNum, fishingCount: 0, spamCount: 0, reportCount: 0 });
      } else {
        alert("이 유해번호는 이미 목록에 있습니다.");
      }
    },
  },
});

export const { searchhazardNum, reportHazardNum, addHazardNum } = blackListSlice.actions;

export const selectHazardNum = (state) => state.BlackList.hazardNum;
export const selectSearchResult = (state) => state.BlackList.searchResult;

export default blackListSlice.reducer;





