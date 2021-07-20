import React from 'react';
import './Step.css'

function Step(props) {
    
    let inputData = '';
    
    return (
        <div className="step-container">
            <label className="step-label">Krok:</label>
            <input className="step-input" min="1" value={props.stepValue} type="number"
                ref={(data) => { inputData = data; }} 
                onChange={() => {props.setStepMethod(inputData);}} />
        </div>
    );
}



// class Step extends Component {


//     updateStep = () => {
//         this.props.setStep(this._stepInput.value);
//     };

//     render() {

//         return (
//             <div className="step-container">
//                 <label className="step-label">Krok:</label>
//                 <input className="step-input" min="1" type="number"
//                     ref={(data) => { this._stepInput = data }}
//                     onChange={this.updateStep} />
//             </div>
//         );
//     };

// }


export default Step;