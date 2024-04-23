import { ReactElement, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export function YearsTable() {
  const [number, setNumber] = useState('0');
  const [years, setYears] = useState<Array<number>>([]);
  const [months, setMonths] = useState<Array<string>>(["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]);
  const [data, setData] = useState<Array<number[]>>([]);

  const rangeYears = (n: string) => {
    const yearAddition = Number(n);
    const copy = [];
    for(let i = 1; i <= yearAddition; i++) {
      copy.push(2000 + i);
    }
    setYears(copy);
    getTableValues();
  }

  const getTableValues = () => {
    const n = years.length;
    for(let i = 1; i <= n; i++) {
      const refArr = Array.from(
        { length: 12 },
        () => Math.floor(Math.random() * (40 - 20 + 1))
      );
      setData([...data, refArr]);
    }
    return null;
  }

  const printTableValues = (num: number) => {
    let content: ReactElement[] = [];
    for (let item of data[num]) {
      content.push(<td>{item}</td>);
    }
    return content;
  };

  return (
    <>
      <h3>Digite el numero de años a calcular</h3>
      <input placeholder='Ejemplo 3...' name="name" type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <Button onClick={() => rangeYears(number)}>Generar</Button>
      <Table className='table'>
        <thead>
            <tr>
                <th>Year</th>
                { months.map((month,key) =>  {
                    return (
                      <th key={key}>{month}</th>
                    )
                  })
                }
              <th>TOTAL</th>
            </tr>
        </thead>
        <tbody>
              { years.map((product, key) =>  {
                  return (
                    <tr key={key}>
                      <td>{product}</td>
                      <>
                      {
                        data.map((numList,i) =>(
                          <tr key={i}>
                            {
                              numList.map((num,j)=>
                                <td key={j}>{num}</td>
                              )
                            }
                          </tr>
                        ))
                      }
                      </>

                    </tr>
                  )
                })
              }

        </tbody>
        <tfoot>
          {
            data.map((numList,i) =>(
              <tr key={i}>
                {
                  numList.map((num,j)=>
                    <td key={j}>{num}</td>
                  )
                }
              </tr>
            ))
          }
        </tfoot>
      </Table>
    </>
  )
}

