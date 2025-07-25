import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
    const { formData, handleGoBack } = this.props;
    return (
      <>
      <div>
        <table>
          <thead>
            <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data,index) => (
               <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petType}</td>
                <td>{data.breed}</td>
                <td>{data.adopterName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '20px', alignContent: "center" }}> 
        <button onClick={handleGoBack} style={{
                            padding: "10px 20px", 
                            boxSizing: "border-box",
                            width: "auto", 
                            display: "inline-block" 
                        }}>GO back</button>
      </div>
      </>
    )
  }
}

export default AdopterData