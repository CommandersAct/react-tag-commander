import { useEffect } from 'react';
import TagCommander from 'react-tag-commander';

const wrapper = TagCommander.getInstance();

export function TcVars(props) {
    useEffect(() => {
        wrapper.setTcVars(props);
    }, [props]);

    return null;
}