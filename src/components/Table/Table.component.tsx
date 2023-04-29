import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const TableComponent = ({ products }: any) => {
  const generateColumns = (data: any) => {
    if (data?.length === 0) return [];

    const firstItem = data[0];
    return Object?.keys(firstItem).map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      width: key.length * 10 + 50,
    }));
  };

  const rows = products?.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    attributes: product.attributes,
    categories: product.categories,
  }));

  const columns: GridColDef[] = generateColumns(rows);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
};

export default TableComponent;
