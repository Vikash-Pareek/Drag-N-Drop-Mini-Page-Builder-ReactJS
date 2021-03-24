import React, { useState } from 'react';


function ModalBox(props) {

    const [modalBoxOpen, setModalBoxOpen] = useState(true);

    const modalBoxClose = () => {
        setModalBoxOpen(false);
    }

    var dataStorage = [];

    var element = document.getElementById("element_id");

    document.addEventListener('drop', (event) => {
        element.style.left = event.x + "px";
        element.style.top = event.y + "px";
        document.getElementById('x-axis').value = event.x;
        document.getElementById('y-axis').value = event.y;
        document.getElementById('elementName').value = element.innerText;
        element.style.display = "none";
    });


    function elementFormFieldsChanged() {

        var elementData = {
            xElementPosition: element.style.left,
            yElementPosition: element.style.top,
            elementXAxis: document.getElementById('x-axis').value,
            elementYAxis: document.getElementById('y-axis').value,
            elementLabelName: document.getElementById("elementName").value,
            elementFontSize: document.getElementById("fontSize").value + "px",
            elementFontWeight: document.getElementById("fontWeight").value,
        }

        element.innerHTML = elementData.elementLabelName;
        element.style.fontSize = elementData.elementFontSize;
        element.style.fontWeight = elementData.elementFontWeight;

        dataStorage.push(elementData);

        localStorage.setItem("dataSave", JSON.stringify(dataStorage));

        JSON.parse(localStorage.getItem("dataSave"));

        modalBoxClose();

        element.style.display = "block";
    }


    element.addEventListener('click', () => {
        element.style.border = "2.5px solid red";
        document.addEventListener("keydown", (event) => {
            if (event.key == "Enter") {
                setModalBoxOpen(true);
            }
            else if (event.key == "Delete") {
                localStorage.clear(dataStorage);
                element.style.display = "none";
            }
        });
    });


    return (
        <>
            {modalBoxOpen ?
                <div className="modal-box-back-drop" id={props.id}>

                    <div style={{ backgroundColor: "#ffffff", height: "70%", width: "20%", marginTop: "8%", marginLeft: "30%", position: "absolute" }}>
                        <div style={{ padding: "10px", display: "flex", flexDirection: "row" }}>
                            <h3 style={{ color: "#000000", paddingRight: "0px" }}>Edit Element</h3>
                            <button type="submit" onClick={modalBoxClose} style={{ padding: "2px", marginLeft: "58%", backgroundColor: "red", color: "#ffffff", cursor: "pointer" }}>x</button>
                        </div>
                        <hr style={{ margin: "6px 0" }} />
                        <div style={{ padding: "10px", display: "block", alignItems: "center" }}>
                            {/* <form action="#"> */}
                            <label>Text</label>
                            <br />
                            <input type="text" id="elementName" name="elementName" />
                            <br /><br /><br />
                            <label>X</label>
                            <br />
                            <input type="number" id="x-axis" name="xAxis" />
                            <br /><br /><br />
                            <label>Y</label>
                            <br />
                            <input type="number" id="y-axis" name="yAxis" />
                            <br /><br /><br />
                            <label>Font Size (in px)</label>
                            <br />
                            <input type="number" id="fontSize" name="fontSize"></input>
                            <br /><br /><br />
                            <label>Font Weight (Range 100 to 900)</label>
                            <br />
                            <input type="range" min="100" max="900" step="100" id="fontWeight" name="fontWeight"></input>
                            <br /><br /><br />
                            <input type="submit" value="Save Changes" onClick={elementFormFieldsChanged} style={{ backgroundColor: "blue", color: "#ffffff", padding: "8px", cursor: "pointer" }}></input>
                            {/* </form> */}
                        </div>
                    </div>

                </div> : null}
        </>
    )
}

export default ModalBox;
