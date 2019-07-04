import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname';

export interface ILinkProps extends IClassNameProps {
    enlace: string,
    children: string,
    className: string,
}

export const cnLink = cn('Header_link--hola');