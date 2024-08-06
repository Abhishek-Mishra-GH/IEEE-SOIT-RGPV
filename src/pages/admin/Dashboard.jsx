import React, { useState, useEffect } from "react"
import axios from "axios"

const Dashboard = ({ setLoggedIn }) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function fetchTeams() {
            try {
                const token = localStorage.getItem('token');
                const resp = await axios.get('https://167.71.224.142:8344/api/teams', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                // console.log(resp.data)
                console.log(resp.data);
                setTeams([...resp.data]);
            } catch (err) {
                console.log(err);
            }
        }

        fetchTeams();

    }, [])

    const TeamCard = ({ team }) => {
        return <div className="flex w-[23rem] sm:w-[25rem] flex-col gap-2 border-2 rounded-lg shadow-sm m-2 p-3 sm:py-5 sm:px-6 hover:scale-[1.02] hover:shadow-lg text-[0.9rem]">
            <h3 className="text-lg font-bold"> {team.teamName.toUpperCase()} </h3>
            <p><span className="font-bold">Startup idea:</span> {team.startupIdea} </p>
            <p><span className="font-bold">Leader:</span> {team.teamLeader} </p>
            <p><span className="font-bold">Email:</span> {team.email} </p>
            <p><span className="font-bold">Contact:</span> {team.contact} </p>
            <p><span className="font-bold">Branch:</span> {team.branch}  </p>
            <p><span className="font-bold">College:</span> {team.collegeName}  </p>
            <p><span className="font-bold">Year:</span> {team.year}  </p>
            <p><span className="font-bold">Medium of reach:</span> {team.mediumOfReach}  </p>
            <h4 className="text-lg font-bold">Team Members:</h4>
            <ul className="pl-6">
                {team.teamMembers.map((member, index) => {
                    return <li key={index}> {member} </li>
                })}
            </ul>
        </div>
    }

    const DataCard = ({ title, content }) => {
        return <div className="p-4 border-2 rounded-lg shadow-sm flex justify-center">
            <h3 className="text-xl inline-block font-bold"> {title.toUpperCase()}: </h3>
            <span className="text-xl px-1"> {content} </span>
        </div>
    }

    return (
        <div className="min-h-screen">
            {/* dash nav */}
            <div className="flex justify-between bg-primary-background h-16 items-center px-5">
                <h1 className="text-white text-lg">DASHBOARD</h1>
                <div className="text-lg text-primary-foreground">EVENT</div>
                <button
                    className="px-4 py-2 rounded-full border-2 text-white border-white hover:border-primary-foreground hover:text-primary-foreground"
                    onClick={() => {
                        localStorage.removeItem('token');
                        setLoggedIn(false);
                    }}
                >LOGOUT</button>
            </div>

            {/* content */}
            <main className=" w-full">
                {/* left */}
                <section className="p-1">
                    <DataCard title={"Total Registrations"} content={teams.length} />
                </section>

                {/* right */}
                <section className="border-2 rounded-lg pb-4">
                    <h2 className="text-2xl font-bold mt-5 mb-3 text-center">REGISTERED TEAMS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
                        {teams.map(team => {
                            return <TeamCard key={Math.random() * 1000} team={team} />
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;