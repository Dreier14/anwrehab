import React from 'react';
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';


const DashboardCard = ({ body, header, footer }) => (
    <Card>
        <CardHeader>{header}</CardHeader>
        <CardBody>{body}</CardBody>
        <CardFooter>{footer}</CardFooter>
    </Card>
);

export default DashboardCard;