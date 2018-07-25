import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Siderbar from '../../components/Sidebar/Sidebar.js';
import Dashboard from './Dashboard/Dashboard.js';
import Examiner from  './createNewUser/Examiner/Examiner.js';
import Examinee from  './createNewUser/Examinee/Examinee';
import Editor from  './createTest/Editor/Editor';
import UploadFile from  './uploadFile/uploadFile';
import ExaminerTable from  './viewTable/Examiner/Examiner';
import ExamineeTable from  './viewTable/Examinee/Examinee';
import ResultTable from  './viewTable/resultTable';
import QuestionBank from './viewQuestionBank/questionBank'
import TestCreation from './testCreation/testCreation'


class Admin extends Component {

    render () {

        return (
            <div>
                <Header />
                <Siderbar />
                
                <Switch>
                    <Route path = "/admin/dashboard" component = {Dashboard} />
                    <Route path = "/admin/create-new-user/examiner"  component = {Examiner} />
                    <Route path = "/admin/create-new-user/examinee"  component = {Examinee} />
                    <Route path = "/admin/create-new-test/editor"  component = {Editor} /> 
                    <Route path = "/admin/upload-file"  component = {UploadFile} />
                    <Route path = "/admin/view/table-examiner" component = {ExaminerTable} />
                    <Route path = "/admin/view/table-examinee"  component = {ExamineeTable} />
                    <Route path = "/admin/table-student-result"  component = {ResultTable} />
                    <Route path = "/admin/view/questionbank" component = {QuestionBank} />
                    <Route path = "/admin/create-new-test" component = {TestCreation} />
                </Switch>
            </div>
        );
    }

}

export default Admin;