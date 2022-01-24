import { type } from 'os';
import { MouseEventHandler, useCallback, useState } from 'react';
import data from './data.json'

type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = 'ascn' | 'desc';

function sortData({tableData, sortKey, reverse}:{
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;  

}){
    if(!sortKey) return tableData
    const sortedData = data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ?  1 : -1
    })
    if(reverse){
        return sortedData.reverse();
    }

    return sortedData;
}

function SortButton({sortOrder, columnKey, sortKey, onClick}:{
    sortOrder: SortOrder
    columnKey: SortKeys 
    sortKey: SortKeys 
    onClick: MouseEventHandler<HTMLButtonElement>
}){
    return <button onClick={onClick} className={
        `${sortKey === columnKey && sortOrder === 
        'desc' ? 'sort-button sort-reverse' : 'sort-button'}`}>
        l
    </button>;
}

function Table({data}:{data: Data}) {

    const [sortKey, setSortKey] = useState<SortKeys>('stt');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const headers: {key: SortKeys, label: string}[] = [
        {key: "stt", label: "STT"},
        {key: "mlop", label: "Mã lớp"},
        {key: "tlop", label: "Tên lớp"},
        {key: "slbp", label: "Số lượng biểu phí"},
        {key: "ncn", label: "Ngày cập nhật"},
    ]

    const sortedData = useCallback(
        () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}), 
        [data, sortKey, sortOrder]
    );

function changeSort(key: SortKeys){
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(key);
}
  return(
      <table>
          <thead>
              <tr>
                  {headers.map((row) => { 
                      return <td key={row.key}>{row.label}<SortButton
                      columnKey={row.key}
                      onClick={() => changeSort(row.key)}
                      {...{
                          sortOrder,
                          sortKey
                      }}
                      />
                    </td>;
                  })}
              </tr>
          </thead>

          <tbody>
              {sortedData().map((lop) => {
                  return (
                      <tr key={lop.stt}>
                          <td>{lop.stt}</td>
                          <td>{lop.mlop}</td>
                          <td>{lop.slbp}</td>
                          <td>{lop.ncn}</td>
                      </tr>
                  );
              })}
          </tbody>
      </table>
  );
}

export default Table;
