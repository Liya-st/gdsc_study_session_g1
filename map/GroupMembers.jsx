import './GroupMembersList.css'
const GroupMembers = ({ members }) => {
  return (
    <ul>
      {members.map((member, index) => {
         const { firstName, lastName } = member
         (
          <li key={index}>
            {firstName}{lastName}
          </li>
        )
      })}
    </ul>
  )
}


export default GroupMembers
