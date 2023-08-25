import { useEffect } from 'react';
import TC_Wrapper from 'react-tag-commander';

function TcVars(props) {
    const wrapper = TC_Wrapper.getInstance();

    useEffect(() => {
        wrapper.setTcVars(props);
    }, [props, wrapper]); // Depend on props and wrapper, although in most cases `wrapper` might not change.
}

export default TcVars;
