import React from 'react'
import "./imagesdis.css"
import { saveAs } from 'file-saver';

function Imagelist(props) {
    function download(e){
        saveAs(e,"image.png")
    }
    const image= props.images.map((imagedata)=>{
        return (
            <div className="divtag">
                <img className="listimage" src={imagedata.webformatURL} alt=""finding image/>
                <div class="ui bottom attached button" onClick={()=>download(imagedata.webformatURL)}>
                    <i class="cloud download icon"></i>
                    Download
                </div>
            </div>
        )
    })
    return (
        <div>
            {image}
        </div>
    )
}

export default Imagelist
