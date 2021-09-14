import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExamplePagination = (props) => (

    <Table celled >
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Average</Table.HeaderCell>
                <Table.HeaderCell>Count</Table.HeaderCell>
                <Table.HeaderCell>Start Date</Table.HeaderCell>
                <Table.HeaderCell>End Date</Table.HeaderCell>
                <Table.HeaderCell>Last Value</Table.HeaderCell>
                <Table.HeaderCell>Unit</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {props.data.map((row) => (
                <Table.Row key={row.id}>
                    <Table.Cell>{row.displayName}</Table.Cell>
                    <Table.Cell>{row.average}</Table.Cell>
                    <Table.Cell>{row.count}</Table.Cell>
                    <Table.Cell>{row.firstUpdated}</Table.Cell>
                    <Table.Cell>{row.lastUpdated}</Table.Cell>
                    <Table.Cell>{row.lastValue}</Table.Cell>
                    <Table.Cell>{row.unit}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
)

export default TableExamplePagination