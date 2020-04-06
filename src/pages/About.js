import React, {useState, useEffect} from 'react'
import Axios from "axios";
import Movie from '../components/Movie';

function About() {
  // tạo usetate 
  const [state, setState] = useState({listMovie: [], status: true})

  useEffect(()=>{
    // tương dương componnetdidmout
     Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
     })
     .then(rs=>{
      //  console.log(rs.data);
       setState({
         listMovie: rs.data
       })
     })
     .catch(err => {
       console.log(err);
     })
  })

  const renderHTML = () => {
    return state.listMovie.map((movie)=>{
      return <Movie key={movie.maPhim} movie={movie}/>
    })
  }
  return (
    <div>
      <h3>About</h3>
      <div className="row">{renderHTML()}</div>
    </div>
  )
}
export default About;

