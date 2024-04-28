const Members = ({memberInfo}) => {
    return (
        <div id="target" className="flex flex-col space-y-4 w-2/3">
            <div>
                <h2 className="text-xl font-bold text-gray-800">Admins</h2>
            </div>
            <div>
                <ul>
                    {memberInfo?.filter(member => member.isAdmin).map((member) => (
                        <li key={member.email} className="flex items-center space-x-4 py-2">
                            <div>
                                <p className="text-lg font-medium text-gray-800">{member.name}</p>
                                <p className="text-sm text-gray-600">{member.email}</p>
                            </div>
                            <span className="text-sm text-green-600 font-semibold">Admin</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Members;