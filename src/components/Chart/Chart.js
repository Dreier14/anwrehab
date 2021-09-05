import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import defineBarChart from './defineBarChart';
// import definePieChart from './definePieChart';
import defineChart from './defineChart';
import rd3 from 'react-d3-library';
import './Chart.css';
// import * as d3 from 'd3';
import 'bootstrap';
import { svg } from 'd3';
const BarChart = rd3.BarChart;
const PieChart = rd3.PieChart;


class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            typeOfChart: props.typeOfChart,
            chart: ''
        };
    }

    componentDidMount() {
        const { type, dataSet, height, width } = this.props;    
        const chart = defineChart({ type, dataSet, height, width });
        this.setState({ chart });
    }

    render() {
        const { key, type, title } = this.props;
        const { chart } = this.state;
        window.scrollTo(0, 0);
        return (
            <Col key={key}>
                <Card>
                    <CardBody>
                        <Card>{title}</Card>
                        {type === 'pie' ? <PieChart data={chart} /> : <BarChart data={chart} />}
                    </CardBody>
                </Card>
            </Col>
        );   
    }
}

export default Chart;