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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      query:'',
      results:'',
      loading:false,
      message:''
    }
  }

    handleOnInputChange = (event) => {
      const query = event.target.value;

      if(!query){
        console.log('change');
        //axios get all
        let mock = [
          {id:"24234", img_url:"https://avatars0.githubusercontent.com/u/810438?v=4", name:"Dan Abramov", industry:"IT", email:"dan_abramov@gmail.com", phone:"021234568" },
          {id:"53435", img_url:"https://avatars2.githubusercontent.com/u/6820?v=4",  name:"Sophie Alpert", industry:"IT", email:"sophie@gmail.com", phone:"0823857839" },
          {id:"02348", img_url:"https://avatars2.githubusercontent.com/u/63648?v=4", name:"Sebastian Markage", industry:"IT", email:"Sebastian_markage@gmail.com", phone:"0832462833" }
        ];
        this.props.onChange(mock);
      }else{
        //const search url = 'https://q={query}'
        // axios get res
        //this.prop.onChange(res);
        let mock = [{id:"2222", img_url:"https://avatars0.githubusercontent.com/u/810438?v=4", name:"Dan Abramov", industry:"IT", email:"dan_abramov@gmail.com", phone:"021234567" }]
        this.props.onChange(mock);
      };
    }

  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-search">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Search"
          aria-describedby="inputGroup-search"
          onChange={this.handleOnInputChange}
        />
        </InputGroup>
    );
  }
};

class AddPartner extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this)
    this.handleClsoe = this.handleClose.bind(this)

    this.state = { show_modal:'false', name : '', industry : '', email : '', phone_number : '', img_url:''}
  }


  handleShow = () => {
    this.setState({show:true})
  }

  handleClose = () => {
    this.setState({show:false})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //POST Method return res
    //const res = await axios.post(''); 
    //this.props.onSubmit(res.data);
   const mock = {id:"2222", img_url:"https://avatars0.githubusercontent.com/u/810438?v=4", name:"Dan Abramov", industry:"IT", email:"dan_abramov@gmail.com", phone:"021234567" }
    this.setState({show:false})
    this.props.onSubmit(mock);
  };
  render() {
      return (
        <div>
          <Button variant="primary" onClick={this.handleShow}>
            +Add Partner
          </Button>
          {/* Start Modal*/}
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add partner</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={this.state.name} onChange={event => this.setState({name:event.target.value})} type="text" placeholder="Please Enter a fullname" required/>
                  <Form.Text className="text-muted">
                    Please enter full name.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="industry">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control value={this.state.industry} onChange={event => this.setState({industry:event.target.value})} type="text" placeholder="Please enter an industry" required/>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={this.state.email} onChange={event => this.setState({email:event.target.value})}  type="email" placeholder="Please enter an email" required/>
                  <Form.Text className="text-muted">
                    we'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="phone_number">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control value={this.state.phone_number} onChange={event => this.setState({phone_number:event.target.value})} type="text" placeholder="Please enter a phone number" required/>
                </Form.Group>
                <Form.Group controlId="img_url">
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control value={this.state.img_url} onChange={event => this.setState({img_url:event.target.value})} type="text" placeholder="Please enter an image url" required/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleSubmit}>
                Add Partner
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End Modal*/}
        </div>
      );
    }
}

class PartnerNavbar extends React.Component {

  extendHandleSubmit = (profileData) => {
    this.props.onSubmit(profileData)
  }

  render() {

    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Partner List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <AddPartner onSubmit={this.extendHandleSubmit}/>

        </Navbar.Collapse>
        </Navbar>
    );
  }
}

class DataTable extends React.Component {
  render() {
    const profile = this.props;

    return (
        <tbody>
          <tr>
            <td className="text-center" key={profile.img_url}><Image src={profile.img_url} style={{width:50}} roundedCircle/></td>
            <td className="text-center" key={profile.name}>{profile.name}</td>
            <td className="text-center" key={profile.industry}>{profile.industry}</td>
            <td className="text-center" key={profile.email}>{profile.email}</td>
            <td className="text-center" key={profile.phone}>{profile.phone}</td>
          </tr>
        </tbody>
    );
  }
}

const PartnerTable = (props) => (
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
        {props.profiles.map(profile => <DataTable key={profile.id} {...profile}/>)}
      </Table>
);

class App extends React.Component {

  state = { profiles:[
  {id:"24234", img_url:"https://avatars0.githubusercontent.com/u/810438?v=4", name:"Dan Abramov", industry:"IT", email:"dan_abramov@gmail.com", phone:"021234568" },
  {id:"53435", img_url:"https://avatars2.githubusercontent.com/u/6820?v=4",  name:"Sophie Alpert", industry:"IT", email:"sophie@gmail.com", phone:"0823857839" },
  {id:"02348", img_url:"https://avatars2.githubusercontent.com/u/63648?v=4", name:"Sebastian Markage", industry:"IT", email:"Sebastian_markage@gmail.com", phone:"0832462833" }
  ]};

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }

  search = (res) => {
    this.setState({profiles:res})
    console.log(this.state.profiles);
  }

  render() {
    return (
      <div>
        <PartnerNavbar onSubmit={this.addNewProfile} />
        <Container>
          <Row style={{marginTop:60}}>
            <Col>
              <Row>
                <Col>
                  <h3>Partners</h3>
                </Col>
                <Col>
                  <Search onChange={this.search}/>
                </Col>
              </Row>
              <PartnerTable profiles={this.state.profiles}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
