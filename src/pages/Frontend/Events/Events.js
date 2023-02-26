import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  setDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore/lite";
import { firestore } from "../../../config/firebase";
import EventCard from "../components/Event-Card/EventCard";

export default function Todos() {
  const { user } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchDocuments = async () => {
    let array = [];

    const querySnapshot = await getDocs(collection(firestore, "events"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();

      array.push(data);
    });
    setDocuments(array);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <>
      <div className=" events py-5 home d-flex justify-content-center align-items-center "
      style={{backgroundColor:"#1f243d"}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center mb-4 text-light">Events</h2>
            </div>
          </div>
          {!isLoading ? (
            <div>
              {documents.map((events) => {
                return (
                  <EventCard
                    title={events.title}
                    creator={events.creator}
                    date={events.date}
                    time={events.time}
                    location={events.location}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-grow"></div>
            </div>
          )}
        </div>
      </div>
      <div className="modal fade" id="editModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Update Todo</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <EventCard
                    title={event.title}
                    creator={event.creator}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
