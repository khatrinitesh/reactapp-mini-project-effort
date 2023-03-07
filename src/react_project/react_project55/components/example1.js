import React from 'react';


const Skills = {
    WebDesigner:'HTML,CSS,JQUERY',
    GraphicDesigner:'ADOBE PHOTOSHOP,ADOBE ILLUSTRATOR',
    FullStackDeveloper:'REACTJS,NODEJS,MONGODB,EXPRESS'
}

const newSkills = {
    TS:"typeScript",
    sass:"SASS"
}


const updatedSkills = {...Skills,...newSkills}
console.log(updatedSkills)
export default function CustomExample() {
  return (
    <div>
        <ul>
            <li>{Skills.WebDesigner}</li>
            <li>{Skills.GraphicDesigner}</li>
            <li>{Skills.FullStackDeveloper}</li>
            <li>{newSkills.TS}</li>
            <li>{newSkills.sass}</li>
        </ul>
    </div>
  )
}
