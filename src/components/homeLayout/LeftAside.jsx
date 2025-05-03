import React, { Suspense } from 'react';
import AllCategory from './AllCategory';

const LeftAside = () => {
    return (
        <div>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AllCategory></AllCategory>
          </Suspense>
        </div>
    );
};

export default LeftAside;