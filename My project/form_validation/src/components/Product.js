import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
    const [name, setName] = useState('')
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setComment("");
    }

    const validate = (values) => {
        const errors = {};
        if (values.length < 2) {
            errors.name = 'Must be greater than 2 Characters! ';
        }
        else if (values.length > 15) {
            errors.name = 'Must be less than 15 Characters!'
        }
        return errors;

    };

    const onchangename = (e) => {
        setName(e.target.value)
        setErrors(validate(name))
    }


    return (
        <>
        <div className='body'>
            <div className=" container card my-3" style={{ width: "30rem" , height : "40rem" }}>
                <img src="https://www.tajhotels.com/content/dam/luxury/tle/16x7/Exterior-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg" className="card-img-top" alt="Hotel Taj" height='300px' width= 'auto'  />
                <div className="card-body">
                    <h4 className="card-title"><b>Hotel Taj , Pune</b></h4>
                    <br/>
                    <p className="card-text">Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered at Express Towers, Nariman Point, Mumbai. Incorporated by the founder of the Tata Group, Jamsetji Tata, in 1903, the company is a part of the Tata Group, one of India's largest business conglomerates. The company employed over 20,000 people in the year 2010</p>
                    <br/>
                    
                    <Link className="btn btn-dark" data-bs-toggle="modal" to="#exampleModalToggle" role="button">FeedBack</Link>

                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Give Feedback</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container my-3 ">
                                <form id='myForm'>
                                    <legend>Submit Comment</legend>
                                    <div className="mb-3">
                                        <label htmlFor="disabledSelect" className="form-label">Rating</label>
                                        <select id="disabledSelect" className="form-select" onChange={(e) => setRating(e.target.value)} value={rating}>
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                        <div id="emailHelp" className="form-text">Give the Rating Upto 5</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleName" className="form-label">Your Name</label>
                                        <input type="text" autoComplete='off' className="form-control" id="exampleInputName" onChange={onchangename} value={name} required/>

                                        <div id="emailHelp" className="form-text">{errors.name}</div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea type="text" placeholder='Please Enter Your Valuable Feedback...' onChange={(e) => setComment(e.target.value)} value={comment} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button disabled={name.length < 2 || name.length > 15} className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Hey {name}, Thank you For your Valuble Feedback</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>"name": {name}</p>
                            <p>"Rating": {rating}</p>
                            <p>"Comment": {comment}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" id='reset' onClick={handleSubmit}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Product