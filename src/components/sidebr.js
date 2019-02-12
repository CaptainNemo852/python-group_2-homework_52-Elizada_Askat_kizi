import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#">{this.props.kyrgyz}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.turkish}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.spanish}</NavLink>
                    </NavItem>
                </Nav>
                <hr/>
            </div>
        );
    }
}