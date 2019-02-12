import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#" active>{this.props.booking}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.airlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.about}</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}