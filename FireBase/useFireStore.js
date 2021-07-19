import { useEffect, useState } from "react";
import { db } from "./firebase";

export const useFirestore = () => {
  const [fields, setFields] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const subscribeFields = db
      .collection("fields")
      .orderBy("Date")
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setFields(fetched);
      });
    const subscribeCourses = db.collection('courses').onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setCourses(fetched);
    })


    return {subscribeFields, subscribeCourses};
  }, []);

  // Add Course
  const addCourses = async (input , plateform, field) => {
    await db.collection("courses").add({
     ...input , ...plateform, ...field, Date : new Date, verified: false
    });
  };

  const addMessage = async (input, kind) => {
    await db.collection("messages").add({
     ...input , ...kind, Date : new Date
    });
  };

  return {fields, courses , addCourses, addMessage};
};