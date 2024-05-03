import { Invitation } from "../../types/Invitation";
import Button from "../form/button";

const Invitations = ({ invitations }: { invitations: Invitation[] }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Invitations</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td><input type="text" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-5/6" /></td>
            <td><Button className="bg-blue-500 mb-4 w-4/5">Invite</Button></td>
          </tr>
          {invitations
            .filter((invitation) => invitation.state === "PENDING")
            .map((invitation, index) => (
              <tr key={index}>
                <td>{invitation.email}</td>
                <td><Button className="bg-orange-500 w-4/5">Rescind</Button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invitations;