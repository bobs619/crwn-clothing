import React from 'react';


import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';


const WithSpinner = WrappedComponent => {
  
  const Spinner = ({isLoading, ...otherProps}) => {

    //console.log(isLoading);

    return isLoading ? (

      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : <WrappedComponent {...otherProps} />
    
  }

  return Spinner;
}

    

export default WithSpinner;