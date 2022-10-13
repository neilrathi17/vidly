import React, { Component } from 'react';
import TableBody from './tablebody';
import TableHeader from './tableheader';

const table = (props) => {
    const {columns,sortColumn,onSort,data}=props;
    return ( 
        <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />
       
      </table>
     );
}
 
export default table;