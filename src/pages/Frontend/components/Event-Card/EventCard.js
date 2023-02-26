import { collection, deleteDoc, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { firestore } from "../../../../config/firebase";
import { AuthContext } from '../../../../context/AuthContext';
import "../../../../scss/eventcard.scss";

function EventCard(props) {


  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const [document, setDocument] = useState([])
  const [todo, setTodo] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const handleChange = e => {
      setTodo(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const fetchDocument = async () => {

      let array = []

      // const q = query(collection(firestore, "User Data"), where("createBy.uid", "==", user.uid));
      const q = query(collection(firestore, "User Data"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          let data = doc.data()
          array.push(data)
      });
      setDocument(array)
      setIsLoading(false)
  }

  useEffect(() => {
      fetchDocument()
  })

  const handleDelete = async (todo) => {

      try {
          await deleteDoc(doc(firestore, "User Data", todo.id));

          const dataAfterDeleted = document.filter((doc, i) => {
              return todo.id !== doc.id
          })
          setDocument(dataAfterDeleted)
          return window.tostify('Deleted Successfully', 'success')
      }
      catch {
          setIsLoading(false)
          return window.tostify('Something went Wrong', 'error')
      }

  }





  return (
    <div className="card-container">
      <div className="card mt-3">
        <div className="card-body">
          <h2>{props.title}</h2>
          <p>Creator: {props.creator}</p>
          <p>Location:{props.location}</p>
          <p>Date: {props.date}</p>
          <p>Time: {props.time}</p>
          <div className="text-end">
           
           
            <button
              type="button"
              className="btn btn-primary btn-sm mx-2 bold text-light"
              style={{width: "80px"}}
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            // onClick={() => {
            //   setTodo(todo);
            // }}
            >
              Join
            </button>


            <button
              type="button"
              className="btn btn-outline-danger btn-sm  bold  "
              style={{width: "80px"}}
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={handleDelete}
            // onClick={() => {
            //   setTodo(todo);
            // }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default EventCard;
