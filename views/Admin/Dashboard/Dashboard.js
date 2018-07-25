import React , { Component } from 'react';
import '../../../assets/stylesheets/css/style.css';
import '../../../assets/stylesheets/css/lib/bootstrap/bootstrap.min.css';


class Dashboard extends Component{

    render(){
      return(
        <div className="page-wrapper"> 
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-user f-s-40 color-primary"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>72</h2>
                                <p className="m-b-0">Total test taken</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-user f-s-40 color-success"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>17</h2>
                                <p className="m-b-0">Students who scored above 70</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-user f-s-40 color-warning"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>15</h2>
                                <p className="m-b-0">Students who scored above 50</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-user f-s-40 color-danger"></i></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>40</h2>
                                <p className="m-b-0">Students failed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row">
                    <div className="col-lg-10">
                            <div className="card p-30">
                                <div className="card-title">
                                    <h4>Recent Results</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>College</th>
                                                    <th>Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
    
                                                <tr>
                                                    <td>
                                                        <span>1</span>
                                                    </td>
                                                    <td>Harshit Singhai</td>
                                                    <td><span>harshit.singhai@bennett.edu.in</span></td>
                                                    <td><span>Bennett University</span></td>
                                                    <td><span className="badge badge-success">77/100</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>2</span>
                                                    </td>
                                                    <td>Rishabh Mishra</td>
                                                    <td><span>rishabh.mishra@bennett.edu.in</span></td>
                                                    <td><span>Bennett University</span></td>
                                                    <td><span className="badge badge-danger">30/100</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>3</span>
                                                    </td>
                                                    <td>Someone Else</td>
                                                    <td><span>something@gmail.com</span></td>
                                                    <td><span>Georgia Tech</span></td>
                                                    <td><span className="badge badge-warning">70/100</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>4</span>
                                                    </td>
                                                    <td>Somone one</td>
                                                    <td><span>someone@gmail.com</span></td>
                                                    <td><span>Stanford University</span></td>
                                                    <td><span className="badge badge-success">95/100</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
      )
    }

}

export default Dashboard;
