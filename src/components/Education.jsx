import { useState } from 'react';
import '../styles/Education.css';

function Education() {
    const [name, setName] = useState("");
    const [degree, setDegree] = useState("");
    const [stdate, setStDate] = useState("");
    const [endate, setEnDate] = useState("");
    const [location, setLocation] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    function formatDate(dateString) {
        if (!dateString) return "";

        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    }

    if (isEditing) {
        return (
            <div className='education'>
                <h2>Education</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='College Name'
                />

                <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder='Degree'
                />

                <input
                    type="date"
                    value={stdate}
                    onChange={(e) => setStDate(e.target.value)}
                />

                <input
                    type="date"
                    value={endate}
                    onChange={(e) => setEnDate(e.target.value)}
                />

                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Location'
                />

                <button onClick={() => setIsEditing(false)}>
                    Submit
                </button>
            </div>
        );
    }

    return (
        <div className='education'>
            <h2>Education</h2>

            <div className="education-row">
                <h3>{name}</h3>
                <span>
                    {formatDate(stdate)} - {formatDate(endate)}
                </span>
            </div>

            <div className="education-row">
                <p>{degree}</p>
                <p>{location}</p>
            </div>

            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
        </div>
    );
}

export default Education;