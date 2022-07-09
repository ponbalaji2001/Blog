import './App.css';
import Header from './Header.js';
import BlogList from './BlogList.js';
import AddBlog from './addBlog.js'
import { useState } from 'react';
import { Route } from 'react-router-dom';
import BlogSingle from './BlogSingle';

function App() {
  const blogLists=[
    {
       "id": 1,
      "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f8ce9de833d_photo-1433854304641-67729357fe18.jpg",
      "title": "Still Standing Tall",
      "description": "Life begins at the end of your comfort zone.",
      "author": {
        "authorid": 1,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
        "name": "William Wong",
        "date": "9/25/2015"
        }
},
{
    "id": 2,
    "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7caade8338_photo-1431329842981-433c8635c2b9.jpg",
    "title": "Sunny Side Up",
    "description": "No place is ever as bad as they tell you it’s going to be.",
    "author": {
        "authorid": 2,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg",
        "name": "Mat Vogels",
        "date": "9/25/2015"
        }
},
{
    "id": 3,
    "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f1017de8349_photo-1433155327100-12aac6a14ff1.jpg",
    "title": "Water Falls",
    "description": "We travel not to escape life, but for life not to escape us.",
    "author": {
        "authorid": 2,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg",
        "name": "Mat Vogels",
        "date": "9/25/2015"
        }
},
{
    "id": 4,
    "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f5e3ede8340_photo-1441906363162-903afd0d3d52.jpg",
    "title": "Through the Mist",
    "description": "Travel makes you see what a tiny place you occupy in the world.",
    "author": {
        "authorid": 1,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
        "name": "William Wong",
        "date": "9/25/2015"
        }
},
{
    "id": 5,
    "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f9857de8342_photo-1442347504183-965bd14449ac.jpg",
    "title": "Awaken Early",
    "description": "Not all those who wander are lost.",
    "author": {
        "authorid": 2,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg",
        "name": "Mat Vogels",
        "date": "9/25/2015"
        }
},
{
    "id": 6,
    "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f0ea0de8344_photo-1433878455169-4698e60005b1.jpg",
    "title": "Try it Always",
    "description": "The world is a book, and those who do not travel read only one page.",
    "author": {
        "authorid": 2,
        "imgUrl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg",
        "name": "Mat Vogels",
        "date": "9/25/2015"
        }
}]

const [blog, setBlog]= useState(blogLists)
function onAddBlog(event){
  event.preventDefault();
  let blogTitle=document.getElementById('title').value;
  let blogDescription=document.getElementById('description').value;
  let blogAuthor=document.getElementById('author').value;
  let blogImgurl=document.getElementById('imgurl').value;
  if(blogTitle===""){
      document.getElementById('title').classList.add("error");
      return;
  }
  const blogData={
      "id": Math.random(),
      "imgurl": blogImgurl,
      "title": blogTitle,
      "description": blogDescription,
      "author": {
          "authorid": 2,
          "imgUrl": blogImgurl,
          "name":blogAuthor,
          "date": "06/07/2023",
          }
  }
  console.log(blogData);

  setBlog((previousBlog)=>{
    return [...previousBlog, blogData]
  });
  
}
  return (
    <div className="App">
      <Header></Header>
      <Route path="/addBlog">
         <AddBlog onFormSubmitHandler={onAddBlog}></AddBlog>
      </Route>
      <Route path="/blogList">
         <BlogList blogData={blog}></BlogList>
      </Route>
      <Route path="/blogSingle/:blogId">
         <BlogSingle blogData={blog}></BlogSingle>
      </Route>
    </div>
  );
}

export default App;
