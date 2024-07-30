import clsx from "clsx"
import { NavLink } from 'react-router-dom'


export default function CustomNavLink({ children, to, className = "" }) {
    return (
        <NavLink to={to} className={clsx(className, window.location.pathname == to && "text-primary-foreground border-primary-foreground", "hover:cursor-pointer hover:text-primary-foreground")}> {children} </NavLink>
    )
}