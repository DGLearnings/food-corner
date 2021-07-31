import React from 'react';
import { Link } from 'react-router-dom';

import "./branch-locations-list.styles.scss"

const BranchLocationList = (props) => {

    const Items = props.branch.items;
    return (
        <>
            <div className="branchlist">
                <h1 className="name">Branch : {props.branch.title}</h1>
                <Link to={{ pathname: "/foodmenu", menu: Items , branch_name: props.branch.title}} >
                    <img src={`../../city/${props.branch.image}`} className="image" alt={props.branch.title} />
                </Link>
            </div>
        </>
    )
}

export default BranchLocationList;
