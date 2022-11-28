import React from "react";
import { Button } from "react-bootstrap";

function Form(){
    return(
        <div className="form-page">
            <div className="f-nama">
                <p>Nama     :</p>
                <input/>
            </div>
            <div className="f-asal">
                <p>Asal     :</p>
                <input/>
            </div>
            <div className="f-gender">
                <p>Gender   :</p>
                <input/>
            </div>
            <div className="f-pertanyaan">
                <p>Pertanyaan:</p>
                <input/>
            </div>
            <Button>Kirim</Button>
        </div>
    )
}

export default Form;