import React from 'react'
import $ from 'jquery'

export default function CssCursorFollow() {
  $(document).on("mousemove", function(e) {
    var magic = $(".magic");
    var magicWHalf = magic.width() / 2;
    magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });

  return (
    <div className="scene">
        <div className="magic"></div>
    </div>
  )
}
