import React,{useRef} from 'react';
import {Col,Row,Form,Stack,Button} from 'react-bootstrap';
import CreatableReactSelect from 'react-select/creatable';
import {Link} from 'react-router-dom';

export default function NoteForm() {


    const titleRef = useRef(null)
    const markdownRef = useRef(null)

    // function handleSubmit(e){
    //     e.preventDefault();
    // }
  return (
    <div>
      <Form>
       <Stack gap={4}>
        <Row>
         <Col>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} required/>
          </Form.Group>
         </Col>
         <Col>
          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti/>
          </Form.Group>
         </Col>
        </Row>
        <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control ref={markdownRef} required as="textarea" rows={15}/>
          </Form.Group>
          <Stack direction='horizontal' gap={2} className="justify-content-between">
           <Button type="submit" variant="primary">Save</Button>
           <Link to="/">
            <Button type="submit" variant="outline-secondary">Cancel</Button>
           </Link>
          </Stack>
       </Stack>
      </Form>
    </div>
  )
}
