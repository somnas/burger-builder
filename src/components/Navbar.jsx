import React, {Link} from 'react'
import BuildPage from '../pages/BuildPage'

export default function Navbar() {
    return (
        <div>
            <Link to={BuildPage} name="builder" />
        </div>
    )
}
