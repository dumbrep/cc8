import { useEffect, useState } from "react";
import { db } from "../controller/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";

const CreateStudent = ()=>{
    const [student , setStudent] = useState({
        name : "",
        rollNo : "",
        department : "",
        year : "" 
    })

    const studentRef = collection(db,"student")

    const handelSubmit = async(e)=>{
        e.preventDefault()
        alert("Student created successfully!!")
        await addDoc(studentRef,student)
    }

    return(
        <>
            <h1>Create student</h1>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Enter name</label>
                <input type="text" onChange={(e)=>{setStudent({...student , name : e.target.value})}}/>
                <label htmlFor="">Enter roll no.</label>
                <input type="number" onChange={(e)=>{setStudent({...student , rollNo : e.target.value})}}/>
                <label htmlFor="">Enter department</label>
                <input type="text" onChange={(e)=>{setStudent({...student , department : e.target.value})}}/>
                <label htmlFor="">Enter year</label>
                <input type="number" onChange={(e)=>{setStudent({...student , year : e.target.value})}}/>

                <button type="submit" >Submit</button>
                <NavLink to={"/display"} >See students</NavLink>
            </form>
        
        </>
    )
}

export default CreateStudent