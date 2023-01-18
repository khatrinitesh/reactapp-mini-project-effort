import React,{useState} from 'react';

const Skills = [
    "listining", "communication", "computer", "leadership", "management"
];

export default function FormValidation() {
    const [values, setValues] = useState(
        {
            name: "",
            skills: "", 
            age: "", 
            comment: ""
        }
    );


    const set = (name) => {
        return({
            target:{value}}) => {
                setValues((oldValues) => ({oldValues,[name]:value}))
            }
    }

    const saveFormValues = async () => {
        const response = JSON.stringify(values);
        console.log(response)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await saveFormValues()
            alert('Your information was successfully submitted!')
            setValues({
                name:'',
                skills:'',
                age:'',
                comment:''
            })
        }
        catch(e){
            alert(`Registration failed! ${e.message}`)
        }
    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <h2>Fill your Info</h2>
            {/* For name */}
            <label>Name*:</label>
            <input
                type="text" required
                value={values.name} onChange={set("name")}
            />
            {/* For skills */}
            <label>Skills*:</label>
            <select
                required
                value={values.skills} onChange={set("skills")}
            >
                <option value="">Select skills</option>
                {Skills.map(c => <option key={c}>{c}</option>)}
            </select>

            {/* For age */}

            <label>Age*:</label>
            <input
                type="number" required min="18"
                value={values.age} onChange={set("age")}
            />
            {/* For comment */}
            <label>Comment:</label>
            <textarea value={values.comment} onChange={set("comment")} />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
