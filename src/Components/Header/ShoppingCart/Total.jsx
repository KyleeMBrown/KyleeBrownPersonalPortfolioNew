import {React} from 'react'
import { Table, Group, Paper } from '@mantine/core'


const Total = ({total}) => {


  return (
    <div className="w-full  h-[20%] p-[0.5em] flex items-center justify-end">
        <Paper shadow="lg">
            <div cassName="w-[50%] h-full">
                <Table>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td>
                                <Group>
                                <h3 className="font-semibold uppercase">subtotal:</h3> 
                                <p>${total}.00</p>
                                </Group>
                                <Group >
                                <h3 className="font-semibold uppercase">tax:</h3> 
                                <p>${(total * .1).toFixed(2)}</p>
                                </Group>
                                <Group>
                                <h3 className="font-semibold uppercase">total:</h3> 
                                <p>${(total + (total * .1)).toFixed(2)}</p>
                                </Group>
                            </Table.Td>
                        </Table.Tr>
                        
                    </Table.Tbody>
                </Table>
            </div>
        </Paper>
</div>
  )
}

export default Total