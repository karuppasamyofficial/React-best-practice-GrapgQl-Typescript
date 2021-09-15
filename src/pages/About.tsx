// import React from "react";


// const data=[{id:"",title:"mds"}]
// const About:React.FC=()=>{
//     // return(<div><InvoiceList  invoiceDetails={data} logo="jndsjg"/></div>)
//     return (<div></div>)
// }

// // interface InvoicePros{
// //   //propsname():type
// //     invoiceDetails:{id:string,title:string}[],
// //     logo?:string
 
    
// // }

// // const InvoiceList:React.FC<InvoicePros>=({invoiceDetails})=>{
// //     return<div></div>
// // }

// export default About;




import React, { useState,useEffect } from "react";
import {CREATE_POST}  from "../hooks/posts/CreatePost";
import { useQuery,useMutation } from "@apollo/client";

import Home from "./Home"

interface CreatePostType{
    title:string,
    body:string
 }
 

 interface PostsType{
    title:string
 }



const About:React.FC=()=>{
    const[createPost,{error,data}]=useMutation<{input:CreatePostType,createPost:PostsType}>
(CREATE_POST,{
    variables:{
        input:{
           title:"Hello",
           body:"Hello"
        }
    }
})





const onClickPost=()=>{
    createPost()
    if(data){
        console.log("createPost",data.createPost.title)
    }

}

    return (<div>       <button onClick={()=>onClickPost()}>Create user</button>
    </div>)
}


export default About;