import React from 'react';
import {Alert,Button} from 'react-bootstrap';

export default function CustomCompnents() {
    const [show, setShow] = React.useState(true);
    if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShow(true)}>Show Alert</Button>;
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
