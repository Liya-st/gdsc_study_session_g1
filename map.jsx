
const GroupMembersList = ({ members }) => {
  return (
    <ul>
      {members.map((member, index) => (
        <li key={index}>{member.name}</li>
      ))}
    </ul>
  )
}

export default GroupMembersList;