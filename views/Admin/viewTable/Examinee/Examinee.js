import React from 'react';
import Examinee from './examineeTable';


const Examiner = () => {
    
    return (
            <div className = "page-wrapper">
                <div className="container-fluid">
                   <div className="row justify-content-center">
                        <div className=".col-md-6 .col-md-offset-5">
                            <Examinee />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Examiner;