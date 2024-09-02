import React, { useEffect, useState } from 'react';
import Home from '../RN_BaiTap01/src/Home/Home';  
import Introduce from '../RN_BaiTap01/src/Introduce/Introduce';   


const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 10 * 1000);

    // Xóa timer khi component bị unmount
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isShowSplash ? <Introduce /> : <Home />}
    </>
  );
};

export default App;
