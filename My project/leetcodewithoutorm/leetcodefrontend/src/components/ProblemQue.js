import React from 'react'

function ProblemQue() {
    const onClick = () => {
        location.replace("https://www.w3schools.com")
    }
    return (
        <>
            <div className='container my-2'>
                <h2>Enter Questions Here :</h2>
            </div>
            <div className='container'>
                <form action='http://127.0.0.1:8000/ProblemCreation/problem' method='POST'>
                    <label for='ProblemID'>Problem</label>
                    <input className='my-2' name='ProblemID' type="number" placeholder='ProblemID' />
                    <br />
                    <label for='Author'>Author</label>
                    <input className='my-2' name='Author' type="number" placeholder='Author' />
                    <br />
                    <label for='TopicID'>Author</label>
                    <input className='my-2' name='TopicID' type="number" placeholder='TopicID' />
                    <br />
                    <label for='DiffID'>Author</label>
                    <input className='my-2' name='DiffID' type="number" placeholder='DiffID' />
                    <br />
                    <label for='Title'>Author</label>
                    <input className='my-2' name='Title' type="text" placeholder='Title' />
                    <br />
                    <label for='Que'>Author</label>
                    <input className='my-2' name='Que' type="text" placeholder='Que' />
                    <br />
                    <label for='Ans'>Author</label>
                    <input className='my-2' name='Ans' type="text" placeholder='Ans' />
                    <br />
                    <input type="submit" formMethod='get' value='submit'></input>

                </form>
            </div>
        </>
    )
}

export default ProblemQue;