import { SegmentedControl } from '@mantine/core'
import {React} from 'react'

export const ProductMenu = ({langVal, setLangVal, typeVal, setTypeVal}) => {
  

  return (
    <div className="w-full bg-transparent flex flex-col items-end justify-center pr-[1em]">
      {/* Filter #1 */}
      <div className="w-full flex items-center justify-end">
      <h3 className="bg-[#355748] rounded-bl-[5px] text-white pl-[0.5em] pr-[0.5em] rounded-tl-[5px] max-sm:hidden ">Programming Languages</h3>
      <div className="w-[40%] max-sm:w-[98%]">
      <SegmentedControl
      value={langVal}
      onChange={setLangVal}
      color="#355748"
      fullWidth
      data={[
          { label: 'All', value: 'all' },  
          { label: 'JSX', value: 'jsx' },
          { label: 'C++', value: 'c++' },
          { label: 'Python', value: 'python' },
          { label: 'JS', value: 'js' },
          { label: 'MySql', value: 'mysql' }
        ]}
      >

      </SegmentedControl>
      </div>
      </div>
      <br></br>
      {/* Filter #2 */}
      <div className="w-full flex items-center justify-end">
      <h3 className="bg-[#4a7879] rounded-bl-[5px] text-white pl-[0.5em] pr-[0.5em] max-sm:hidden rounded-tl-[5px]">Types</h3>
      <div className="w-[35%] max-sm:w-[98%]">
      <SegmentedControl
      color="#4a7879"
      fullWidth
      value={typeVal}
      onChange={setTypeVal}
      data={[
          { label: 'All', value: 'all' }, 
          { label: 'Personal', value: 'personal' },  
          { label: 'Academic', value: 'academic' },
        ]}
      >

      </SegmentedControl>
      </div>
      </div>
    </div>
  )
}

