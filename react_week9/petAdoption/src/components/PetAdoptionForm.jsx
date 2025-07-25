import {React, useState} from 'react'
import AdopterData from './AdopterData';

const PetAdoptionForm = () => {

  const [formData, setFormData] = useState([]);
  const [values, setValues] = useState({
    petName: "",
    petType:"Dog",
    breed:"",
    adopterName:"",
    email:"",
    phone:""
  });
  
  const [showTable, setShowTable] = useState(false);
  const {petName, petType, breed, adopterName, email, phone} = values;
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    } ) )
  }

  const handleSubmit = () => {
    console.log(` Pet Name: ${petName},
        Pet Type: ${petType},
        Breed: ${breed},
        Adopter Name: ${adopterName},
        Email: ${email},
        Phone No: ${phone}
      `)

      if (!petName || !petType || !breed || !adopterName || !email || !phone){
        alert("Please fill out each detail");
        return;
      }
  

  const data = { petName, petType, breed, adopterName, email, phone };
  setFormData((prevValues) => [...prevValues, data]);
  setShowTable(true);
  setValues({
            petName: "",
            petType: "Dog",
            breed: "",
            adopterName: "",
            email: "",
            phone: ""
        })
  }     
    const handleGoBack = () => setShowTable(!showTable) 

  
  let main = {
    maxWidth: "500px",
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "100%",
    padding: "10px 20px",
    marginTop:"30px",
    color: "#234d20",   
    borderRadius: "10px",
    margin: "0 auto",
    textAlign:"left",
    fontWeight:"bold"   
    }


  if (!showTable) {
    return (
      <div style ={main}>
        <form style={{display:"flex", flexDirection:'column'}} onSubmit={handleSubmit}>
          <label htmlFor="petName">Pet Name</label>
          <input type="text" id="petName" name="petName" placeholder="Pet Name" value={petName} onChange={handleChange} required></input>
          <label htmlFor="petType">Pet Type</label>
          <select value={petType} name="petType" onChange={handleChange}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Bird">Bird</option>
          </select>
          <label htmlFor="breed">Breed</label>
          <input type="text" name="breed" placeholder="Breed" value={breed} onChange={handleChange} required></input>
          
          <label htmlFor="adopterName">Your Name</label>
          <input type="text" name="adopterName" placeholder="Your Name" value={adopterName} onChange={handleChange} required></input>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required></input>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={handleChange} required></input>

          <button type="submit" id="submit-btn" >Submit</button>
        </form>
      </div>
  )
}
  else {
    return <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>
  }

}

export default PetAdoptionForm