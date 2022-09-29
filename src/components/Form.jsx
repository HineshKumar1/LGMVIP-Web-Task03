import React,{useState} from 'react'
import StudentCard from './StudentCard'

export default function Form() {
    const [InputValue, setInputValue] = useState({
        name : "",
        email : "",
        website : "",
        image : "",
        gender : "Male",
        skills : ["java"," C++"]
    })
    const [Records, setRecords] = useState([])

    const TextHandler = (event)=>{
        const name = event.target.name;
        const value =event.target.value;
        setInputValue({...InputValue,[name]:value})
    }
    const SubmitForm = (event)=>{
      event.preventDefault();
      const NewRecords = {...InputValue}
      setRecords([...Records,NewRecords])
      
    }
  return (
    <>
    <div className="container">
    <form onSubmit={SubmitForm}>
    <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input onChange={TextHandler} name="name" value={InputValue.name} type="text" className="form-control" id="inputName" placeholder="Enter Name here" />
    </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input onChange={TextHandler} name="email" value={InputValue.email} type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Website</label>
    <input onChange={TextHandler} name="website" value={InputValue.website} type="link" className="form-control" id="inputWebsite" placeholder="Enter Website Link" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Image link</label>
    <input onChange={TextHandler} name="image" value={InputValue.image} type="link" className="form-control" id="inputWebsite" placeholder="Enter Website Link" />
  </div>
  <fieldset className="form-group my-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input onChange={TextHandler} className="form-check-input" value="Male"  type="radio" name="gender" id="gridRadios1"  checked />
          <label className="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input onChange={TextHandler} className="form-check-input" value="Female" type="radio" name="gender" id="gridRadios2" />
          <label className="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <fieldset className="form-group my-3">
      <legend className="col-form-label col-sm-2 pt-0">Skills</legend>
  <div className="form-check form-check-inline">
  <input  className="form-check-input" name='skills' value="Java" type="checkbox" id="inlineCheckbox1"  />
  <label className="form-check-label"  for="inlineCheckbox1">Java</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" name='skills' value="C++" type="checkbox" id="inlineCheckbox2"  />
  <label className="form-check-label" for="inlineCheckbox2">C++</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name='skills' value="Python" id="inlineCheckbox3" />
  <label className="form-check-label" for="inlineCheckbox3">Python</label>
</div>
</fieldset>
<div className="row">
    <div className="col-sm">
      <div className="form-group">
      <button type="Submit" className="btn btn-primary">Enroll Student</button>
      </div>
    </div>
</div>
</form>
    </div>
    <br />
    <div className='row'>
      {
        Records.map((Element)=>{
          return(
          <div className="col-md-4">
            <StudentCard name={Element.name} email={Element.email} ImageUrl={Element.image} 
            website={Element.website} gender={Element.gender} skills={Element.skills}></StudentCard>
          </div>
          )
        })
      }
      </div>
    </>    
  )
}
