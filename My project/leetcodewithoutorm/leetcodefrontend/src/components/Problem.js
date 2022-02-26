import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Problem() {
    const [difficultyList, setDifficulty] = useState([]);

    const [level, setLevel] = useState('');

    const fetchtopic = () => {
        
        let url = 'http://127.0.0.1:8000/ProblemCreation/difficulty';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDifficulty(data))
    };

    useEffect(() => {
        fetchtopic();
        
    }, []);

    const handleOnchange = (event) => {
        setLevel(event.target.value);
    }

    const handleOnClickPost = () => {

        const lastele = myArray[0];
        console.log(lastele);
        let lastelem = 0;
        if (lastele.length===0){lastelem = 1}
        else {lastelem = lastele[lastele.length - 1][0] + 1};
        console.log(lastelem, level);
        axios
            .post('http://127.0.0.1:8000/ProblemCreation/difficulty', {
                DiffID: lastelem,
                DiffLevel: level,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
            
        fetchtopic()

    }

    const handleOnClickPut = () => {

        const lastele = myArray[0];
        const lastelem = lastele[lastele.length - 1][0] + 1;
        console.log(lastelem, level);
        axios
            .put(`http://127.0.0.1:8000/ProblemCreation/difficulty/${lastelem- 1}`, {
                DiffID: lastelem,
                DiffLevel: level,
                
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // fetchtopic()



    }

    const handleOnClickDelete = () => {

        const lastele = myArray[0];
        const lastelem = lastele[lastele.length - 1][0] + 1;
        console.log(lastelem, level);
        axios
            .delete(`http://127.0.0.1:8000/ProblemCreation/difficulty/${lastelem - 1}`, {
                DiffID: lastelem,
                DiffLevel: level,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // fetchtopic()

    }

    const myArray = Object.values(difficultyList);

    return (
        <>
            <div className='container my-3'>
                <h2><b> Problem - Difficulty Level</b></h2>
            </div>
            <div className='container'>
                Write here to Add the Difficulty Level here : <input type="text" onChange={handleOnchange} className='mx-3'></input>
                <span><button type="button" onClick={handleOnClickPost} className="btn-sm btn-primary mx-2">POST</button></span>

                <div className='container my-4'>
                    Your Questions ID and Difficulty Level are :
                </div>
                <div className="container">
                    {myArray.map((ele) => {
                        return ele.map((a) => {
                            return (
                                <>
                                    <div className="container my-3" key={[ele]}>
                                        {a[0]} :- {a[1]} <span><button type="button" onClick={handleOnClickPut} className="btn-sm btn-primary mx-2">PUT</button></span>
                                        <span><button type="button" onClick={handleOnClickDelete} className="btn-sm btn-primary mx-2">DELETE</button></span>
                                    </div>
                                </>
                            );
                        });
                    })}
                </div>
            </div>
        </>
    )
}

export default Problem;