import React from 'react'
import BranchLocationList from '../../components/branch-locations-list/branch-locations-list.component';
import AllBranches from './branch-locations.json';

class BranchLocationPage extends React.Component {
    constructor() {
        super();

        this.state = {
            branches: AllBranches
            
        }
        console.log(this.state)
    }

    render() {
        const { branches } = this.state;
        return (
            <div className="city-page">
                {
                    branches.map((branch) =>
                        <BranchLocationList key={branch.id} branch={branch} />
                    )
                }
                <br />
                <br />
            </div>

        );

    }

}


export default BranchLocationPage;