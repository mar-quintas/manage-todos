import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";


function useTodosData (props) {
    const [todosData, setTodosData] = useState([]);

  function getData () {
    axios({
      method: "GET",
      url: "/todos",
    })
    .then((response) => {
      const res = response.data
      setTodosData(res)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  }

  function deleteData(id) {
      axios({
        method: "DELETE",
        url:"/todos/" + id,
      })
      .then((response) => {
        getData()
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }

  function editData(id, title, ready){
      if (ready){ready=false} else {ready=true}
      axios({
        method: "PATCH",
        url:"/todos/" + id,
        data: {
          title: title,
          checked: ready,
        }
      })
      .then((response) => {
        getData()
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }

  function editTitle(id, title, ready){
      axios({
        method: "PATCH",
        url:"/todos/" + id,
        data: {
          title: title,
          checked: ready,
        }
      })
      .then((response) => {
        getData()
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }


  return {
    todosData,
    getData,
    deleteData,
    editData,
    editTitle
  };
}

export default useTodosData;
