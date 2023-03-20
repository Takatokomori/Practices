import React from 'react'
import $ from 'jquery'

export default function CssCursorFollow() {
  jQuerycode = () =>{
    var magic = $(".magic");
    var magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
      magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  }
  return (
    <div className="scene">
        <div className="magic"></div>
    </div>
  )
}
