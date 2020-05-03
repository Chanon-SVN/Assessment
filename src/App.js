import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


const testData = [
  {img_url:"https://avatars0.githubusercontent.com/u/810438?v=4", name:"Dan Abramov", industry:"IT", email:"dan_abramov@gmail.com", phone:"021234567" },
  {img_url:"https://avatars2.githubusercontent.com/u/6820?v=4",  name:"Sophie Alpert", industry:"IT", email:"sophie@gmail.com", phone:"0823857839" },
  {img_url:"https://avatars2.githubusercontent.com/u/63648?v=4", name:"Sebastian Markage", industry:"IT", email:"Sebastian_markage@gmail.com", phone:"0832462833" }
]

class Search extends React.Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-search">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Search"
          aria-describedby="inputGroup-search"
        />
        </InputGroup>
    );
  }
};

class DataTable extends React.Component {
  render() {
    const profile = this.props;

    return (
        <tbody>
          <tr>
            <td className="text-center"><Image src={profile.img_url} style={{width:50}} roundedCircle/></td>
            <td className="text-center">{profile.name}</td>
            <td className="text-center">{profile.industry}</td>
            <td className="text-center">{profile.email}</td>
            <td className="text-center">{profile.phone}</td>
          </tr>
        </tbody>
    );
  }
}

class PartnerTable extends React.Component {
  render() {

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Img</th>
            <th className="text-center">Name</th>
            <th className="text-center">Industry</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone Number</th>
          </tr>
        </thead>
        {testData.map(profile => <DataTable{...profile}/>)}
      </Table>
    );
  }
}


function App() {
  return (
    <Container>
      <Row style={{marginTop:60}}>
        <Col>
          <Row>
          <Col>
            <h3>Partners</h3>
          </Col>
          <Col>
            <Search />
          </Col>
          </Row>
          <PartnerTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
