import React from 'react';
import {Stack,Container,Row,Col,Button,Form} from 'react-bootstrap';

export default function CustomStack() {
  return (
    <div>
        <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Add your item here..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
        </Stack>
        <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="secondary">Save changes</Button>
            <Button variant="outline-secondary">Cancel</Button>
        </Stack>
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border ms-auto">Second item</div>
            <div className="vr" />
            <div c lassName="bg-light border">Third item</div>
        </Stack>
         <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border ms-auto">Second item</div>
            <div className="bg-light border">Third item</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div>
        </Stack>
        <Stack gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div>
        </Stack>
    </div>
  )
}
