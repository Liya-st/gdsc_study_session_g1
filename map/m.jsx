import GroupMembers from './GroupMembers.jsx';

const App = () =>{
const members=[{firstName:"Maedot", lastName:"Alemu"},
{firstName: "Michael", lastName: "Abebe"},
{firstName: "Nahom", lastName: "Tadesse"},
{firstMame: "Nahom", lastName: "Mekonnen"},]

return (
  <div>
    <h1>Group Members</h1>
    <GroupMembers members={members} />
  </div>
)

}
export default App
