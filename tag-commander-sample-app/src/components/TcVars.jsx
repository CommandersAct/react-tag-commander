import { useEffect } from 'react';
import TC_Wrapper from 'react-tag-commander';

function TcVars(props) {

    useEffect(() => {
        const wrapper = TC_Wrapper.getInstance();
        wrapper.setTcVars(props);
    }, [props]);
}

export default TcVars;
