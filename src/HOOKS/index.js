import React, { useState, useEffect, useCallback} from "react";
import { log } from "util";
import Child from "./child";

// useState thay thế cho cái constructor lưu chữ biến
export default function HOOK() {
  const [count, setCount] = useState(0);
  const [isAgree, setIsAgree] = useState(false);
  // nếu có nhìu state
  // const [student , setStudent] = useState({})
  // trả về cho mình 1 cái mảng giá trị mặc định
  // hàm lồng hàm
  const increaseCount = () => {
   if (isAgree) {
    setCount(count + 1);
   }
  };
   // nhận vào 1 cái hàm công dụng trả về 1 cái bản sao
   const increase = useCallback(()=> increaseCount, []);
    // trả về 1 bản sao thì thêm vào []
    // hàm này sẽ ko thay đổi 
     
  const agreeToChangeCount = () => {
      setIsAgree(true)
  }

  useEffect(() => {
    log("useEffect - run one time!");
    // chính là componentdidmout
  }, []);
  // useEffect đại diện cho 3 lifecycle didmout : dc khởi tạo
  // , didupdate :dc cập nhật
  // , willmout dc bị huỷ
  useEffect(() => {
    log("useEffect - run!");
    //
  });
 
  // quan sat isagree
  useEffect(() => {
    log("useEffect just run when isAgree change!");
    //
  }, [isAgree]);
 
  return (
    <div>
      <h1>demo hook</h1>
      <button className="btn btn-success" onClick={increaseCount}>
        Increase
      </button>
      <button className="btn btn-success" onClick={agreeToChangeCount}>
       Agree Change Count
      </button>
      <h1 className="display-4">Count: {count}</h1>
      <Child count={count} increaseCount={increase} />
    </div>
  );
}
