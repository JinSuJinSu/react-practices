import React, {Fragment} from 'react';
import Clock from './Clock';

function content (){
    return(
        <Fragment>
            <p>{'Dynamic Html Rendering'}</p>
            <Clock/>
        </Fragment>
        
    );
}

export default content;
