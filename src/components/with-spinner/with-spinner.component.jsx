import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = WarppedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WarppedComponent {...otherProps} />
            )
    }
    return Spinner
}

export default WithSpinner