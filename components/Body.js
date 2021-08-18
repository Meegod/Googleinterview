import React,{useState} from 'react'
import MicIcon from '@material-ui/icons/Mic';
import { useHistory,Redirect } from "react-router-dom";
import './header.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




function Body() {
  const[text,setText]=useState("");
  // const [count, setCount] = useState(0);

  //instantiate the usehistory function
  let history=useHistory();



  const handleClick=(e)=>{
    // e.preventDefault();
      // console.log(e.target.value);
      // history.push("/https://www.google.com/");
      // history.push('/about');
      // <Redirect to="/about" /> 
      // window.location.href = `https://google.com/${text}`;
      let url=`https://google.com/search?q=${text}`;
      console.log(url);
    //   //  history.push(url);
    //  <Redirect to={url} /> 
    window.location.href=url;


      // <Route exact path="/" render={() => (window.location = "https://google.com")} />


  }
  const handleInput=(e)=>{
    console.log(e.target.value);
    setText(e.target.value);
  }
   //Algorithm for this project

   //1. when the user clicked the search button he should be 
   //redirected to a certain page
   //2. What pageare we talking about---- `https://google.com/search?q={users-text-here}`
  
   //WHAT ARE YOUR PLANS
   //1. I NEED TO GET THE TEXT  hOW
        //CREATE A STATE FUNCTION THAT HOLDS THE TEXT AND SAVE ONCLICK
        //WHEN THE TEXT IS CLICKED THEN IT SHOULD BE PASSED AS A PARAM TO 
        //THE REDIRECTEED PAGE




    return (
        <div class="mainBody">
        <img
         src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
         alt="Google Logo"
       />

       <div class="search">
         <div class="search__input">
           <span class="material-icons"> search </span>
           <input type="text" onChange={handleInput}
           value={text}
            />
           <span class="material-icons">
           <MicIcon/>
           </span>
         </div>
 
         <div class="search__buttons">
           <button onClick={handleClick}>Google Search</button>
           <button>I'm Feeling Lucky</button>
         </div>
       </div>
       {text}

     </div>

    )
}

export default Body
