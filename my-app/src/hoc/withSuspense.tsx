import React, { Suspense } from 'react';

function withSuspense <WCP>(Component: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    )
  };
}

export default withSuspense;