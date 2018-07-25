import React , { Component } from 'react';
import { Link  } from 'react-router-dom';
import '../../assets/stylesheets/css/style.css';



class Sidebar extends Component {

    state = {
        toggleNewUser : false,
        toggleViewTable : false
    }

    handleUser = () => {
        const doesToggle = this.state.toggleNewUser;
        this.setState({toggleNewUser : !doesToggle})
    }

    handleTable = () => {
        const doesToggle = this.state.toggleViewTable;
        this.setState({toggleViewTable : !doesToggle})
    }

    render(){
        
        return(
        <div>
            <div className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                        <li className="nav-devider"></li>
                        <li className="nav-label">Home</li>
                        <li> <Link to="/admin/dashboard" aria-expanded="false"><i className="fa fa-tachometer"></i><span className="hide-menu">Dashboard </span></Link></li>
            
                        <li className="nav-label">New user</li>
                            <li onClick={this.handleUser}> <a className="has-arrow" aria-expanded="true"><i className="fa fa-wpforms"></i><span className="hide-menu">Create new user</span></a>
                                {this.state.toggleNewUser ? <ul aria-expanded="true" className="collapse in">
                                <li><Link to = "/admin/create-new-user/examiner"> Examiner </Link></li>
                                <li><Link to = "/admin/create-new-user/examinee"> Examinee</Link></li>
                                <li><Link to = "/admin/upload-file">Upload Excel file</Link></li>
                                </ul> : null} 
                            </li>
                            <li className="nav-label">Create test</li>
                            <li><Link to = "/admin/create-new-test/editor"><i className="fa fa-edit"></i>Add Question</Link></li>
                            <li><Link to = "/admin/view/questionbank"><i className="fa fa-list"></i> View QuestionBank</Link></li>
                                        
                            <li className="nav-label">View Information</li>
                            <li onClick={this.handleTable}> <a className="has-arrow  " aria-expanded="false"><i className="fa fa-table"></i><span className="hide-menu">View Table</span></a>
                                {this.state.toggleViewTable ? <ul aria-expanded="false" className="collapse in">
                                    <li><Link to="/admin/view/table-examinee">Examinee table</Link></li>
                                    <li><Link to="/admin/view/table-examiner">Examiner table</Link></li>
                                    <li><Link to="/admin/table-student-result">Results table</Link></li>
                                </ul> : null}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      )
    }
}

export default Sidebar;