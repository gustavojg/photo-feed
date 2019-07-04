import { ILinkProps, cnLink } from './index';
import React from 'react';

const Link: React.FC<ILinkProps> = ({enlace, children, className}) => {
    return <a href={enlace}
    className={cnLink({}, [className])}
    >{children}</a>;
}

export default Link;