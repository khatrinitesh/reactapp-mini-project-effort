import React,{useState} from 'react';
import copy from "copy-to-clipboard";  
import styled from 'styled-components';


export const Container = styled.div`
   width: 600px;
   margin: 40px auto;
   position: relative;
`
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Input1 = styled.input`
   height: 50px;
   width: 100%;
   padding: 0;
   font-size: 25px;
`
export const Input2 = styled.input`
   height: 50px;
   width: 100%;
   padding: 0;
   font-size: 25px;
   margin-top: 70px;
`
  
export const Button = styled.button` 
  padding: 20px; 
  font-size: 20px; 
  position: relative; 
  left: 30%; 
  margin-top: 10px; 
  cursor: pointer;
`;

export default function CopyTxtClipboard() {
    const [copyText, setCopyText] = useState('');

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
     } 
     
     const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
     }
  return (
    <div>
    <Container>
          <Input1 
            type="text" 
              value={copyText} 
                onChange={handleCopyText} 
                  placeholder='Enter the text you want to copy' />
    
          <Button onClick={copyToClipboard}>
               Copy to Clipboard
          </Button>
    
          <Input2 
            type="text" 
               placeholder='Enter the text you have copied' />
        </Container>
    </div>
  )
}
