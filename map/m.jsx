import GroupMembersList from './map';

const App = () =>{
const members=[{firstName:"Maedot", lastName:"Alemu"},
{firstName: "Michael", lastName: "Abebe"},
{firstName: "Nahom", lastName: "Tadesse"},
{firstMame: "Nahom", lastName: "Mekonnen"},]

return (
  <div>
    <h1>Group Members</h1>
    <GroupMembersList members={members} />
  </div>
)

}
export default App
