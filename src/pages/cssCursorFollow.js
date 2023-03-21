import React, {useState} from 'react'
import $ from 'jquery'
import "../styles/cssCursorFollow.css"

export default function CssCursorFollow() {

  const [cursorX, setCursorX ] =  useState();
  const [cursorY, setCursorY ] =  useState();

  window.addEventListener("mousemove", (e) =>{
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  $(document).on("mousemove", function(e) {
    var magic = $(".magic");
    var magicWHalf = magic.width() / 2;
    magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });

  return (
      <>
        {/* <div className="scene">
          <div className="magic"></div>
        </div> */}
        
        <div className='sample-one'>
          <div className='sample-size'></div>
          <div className='sample-img'></div>
          <div className='cursor' style={{
            left: cursorX + "px",
            top: cursorY + "px",
          }}></div>
        </div>
      </> 
  )
}
