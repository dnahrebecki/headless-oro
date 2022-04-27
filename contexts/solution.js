import * as React from 'react';

const SolutionContext = React.createContext();
SolutionContext.displayName = 'SolutionSwitcher';

function SolutionSwitcher({children}) {
    const [finalOn, setOn] = React.useState(false);
    const toggle = (newState) => {
        setOn(newState)
        console.debug(`Solution: ${newState}`);
    }

    return (
        <SolutionContext.Provider value={{finalOn,toggle}}>{children}</SolutionContext.Provider>
    )
}

function useSolution() {
    return React.useContext(SolutionContext);
}

export {useSolution, SolutionSwitcher}
