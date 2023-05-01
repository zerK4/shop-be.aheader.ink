import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import _ from 'lodash';

export const TableComponent = ({ products }: any) => {
  const generateColumns = (data: any) => {
    if (_.isEmpty(data)) return [];

    const firstItem = _.head(data);
    return _.map(_.keys(firstItem), (key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      width: key.length * 10 + 50,
    }));
  };

  const rows = _.map(products, (product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    attributes: product.attributes,
    categories: product.categories,
  }));

  const columns: GridColDef[] = generateColumns(rows);

  return (
    <div style={{ height: 'auto', width: '100%' }} className="border-none">
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
        className="border-none p-2"
      />
    </div>
  );
};

export default TableComponent;
