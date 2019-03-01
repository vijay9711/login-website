import React, { Component } from 'react';
import MemData from '../Data/member.json';
import './ProfileCard.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'c:/Users/vijis/node_modules/bootstrap-css-only/css/bootstrap.css';
import 'c:/Users/vijis/node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Table extends Component {
    state = {}
    componentDidMount() {

    }
    render() {
        var selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)"
        };

        const cellEditProp = {
            mode: 'dbclick'
        };
        const dat = JSON.stringify(MemData);
        const MemberData = JSON.parse(dat);

        const options = {
            onAddRow: this.onAddRow,
            onFilterChange: this.onFilterChange,
            onExportToCSV: this.onExportToCSV,
            onDeleteRow: this.onDeleteRow,
            saveText: 'Custom Save Text',
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {

                text: 'All', value: MemberData.rows.length
            }], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };

        return (
            <BootstrapTable data={MemberData.rows}
                version='4'
                striped
                hover
                options={options}
                cellEdit={cellEditProp}
                insertRow
                deleteRow
                saveText
                bodyStyle={{ overflow: 'overlay', }}
                containerClass="containerClass"
                selectRow={selectRowProp}
                search
                condesed
                pagination
                exportCSV
                height='295px'

            >
                <TableHeaderColumn isKey dataField='id' dataSort={true} width="100">User ID</TableHeaderColumn>
                <TableHeaderColumn dataField='username' dataSort={true} width="100"> Name</TableHeaderColumn>
                <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default Table;