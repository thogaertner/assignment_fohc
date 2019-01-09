import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import VariableAmBarChart from './VariableAmBarChart';
import VariableBar from './VariableBar';

class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        const displaySelection = this.props.displaySelection;
        return <div>
            <Col xs={12} sm={12} md={12}>
                <VariableAmBarChart
                    data={data}
                    selected={selected}
                    displaySelection={displaySelection}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Housing_Defects'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Airquality_rate'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Tobaccoretail_rate'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Supermarketarea_rate'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Poverty'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Unemployment'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Rent_burden'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Preterm_Births'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Teen_Births'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Teen_Births'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Schoolabsent_rate'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Jailincarceration'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Assault_Hosps'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Self_rep_health'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Smoking'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Sugary_Drink'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Fruit_Veg'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Obesity'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Diabetes'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Alc_Hosp'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Drug_Hosp'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Insurance'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Didnt_Get_Care'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Late_No_Prenatal'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'HPV_vaccination'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Flu_Vaccination'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'HIV_Testing_Ever'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'HIV_Diagnosis'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Stroke_Hosp'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Psych_Hosp'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Asthma_5to14'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Avoidable_Asthma'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Avoidable_Diabetes'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'IMR'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Premature_Mort'}/>
            </Col>
            <Col sm={6} md={4}>
                <VariableBar
                    data={data}
                    selected={selected}
                    displaySelection={'Life_expectancy_rate'}/>
            </Col>
        </div>
    }
}
export default Diagrams;