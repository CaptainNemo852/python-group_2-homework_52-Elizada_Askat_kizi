import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card color= "success">
                <CardBody>
                    <CardTitle className='text-white'>{props.Title}</CardTitle>
                </CardBody>
                <img src={props.image} height="200px" width= "350px"/>
                <CardBody>
                    <CardText className="text-white">
                        {props.date}
                    </CardText>
                    <CardText className="text-white">
                        {props.price}
                    </CardText>
                    <CardLink href="#" className="text-black-50">{props.buy}</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;