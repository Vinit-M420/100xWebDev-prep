let currentFormElem = 0;
let maxFormElem = 5;


function addfield(){
    const userfieldlabel = document.querySelector('input[name="fieldLabel"]').value.trim();
    const userfieldtype = document.querySelector('#dropdown').value;
    const parent = document.querySelector('.previewbody');

    if (userfieldlabel.length === 0) {
        alert('Please enter a descriptive Form label');
    }
    else {

        if (currentFormElem === maxFormElem){
            alert('Already added 5 form elements')
        }
        else{

        const newDivElem = document.createElement('div');
        let inputType = document.createElement('input');
        
        let inputLabel = document.createElement('label');
        inputLabel.innerHTML = userfieldlabel;

        if (userfieldtype === 'input'){
            inputType.setAttribute('type','text');
            inputType.setAttribute('placeholder','Enter your input')
        }

        else if (userfieldtype === 'email'){
            inputType.setAttribute('type','email');
            inputType.setAttribute('placeholder','Enter Email')
            
        }

        else if (userfieldtype === 'password'){
            inputType.setAttribute('type','password');
            inputType.setAttribute('placeholder', 'Enter password')
            
        }

        else if (userfieldtype === 'date'){
            inputType.setAttribute('type','date');
            inputType.setAttribute('placeholder', 'Enter date')
            
        }

        else if (userfieldtype === 'checkbox'){
            inputType.setAttribute('type','checkbox');
        }


        else if (userfieldtype === 'radio'){
            inputType.setAttribute('type','radio');
        }

        else{
            inputType = document.createElement('button');
            inputType.innerHTML = userfieldlabel || 'Submit';

        }

        parent.appendChild(newDivElem);

            if (userfieldtype !== 'checkbox' && userfieldtype !== 'button') {
            newDivElem.appendChild(inputLabel);
            newDivElem.appendChild(inputType);
        } else if (userfieldtype === 'checkbox' || userfieldtype === 'radio') {
            newDivElem.appendChild(inputType);
            newDivElem.appendChild(inputLabel);
        } else if (userfieldtype === 'button') {
            newDivElem.appendChild(inputType);
        }

        currentFormElem++;
    }
}
};

function resetform(){
    const parent = document.querySelector('.previewbody');
    parent.innerHTML = ''
    currentFormElem = 0;
}


