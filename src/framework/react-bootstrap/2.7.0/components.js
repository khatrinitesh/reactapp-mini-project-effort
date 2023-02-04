import React,{useState,useEffect} from 'react';
import {Alert,Button,Accordion,Badge ,Breadcrumb  } from 'react-bootstrap';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function CustomCompnents() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return(
    <>
    {/* BUTTONS */}
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>

    <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>{' '}
      <Button href="#" variant="secondary" size="lg" disabled>
        Link
      </Button>
    <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
    <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
    <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
    <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    {/* BREACRUMB */}
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
     <Badge pill bg="primary">
        Primary
      </Badge>{' '}
      <Badge pill bg="secondary">
        Secondary
      </Badge>{' '}
      <Badge pill bg="success">
        Success
      </Badge>{' '}
      <Badge pill bg="danger">
        Danger
      </Badge>{' '}
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge pill bg="info">
        Info
      </Badge>{' '}
      <Badge pill bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge pill bg="dark">
        Dark
      </Badge>
    <Badge bg="primary">
        Primary
      </Badge>{' '}
      <Badge bg="secondary">
        Secondary
      </Badge>{' '}
      <Badge bg="success">
        Success
      </Badge>{' '}
      <Badge bg="danger">
        Danger
      </Badge>{' '}
      <Badge bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge bg="info">
        Info
      </Badge>{' '}
      <Badge bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge bg="dark">
        Dark
      </Badge>
    <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
     <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
     {/* <Accordion>
    <Card>
     <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       <div className="d-flex justify-content-between">
        <span>Ver horarios de apertura</span>
        <span>{this.props.isOpen}</span>
       </div>
      </Accordion.Toggle>
     </Card.Header>
     <Accordion.Collapse eventKey="0">
      <Card.Body>
       <ListGroup>
        {this.props.openingHours.map((oh, i) => (
         <ListGroup.Item key={i}>{oh}</ListGroup.Item>
        ))}
       </ListGroup>
      </Card.Body>
     </Accordion.Collapse>
    </Card>
   </Accordion> */}
    </>
  )
    // const [show, setShow] = React.useState(true);
    // if (show) {
    //     return (
    //       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    //         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //         <p>
    //           Change this and that and try again. Duis mollis, est non commodo
    //           luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //           Cras mattis consectetur purus sit amet fermentum.
    //         </p>
    //       </Alert>
    //     );
    //   }
    //   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   return (
//     <div>

//         {/* ALERTS */}
//         <Alert variant="success">
//             <Alert.Heading>Hey, nice to see you</Alert.Heading>
//             <p>
//                 Aww yeah, you successfully read this important alert message. This
//                 example text is going to run a bit longer so that you can see how
//                 spacing within an alert works with this kind of content.
//             </p>
//             <hr />
//             <p className="mb-0">
//                 Whenever you need to, be sure to use margin utilities to keep things
//                 nice and tidy.
//             </p>
//         </Alert>
        
//         {['primary','secondary','danger','warning','default','light'].map((val) => {
//             return(
//                 <Alert variant={val}>This is {val} alert-check it out</Alert>
//             )
//         })}
//     </div>
//   )
}
