import React from 'react';
import ExaminerTable from './examinerTable';


const Examiner = () => {

    return ( 
            <div className = "page-wrapper">
                <div className="container-fluid">
                   <div className="row justify-content-center">
                        <div className=".col-md-6 .col-md-offset-5">
                            <ExaminerTable  />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Examiner;