import React, { useState } from 'react';
import { Form, Card, Button,Container,Row,Col } from "react-bootstrap";
import validator from "validator";

export default function MultipleStepForm() {
    //state for steps
    const [step, setstep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const {value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }


    // javascript switch case to show different form in each step
    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
        return (
            <div className="App">
            <Container>
                <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                    <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </Col>
                </Row>
            </Container>
            </div>
        );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
        return (
            <div className="App">
            <Container>
                <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                    <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
                </Row>
            </Container>
            </div>
        );
        // Only formData is passed as prop to show the final value at form submit
        case 3:
        return (
            <div className="App">
            <Container>
                <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                    <Final values={formData}  />
                </Col>
                </Row>
            </Container>
            </div>
        );
        // default case to show nothing
        default:
        return (
            <div className="App">
            </div>
        );
    }
}

const Final = ({ values }) => {
    //destructuring the object from values
  const { firstName, lastName, age, email } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

// step one
const StepOne = ({ nextStep, handleFormData, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
  
    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
  
      // checking if value of first name and last name is empty show error else take to step 2
      if (
        validator.isEmpty(values.firstName) ||
        validator.isEmpty(values.lastName)
      ) {
        setError(true);
      } else {
        nextStep();
      }
    };
  
    return (
      <div>
        <Card style={{ marginTop: 100 }}>
          <Card.Body>
            <Form onSubmit={submitFormData}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="firstName"
                  defaultValue={values.firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={handleFormData("firstName")}
                />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="lastName"
                  defaultValue={values.lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={handleFormData("lastName")}
                />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  };

  
  // step two
  // creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
   const [error, setError] = useState(false);
 
     // after form submit validating the form data using validator
   const submitFormData = (e) => {
     e.preventDefault();
 
      // checking if value of first name and last name is empty show error else take to next step
     if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
       setError(true);
     } else {
       nextStep();
     }
   };
   return (
     <>
       <Card style={{ marginTop: 100 }}>
         <Card.Body>
           <Form onSubmit={submitFormData}>
             <Form.Group className="mb-3">
               <Form.Label>Age</Form.Label>
               <Form.Control
                 style={{ border: error ? "2px solid red" : "" }}
                 type="number"
                 placeholder="Age"
                 onChange={handleFormData("age")}
               />
               {error ? (
                 <Form.Text style={{ color: "red" }}>
                   This is a required field
                 </Form.Text>
               ) : (
                 ""
               )}
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Email</Form.Label>
               <Form.Control
                 style={{ border: error ? "2px solid red" : "" }}
                 type="email"
                 placeholder="email"
                 onChange={handleFormData("email")}
               />
               {error ? (
                 <Form.Text style={{ color: "red" }}>
                   This is a required field
                 </Form.Text>
               ) : (
                 ""
               )}
             </Form.Group>
             <div style={{ display: "flex", justifyContent: "space-around" }}>
               <Button variant="primary" onClick={prevStep}>
                 Previous
               </Button>
 
               <Button variant="primary" type="submit">
                 Submit
               </Button>
             </div>
           </Form>
         </Card.Body>
       </Card>
     </>
   );
 };

