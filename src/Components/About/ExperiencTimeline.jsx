import React from 'react'
import { Timeline, Text } from '@mantine/core'

const ExperienceTmeline = () => {
  return (
    <Timeline active={2} color="#4a7879" bulletSize={34} style={{}}>
        <Timeline.Item bullet={<svg className='text-black'  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>} title="Oct. 2023 - Dec. 2023" style={{color:"black"}}>
            <Text c='dimmed' style={{color:"white"}}>
              Front End Developer Internship
            </Text>
            <Text size="xs" c='dimmed' style={{color:"white"}}>
              Harold Jean louis Inc.
            </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>} title="2023 - 2024" style={{color:"black"}}>
            <Text c='dimmed' style={{color:"white"}}>
              Freelance WebDeveloper
            </Text>
            <Text size="xs" c='dimmed' style={{color:"white"}}>
              TechFatale
            </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>} title="2024 - Now" style={{color:"black"}}>
            <Text c='dimmed' style={{color:"white"}}>
              Tier 1 Support Specialist
            </Text>
            <Text size="xs" c='dimmed' style={{color:"white"}}>
              DealerEProcess
            </Text>
        </Timeline.Item>
    </Timeline>

  )
}

export default ExperienceTmeline