import { Link } from 'react-router-dom'
import React from "react";

const NotFoundPage = () => (
    <div>
        404: Not Found
        <div><Link to="/">Go home!</Link></div>
    </div>
)

export default NotFoundPage