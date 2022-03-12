import { NavLink, NavLinkProps } from "react-router-dom";

export const InternalLink = ({ to, ...rest }: NavLinkProps) => (
  <NavLink to={to} {...rest} />
);
