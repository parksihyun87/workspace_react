import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { searchhazardNum, reportHazardNum, addHazardNum } from './blackListSlice';

export default function BlackList() {
  const hazardNum = useSelector(state => state.BlackList.hazardNum);
  const searchResult = useSelector(state => state.BlackList.searchResult);
  const [inputNumber, setInputNumber] = useState('');
  const [newHazardNum, setNewHazardNum] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(searchhazardNum(inputNumber));
    } catch (error) {
      console.error("Error searching hazard number:", error);
      alert("검색 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleReport = async () => {
    try {
      await dispatch(reportHazardNum(inputNumber));
      alert("신고가 완료되었습니다.");
    } catch (error) {
      console.error("Error reporting hazard number:", error);
      alert("신고 중 오류가 발생했습니다.");
    }
  };

  const handleAddHazardNum = () => {
    const isValidNumber = /^[0-9]{11}$/.test(newHazardNum);
    if (!isValidNumber) {
      alert("유해번호는 11자리 숫자여야 합니다.");
      return;
    }
    if (newHazardNum) {
      dispatch(addHazardNum(newHazardNum));
      setNewHazardNum('');
    }
  };

  return (
    <div className="wrap">
      <header>
        <ol>여러가지</ol>
      </header>
      <nav className="h3-title">
        <h3 className="h3">유해번호</h3>
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="findNumber">유해번호 입력:</label>
          <input 
            id="findNumber"
            type="text" 
            name="findNumber" 
            value={inputNumber} 
            onChange={(e) => setInputNumber(e.target.value)} 
            required 
          />
          <button type="submit" disabled={loading}>
            {loading ? '검색 중...' : '검색'}
          </button> 
        </form>
        <div>
          {searchResult ? (
            <div>
              <p>{searchResult}는 유해번호 목록에 있습니다.</p>
              <button onClick={handleReport}>신고하기</button>
            </div>
          ) : (
            inputNumber && (
              <p>{inputNumber}는 신고된 적이 없습니다.</p>
            )
          )}
        </div>
        <div>
          <label htmlFor="newHazardNum">신고번호 추가:</label>
          <input 
            id="newHazardNum"
            type="text" 
            value={newHazardNum} 
            onChange={(e) => setNewHazardNum(e.target.value)} 
          />
          <button onClick={handleAddHazardNum}>추가</button>
        </div>
        <div>
          <ol>
            {hazardNum.map((hazard, index) => (
              <li key={index}>
                {hazard.num} - 신고 횟수: {hazard.reportCount}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <ol>5계명</ol>
        </div>
      </main>
      <footer>프로잭트</footer>
    </div>
  );
}
