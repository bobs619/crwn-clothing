import React from 'react';

import { FormInputLabel, GroupContainer, FormInputContainer } from './formInputStyles';

const FormInput = ({label,  ...props}) =>  (
    <GroupContainer>

        <FormInputContainer  {...props} />

        {label ? 
        (<FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
            {label}
        </FormInputLabel>) : null}
        

    </GroupContainer>  
);

export default FormInput;