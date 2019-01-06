import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import HousingDefectDiagram from './HousingDefectDiagram';
import AmBarChart from './AmBarChart'
import VariableBar from './VariableBar';


class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        const displaySelection = this.props.displaySelection;
        return <div> 
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={displaySelection}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Housing_Defects'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Airquality_rate'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Tobaccoretail_rate'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Supermarketarea_rate'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Poverty'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Unemployment'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Rent_burden'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Preterm_Births'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Teen_Births'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Teen_Births'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Schoolabsent_rate'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Jailincarceration'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Assault_Hosps'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Self_rep_health'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Smoking'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Sugary_Drink'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Fruit_Veg'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Obesity'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Diabetes'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Alc_Hosp'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Drug_Hosp'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Insurance'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Didnt_Get_Care'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Late_No_Prenatal'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'HPV_vaccination'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Flu_Vaccination'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'HIV_Testing_Ever'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'HIV_Diagnosis'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Stroke_Hosp'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Psych_Hosp'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Asthma_5to14'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Avoidable_Asthma'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Avoidable_Diabetes'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'IMR'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Premature_Mort'}/>
            </Col>
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={'Life_expectancy_rate'}/>
            </Col>
            
           
            {/*<AmBarChart
                data={data}
            selected={selected}/>*/}
        </div>
    }
}
export default Diagrams;