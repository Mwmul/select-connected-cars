import * as React from 'react';
import styled from 'styled-components';
import { TrackingData } from '../data/trackingData';

const DataTable = styled.div``;


export default (({data}) => {
    return (
        <DataTable>
            data table
        </DataTable>
    )
}) as DataTableComponent


interface props {
    data: TrackingData
}

type DataTableComponent = React.FC<props>;