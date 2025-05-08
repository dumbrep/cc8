import { useEffect, useState } from "react";
import { db } from "../controller/firebase";
import { collection , getDocs, deleteDoc , doc} from "firebase/firestore";

const Display_Studnets = ()=>{

    const [student, setStudent] = useState([])

    const studentRef = collection(db,"student")
    
    useEffect(()=> {

        async function displayStd() {
            const data=  await getDocs(studentRef)

            const filterData = data.docs.map((doc)=>({
            ...doc.data(), id:doc.id
            }));

        setStudent(filterData)   
        }
        displayStd()        
    
    },[])

    const deleteStudent = async(id)=>{
        await deleteDoc(doc(db,"student", id))
        alert("The data deleted successfully!!!")
    }

    return(
        <>
            {student.map((std)=>(
                <div key={std.id}>
                    <div>Name : {std.name}</div>
                    <div>Roll no : {std.rollNo}</div>
                    <div>department : {std.department}</div>
                    <div>Year : {std.year}</div>

                    <button onClick={()=>{deleteStudent(std.id)}}>Delete </button>
                </div>   
                
            ))}
        </>
    )        
}

export default Display_Studnets
