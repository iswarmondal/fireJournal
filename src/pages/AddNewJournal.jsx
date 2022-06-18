import React from 'react'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 

function AddNewJournal() {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(title, content)
        try{
            const docRef = await addDoc(collection(db, 'journals'),{
                title: title,
                content: content,
                date: new Date(),
            })
            console.log('Journal added <br>', docRef);
        }catch(error){
            console.log("Error adding document" + error);
        }
    }
  return (
    <div className='p-10 min-h-screen bg-slate-400'>
        <h1>Add New Journal</h1>
        <form>
            <label>Title:</label>
                <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <br />
            <label>Content:</label>
                <textarea name="content" rows="10" cols="30" onChange={(e)=>setContent(e.target.value)}></textarea>
            <br />
            <br />
            <input type="submit" value="Submit" onClick={handleClick} />
        </form>
    </div>
  )
}

export default AddNewJournal