import GroupMembersList from './map';

const App = () =>{
const members=[{firstname:"Maedot", lastname:"Alemu"},
{firstname: "Michael", lastname: "Abebe"},
{firstname: "Nahom", lastname: "Tadesse"},
{firstname: "Nahom", lastname: "Mekonnen"},]

return (
  <div>
    <h1>Group Members</h1>
    <GroupMembersList members={members} />
  </div>
)

}
export default App