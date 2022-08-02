import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "./conditionalRendering.css";

const ConditionalRendering = () => {

    const navigation = useNavigate();
    const [pageNumber, setPageNumber] = useState(0);
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, [, pageNumber])

    const getUserDetails = async () => {
        const response = await (await fetch(`https://reqres.in/api/users?page=${pageNumber}`)).json();
        if (response && response.data.length > 0) {
            setUserDetails(response.data);
        }
    }

    if (userDetails.length === 0) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className="conditional-rendering-component-container">
            <button onClick={() => {
                navigation({
                    pathname: "showInfo",
                    search: "?userName=Vijay",
                    hash: "NoAction"
                })
            }}>Move</button>
            <Link to="showInfo">Take me</Link>
            <ul className="user-details-box">
                {
                    userDetails.map(eachUserDetails =>
                        <div key={eachUserDetails.id} className="each-user-details-chip">
                            <div className="user-name-row">
                                <label className="each-detail-label">User Name:</label>
                                <p className="each-detail-value">{eachUserDetails.first_name + " " + eachUserDetails.last_name}</p>
                            </div>
                            <div className="user-email-row">
                                <label className="each-detail-label">Email:</label>
                                <p className="each-detail-value">{eachUserDetails.email}</p>
                            </div>
                            <img src={eachUserDetails.avatar} alt="User Avatar" className="user-avatar" />
                        </div>
                    )
                }
            </ul>
            <div className="button-group-wrapper">
                <button
                    className="btn-last-page"
                    disabled={pageNumber === 0}
                    onClick={() => {
                        setPageNumber(pageNumber - 1);
                    }}
                >
                    See previous page
                </button>
                <button
                    className="btn-next-page"
                    disabled={pageNumber > 10}
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                    }}
                >
                    See next page
                </button>
            </div>
        </div>
    )
}

export default ConditionalRendering;