import { Client } from '@/lib/utils'
import { gql } from 'graphql-request'

interface StaffData {
  staffCollection: {
    items: StaffMember[]
  }
}

interface StaffMember {
  lastName: string
  firstName: string
  middleName: string
  qualification: string
  role: string[]
  teamRole: string
  portrait: {
    url: string
  }
}

export default async function OurTeam() {
  const query = gql`
    {
      staffCollection {
        items {
          lastName
          firstName
          middleName
          qualification
          portrait {
            url
          }
          role
          teamRole
        }
      }
    }
  `
  const teamMembers = await Client.request<StaffData>(query)

  return (
    <div className="bg-[#EDF7F4] xl:w-[80%] font-[rajdhani] text-blue-900 flex flex-col items-center justify-center py-12 overflow-hidden px-5">
      <h2 className="text-center text-3xl lg:text-5xl font-bold ">
        &quot;The Strength of the Team is Each Individual Member.
        <br />
        <span className="hidden md:block text-1xl lg:text-4xl">
          The Strength of Each Member is the Team.&quot;
        </span>{' '}
        – <span className="text-md lg:text-3xl italic">Phil Jackson</span>
      </h2>
      <p className="font-semibold text-center text-md lg:text-2xl  px-9">
        At GLoblinkz, our data analysts are the best in the business. Each
        expert brings a unique set of skills and deep insights to the table,
        ensuring that every data challenge is met with precision and creativity.
        Together, our team&apos;s unparalleled expertise transforms complex
        datasets into actionable strategies.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 text-indigo-900 mt-10">
        {teamMembers.staffCollection.items.map((team, idx) => (
          <div
            key={idx}
            className="flex flex-col aspect-square items-center w-[300px] bg-center bg-top lg:w-[400px] rounded-lg shadow-md"
            style={{ backgroundImage: `url(${team.portrait.url})` }}
          >
            <div className="bg-white/30 backdrop-blur-md flex flex-col items-center rounded-md mt-auto mb-4 w-[90%] shadow-lg">
              <h3
                className="font-bold text-3xl"
                style={{ WebkitTextStroke: '0.4px white' }}
              >{`${team.lastName} ${team.firstName}`}</h3>
              <p className="font-[600]">{team.teamRole}</p>
              {/* <p>{team.qualification}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
